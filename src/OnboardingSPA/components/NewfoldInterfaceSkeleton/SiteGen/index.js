import { useEffect, useRef, useState } from '@wordpress/element';
import { useLocation } from 'react-router-dom';
import { useSelect, useDispatch } from '@wordpress/data';

import Header from '../../Header';
import Content from '../../Content';
import Sidebar from '../../Sidebar';
import themeToggleHOC from '../themeToggleHOC';
import NewfoldInterfaceSkeleton from '../index';
import { ThemeProvider } from '../../ThemeContextProvider';
import { store as nfdOnboardingStore } from '../../../store';
import classNames from 'classnames';
import { setFlow } from '../../../utils/api/flow';
import {
	generateSiteGenMeta,
	getSiteGenIdentifiers,
} from '../../../utils/api/siteGen';
import Footer from '../../Footer';
import { initialize as initializeSettings } from '../../../utils/api/settings';
import { init as initializePlugins } from '../../../utils/api/plugins';
import { init as initializeThemes } from '../../../utils/api/themes';
import { trigger as cronTrigger } from '../../../utils/api/cronTrigger';
import {
	MAX_RETRIES_SITE_GEN,
	SKIP_FLOW_ERROR_CODE_DATABASE,
	SKIP_FLOW_ERROR_CODE_20,
} from '../../../../constants';

// Wrapping the NewfoldInterfaceSkeleton with the HOC to make theme available
const ThemedNewfoldInterfaceSkeleton = themeToggleHOC(
	NewfoldInterfaceSkeleton,
	'nfd-onboarding-sitegen-dark',
	'nfd-onboarding-sitegen-light'
);

const SiteGen = () => {
	const [ failedApi, setFailedApi ] = useState( [] );
	const { newfoldBrand } = useSelect( ( select ) => {
		return {
			newfoldBrand: select( nfdOnboardingStore ).getNewfoldBrand(),
		};
	}, [] );

	useEffect( () => {
		document.body.classList.add( `nfd-brand-${ newfoldBrand }` );
	}, [ newfoldBrand ] );
	const location = useLocation();

	const { currentData, initialize, pluginInstallHash, siteGenErrorStatus } =
		useSelect( ( select ) => {
			return {
				currentData:
					select( nfdOnboardingStore ).getCurrentOnboardingData(),
				initialize: select( nfdOnboardingStore ).getInitialize(),
				pluginInstallHash:
					select( nfdOnboardingStore ).getPluginInstallHash(),
				siteGenErrorStatus:
					select( nfdOnboardingStore ).getSiteGenErrorStatus(),
			};
		} );

	const { setCurrentOnboardingData, updateSiteGenErrorStatus } =
		useDispatch( nfdOnboardingStore );

	const prevSiteGenErrorStatus = useRef();
	const prevFailedApis = useRef();

	async function syncStoreToDB() {
		if ( currentData ) {
			//Set the Flow Data and sync store and DB
			const result = await setFlow( currentData );
			if ( result?.error !== null ) {
				switch ( result?.error.code ) {
					case SKIP_FLOW_ERROR_CODE_DATABASE:
						break;
					case SKIP_FLOW_ERROR_CODE_20:
						break;
					default:
						updateSiteGenErrorStatus( true );
						break;
				}
			}
		}
	}

	async function performSiteGenMetaGeneration(
		siteInfo,
		identifier,
		skipCache,
		retryCount = 1
	) {
		try {
			const data = await generateSiteGenMeta(
				siteInfo,
				identifier,
				skipCache
			);
			if ( data.body !== null ) {
				currentData.sitegen.siteGenMetaStatus.currentStatus += 1;
				if (
					currentData.sitegen.siteGenMetaStatus.currentStatus ===
					currentData.sitegen.siteGenMetaStatus.totalCount
				) {
					currentData.sitegen.skipCache = false;
				}
				setCurrentOnboardingData( currentData );
			}
		} catch ( err ) {
			if ( retryCount < MAX_RETRIES_SITE_GEN ) {
				return performSiteGenMetaGeneration(
					siteInfo,
					identifier,
					skipCache,
					retryCount + 1
				);
			}

			setFailedApi( ( prevState ) => {
				if ( ! prevState.includes( identifier ) ) {
					return [ ...prevState, identifier ];
				}
				return prevState;
			} );
			// console.log( identifier );
			// if ( ! currentData.sitegen.failedApis.includes( identifier ) ) {
			// 	console.log( 'am called' );
			// 	currentData.sitegen.failedApis.push( identifier );
			// }
			// console.log( identifier );
			// console.log( currentData.sitegen.failedApis)
			currentData.sitegen.siteGenErrorStatus = true;
			currentData.sitegen.failedApis = failedApi;
			setCurrentOnboardingData( currentData );
			updateSiteGenErrorStatus( true );
		}
	}

	async function generateSiteGenData() {
		console.log( 'gendata', currentData.sitegen.failedApis );
		// Start the API Requests when the loader is shown.
		if (
			! (
				location.pathname.includes( 'experience' ) ||
				location.pathname.includes( 'building' )
			)
		) {
			return;
		}

		let identifiers;
		if ( Array.isArray( currentData.sitegen.failedApis ) && currentData.sitegen.failedApis.length > 0 ) {
			identifiers = currentData.sitegen.failedApis;
			setFailedApi( [] );
		} else {
			identifiers = await getSiteGenIdentifiers();
			identifiers = identifiers.body;

			const midIndex = Math.floor( identifiers.length / 2 );
			if ( location.pathname.includes( 'experience' ) ) {
				identifiers = identifiers.slice( 0, midIndex );
				currentData.sitegen.siteGenMetaStatus.currentStatus = 0;
			} else if ( location.pathname.includes( 'building' ) ) {
				identifiers = identifiers.slice( midIndex );
				currentData.sitegen.siteGenMetaStatus.currentStatus = midIndex;
			}
		}
		currentData.sitegen.failedApis = [];
		setCurrentOnboardingData( currentData );
		const siteInfo = {
			site_description: currentData.sitegen?.siteDetails?.prompt,
		};

		// const skipCache = currentData.sitegen?.skipCache;
		const skipCache = false;
		// Iterate over Identifiers and fire Requests!
		identifiers.forEach( ( identifier ) => {
			performSiteGenMetaGeneration( siteInfo, identifier, skipCache );
		} );
	}

	const handlePreviousStepTracking = () => {
		const previousStep = window.nfdOnboarding?.previousStep;
		if ( typeof previousStep !== 'object' ) {
			window.nfdOnboarding.previousStep = {
				path: location.pathname,
				url: window.location.href,
			};
			return;
		}

		window.nfdOnboarding.previousStep = {
			path: location.pathname,
			url: window.location.href,
		};
	};

	useEffect( () => {
		console.log( 'refresh1', currentData.sitegen.failedApis );
		if ( initialize ) {
			initializePlugins( pluginInstallHash );
			setInterval( cronTrigger, 45000 );
		}
	}, [ initialize ] );

	useEffect( () => {
		console.log( 'refresh2', currentData.sitegen.failedApis );
		syncStoreToDB();
		generateSiteGenData();
		handlePreviousStepTracking();
	}, [ location.pathname ] );

	useEffect( () => {
		currentData.sitegen.failedApis = failedApi;
		console.log( 'refresh3', currentData.sitegen.failedApis );

		if ( prevSiteGenErrorStatus.current === true && siteGenErrorStatus === false ) {
			generateSiteGenData();
		}
		syncStoreToDB();
		prevSiteGenErrorStatus.current = siteGenErrorStatus;
	}, [ siteGenErrorStatus ] );

	useEffect( () => {
		initializeThemes();
		initializeSettings();
		console.log( 'refresh4', currentData.sitegen.failedApis);
	}, [] );

	return (
		<ThemeProvider>
			<ThemedNewfoldInterfaceSkeleton
				id={ 'nfd-onboarding-skeleton--sitegen' }
				className={ classNames(
					'nfd-onboarding-skeleton--sitegen',
					`brand-${ newfoldBrand }`
				) }
				header={ <Header /> }
				content={ <Content /> }
				sidebar={ <Sidebar /> }
				footer={ <Footer /> }
			/>
		</ThemeProvider>
	);
};

export default SiteGen;
