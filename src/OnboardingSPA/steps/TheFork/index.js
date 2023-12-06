import CommonLayout from '../../components/Layouts/Common';

import { useEffect } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';

import { store as nfdOnboardingStore } from '../../store';
import { FOOTER_SITEGEN, HEADER_SITEGEN } from '../../../constants';

import { DEFAULT_FLOW } from '../../data/flows/constants';
import HeadingWithSubHeading from '../../components/HeadingWithSubHeading/SiteGen/index';
import StartOptions from '../../components/StartOptions';
import getContents from './contents';

const TheFork = () => {
	const {
		setIsHeaderEnabled,
		setSidebarActiveView,
		setHeaderActiveView,
		setDrawerActiveView,
		setIsHeaderNavigationEnabled,
		setFooterActiveView,
	} = useDispatch( nfdOnboardingStore );

	useEffect( () => {
		setIsHeaderEnabled( false );
		setSidebarActiveView( false );
		setIsHeaderNavigationEnabled( false );
		setHeaderActiveView( HEADER_SITEGEN );
		setDrawerActiveView( false );
		setFooterActiveView( FOOTER_SITEGEN );
	} );

	const oldFlow = window.nfdOnboarding?.oldFlow
		? window.nfdOnboarding.oldFlow
		: DEFAULT_FLOW;

	const content = getContents();
	return (
		<CommonLayout
			isCentered
			className="nfd-onboarding-step--site-gen__fork"
		>
			<HeadingWithSubHeading
				title={ content.heading }
				subtitle={ content.subheading }
			/>
			<StartOptions
				questionnaire={ content.questionnaire }
				oldFlow={ oldFlow }
				options={ content.options }
			/>
			<br />
			<br />
			<a
				className="nfd-onboarding-step--site-gen__fork__importsite"
				href={ content.importlink }
			>
				{ content.importtext }
			</a>
		</CommonLayout>
	);
};

export default TheFork;
