import { SITEGEN_FLOW } from '../../data/flows/constants';
import { resolveGetDataForFlow } from '../../data/flows';
import { useSelect, useDispatch } from '@wordpress/data';
import { validateFlow } from '../../data/flows/utils';
import { useNavigate } from 'react-router-dom';
import { memo } from '@wordpress/element';
import { store as nfdOnboardingStore } from '../../store';
import {
	OnboardingEvent,
	trackOnboardingEvent,
} from '../../utils/analytics/hiive';
import { ACTION_SITEGEN_FORK_OPTION_SELECTED } from '../../utils/analytics/hiive/constants';

const StartOptions = ( { questionnaire, oldFlow, options } ) => {
	const navigate = useNavigate();
	const { brandConfig, hireProUrl, currentData } = useSelect( ( select ) => {
		return {
			brandConfig: select( nfdOnboardingStore ).getNewfoldBrandConfig(),
			hireProUrl:
				select( nfdOnboardingStore ).getfullServiceCreativeTeamUrl(),
			currentData:
				select( nfdOnboardingStore ).getCurrentOnboardingData(),
		};
	} );
	const {
		updateAllSteps,
		updateTopSteps,
		updateRoutes,
		updateDesignRoutes,
		updateInitialize,
		setCurrentOnboardingData,
	} = useDispatch( nfdOnboardingStore );

	const switchFlow = ( newFlow ) => {
		if ( ! validateFlow( brandConfig, newFlow ) ) {
			return false;
		}
		const currentFlow = window.nfdOnboarding.currentFlow;
		const getData = resolveGetDataForFlow( newFlow );
		const data = getData();
		updateAllSteps( data.steps );
		updateTopSteps( data?.topSteps );
		updateRoutes( data.routes );
		updateDesignRoutes( data?.designRoutes );
		if ( SITEGEN_FLOW !== currentFlow ) {
			window.nfdOnboarding.oldFlow = currentFlow;
		}

		window.nfdOnboarding.currentFlow = newFlow;
		currentData.activeFlow = newFlow;
		currentData.continueWithoutAi = true;
		setCurrentOnboardingData( currentData );
		if ( SITEGEN_FLOW !== newFlow ) {
			updateInitialize( true );
		}
		navigate( data.steps[ 1 ].path );
	};
	const selectFlow = ( flow ) => {
		let flowForEvent = false;
		switch ( flow ) {
			case 'sitebuild':
				flowForEvent = 'DIY';
				switchFlow( oldFlow );
				break;
			case 'sitegen':
				flowForEvent = 'AI';
				switchFlow( SITEGEN_FLOW );
				break;
			case 'hirepro':
				flowForEvent = 'PRO';
				window.open( hireProUrl, '_blank' );
				break;
		}

		if ( flowForEvent ) {
			trackOnboardingEvent(
				new OnboardingEvent(
					ACTION_SITEGEN_FORK_OPTION_SELECTED,
					flowForEvent
				)
			);
		}
	};
	return (
		<div className="">
			<p className="nfd-onboarding-sitegen-options__questionnaire">
				{ questionnaire }
			</p>
			<div className="nfd-onboarding-sitegen-options__container">
				{ options.map( ( tab, idx ) => {
					if (
						tab.flow === SITEGEN_FLOW &&
						! validateFlow( brandConfig, tab.flow )
					) {
						// Do not show the Sitegen AI option if not enabled for the customer
						return false;
					}
					return (
						<div
							className="nfd-onboarding-sitegen-options__container__options"
							key={ idx }
							role="button"
							tabIndex={ 0 }
							onClick={ () => {
								selectFlow( tab.flow );
							} }
							onKeyDown={ () => {
								{
									selectFlow( tab.flow );
								}
							} }
						>
							<h3 className="nfd-onboarding-sitegen-options__container__heading__title">
								{ tab.span && (
									<span className="nfd-onboarding-sitegen-options__container__options__span">
										{ tab.span }
									</span>
								) }
								{ tab.title }
							</h3>
							<p className="nfd-onboarding-sitegen-options__container__heading__subtitle">
								{ tab.subtitle }
							</p>
						</div>
					);
				} ) }
			</div>
		</div>
	);
};

export default memo( StartOptions );
