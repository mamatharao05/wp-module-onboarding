import { __, sprintf } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { useState, useEffect, useRef } from '@wordpress/element';
import content from './content.json';
import TextInput from '../../../components/TextInput';
import SkipButton from '../../../components/SkipButton';
import MiniPreview from '../../../components/MiniPreview';
import StepStateHandler from '../../../components/StateHandlers/StepStateHandler';
import { getSettings } from '../../../utils/api/settings';
import { store as nfdOnboardingStore } from '../../../store';
import ImageUploader from '../../../components/ImageUploader';
import SocialMediaForm from '../../../components/SocialMediaForm';
import { translations } from '../../../utils/locales/translations';

/**
 * Basic Info Form.
 *
 * @return
 */
const BasicInfoForm = () => {
	const socialMediaRef = useRef(null);
	const [ isError, setIsError ] = useState( false );
	const [ flowData, setFlowData ] = useState();
	const [ isLoaded, setisLoaded ] = useState( false );
	const [ debouncedFlowData, setDebouncedFlowData ] = useState();

	const [ siteTitle, setSiteTitle ] = useState( '' );
	const [ siteDesc, setSiteDesc ] = useState( '' );
	const [ siteLogo, setSiteLogo ] = useState( 0 );
	const [ socialData, setSocialData ] = useState( '' );
	const [ isValidSocials, setIsValidSocials ] = useState( false );
	const [ isSocialFormOpen, setIsSocialFormOpen ] = useState( false );

	const { setCurrentOnboardingData } = useDispatch( nfdOnboardingStore );
	const { editEntityRecord } = useDispatch( coreStore );

	const { getEditedEntityRecord } = useSelect( ( select ) => {
		return select( coreStore );
	}, [] );

	const { currentData } = useSelect( ( select ) => {
		return {
			currentData: select(
				nfdOnboardingStore
			).getCurrentOnboardingData(),
		};
	}, [] );

	function setDefaultData() {
		if ( isLoaded ) {
			setSiteLogo( flowData?.data.siteLogo );
			setSiteTitle( flowData?.data.blogName );
			setSiteDesc( flowData?.data.blogDescription );
		}
	}

	function createSaveData() {
		const dataToSave = {
			data: {
				siteLogo,
				blogName: siteTitle,
				blogDescription: siteDesc,
				socialData,
			},
		};
		return dataToSave;
	}

	useEffect(() => {
		if(isSocialFormOpen) 
			socialMediaRef.current.scrollIntoView();
	}, [isSocialFormOpen]);

	useEffect( () => {
		async function getFlowData() {
			const socialDataAPI = await getSettings();
			setSocialData( socialDataAPI.body );
			setFlowData( currentData );
			setDebouncedFlowData( flowData );
			setisLoaded( true );
		}
		if ( ! isLoaded ) getFlowData();
		getEditedEntityRecord( 'root', 'site' );

		setDefaultData();
	}, [ isLoaded ] );

	useEffect( () => {
		const timerId = setTimeout( () => {
			if ( isLoaded ) setDebouncedFlowData( createSaveData() );
		}, 600 );

		return () => {
			clearTimeout( timerId );
		};
	}, [ siteTitle, siteDesc, siteLogo, socialData, isValidSocials ] );

	const updateCoreStore = ( siteLogo, siteTitle, siteDesc ) => {
		editEntityRecord( 'root', 'site', undefined, {
			site_logo: siteLogo?.id ? siteLogo.id : null,
			description: siteDesc,
			title: siteTitle,
		} );
	};

	useEffect( () => {
		const saveData = async () => {
			const currentDataCopy = currentData;
			currentDataCopy.data.siteLogo =
				debouncedFlowData.data.siteLogo ??
				currentDataCopy.data.siteLogo;
			currentDataCopy.data.blogName =
				debouncedFlowData.data.blogName ??
				currentDataCopy.data.blogName;
			currentDataCopy.data.blogDescription =
				debouncedFlowData.data.blogDescription ??
				currentDataCopy.data.blogDescription;
			currentDataCopy.data.socialData =
				debouncedFlowData.data.socialData ??
				currentDataCopy.data.socialData;
			updateCoreStore(
				currentDataCopy.data.siteLogo,
				currentDataCopy.data.blogName,
				currentDataCopy.data.blogDescription
			);
			setCurrentOnboardingData( currentDataCopy );
		};
		if ( debouncedFlowData ) saveData();
	}, [ debouncedFlowData ] );

	return (
		<StepStateHandler
			watch={
				typeof flowData === 'object' && typeof socialData === 'object'
			}
		>
			<div className={ 'basic-info' }>
				<div
					className={ `${ isError ? 'error__show' : 'error__hide' }` }
				>
					{ __( content.error.title, 'wp-module-onboarding' ) }
				</div>
				<div className="basic-info-form">
					<div className="basic-info-form__left">
						<TextInput
							title={ sprintf(
								__(
									content.siteTitle.title,
									'wp-module-onboarding'
								),
								translations( 'Site' )
							) }
							hint={ __(
								content.siteTitle.hint,
								'wp-module-onboarding'
							) }
							placeholder={ sprintf(
								__(
									content.siteTitle.placeholder,
									'wp-module-onboarding'
								),
								translations( 'Site' )
							) }
							maxCharacters={ __(
								content.siteTitle.maxCharacters,
								'wp-module-onboarding'
							) }
							height="47px"
							textValue={ siteTitle }
							textValueSetter={ setSiteTitle }
						/>

						<TextInput
							title={ sprintf(
								__(
									content.siteDesc.title,
									'wp-module-onboarding'
								),
								translations( 'Site' )
							) }
							hint={ sprintf(
								__(
									content.siteDesc.hint,
									'wp-module-onboarding'
								),
								translations( 'site' )
							) }
							placeholder={ sprintf(
								__(
									content.siteDesc.placeholder,
									'wp-module-onboarding'
								),
								translations( 'Site' )
							) }
							maxCharacters={ __(
								content.siteTitle.maxCharacters,
								'wp-module-onboarding'
							) }
						height="100px"
						textValue={ siteDesc }
						textValueSetter={ setSiteDesc }
					/>
					<div ref={socialMediaRef}>
						<SocialMediaForm
							socialData={ socialData }
							setSocialData={ setSocialData }
							isSocialFormOpen={ isSocialFormOpen }
							setIsValidSocials={ setIsValidSocials }
							setIsSocialFormOpen={ setIsSocialFormOpen }
						/>
					</div>
				</div>
				<div className="basic-info-form__right">
					<ImageUploader
						icon={ siteLogo }
						iconSetter={ setSiteLogo }
					/>
					<MiniPreview
						icon={ siteLogo }
						title={ siteTitle }
						desc={ siteDesc }
						socialData={ socialData }
						isSocialFormOpen={ isSocialFormOpen } 
						setIsSocialFormOpen={ setIsSocialFormOpen }
					/>
				</div>
			</div>
		</div>
		</StepStateHandler>
	);
};

export default BasicInfoForm;
