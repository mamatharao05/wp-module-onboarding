/* eslint-disable jsx-a11y/no-static-element-interactions */
import { search, Icon, reusableBlock } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import { useNavigate } from 'react-router-dom';
import { useSelect, useDispatch } from '@wordpress/data';
import { BlockPreviewSiteGen } from '..';
import Button from '../../../components/Button';
import { store as nfdOnboardingStore } from '../../../store';
import { ReactComponent as FavouriteIconStroked } from '../../../static/icons/sitegen/heart-stroked.svg';
import { ReactComponent as FavouriteIconFilled } from '../../../static/icons/sitegen/heart-filled.svg';
import { __ } from '@wordpress/i18n';

const SiteGenPreviewSelectableCard = ( {
	className = 'live-preview-sitegen--selectable-card',
	blockGrammer,
	viewportWidth = 1500,
	styling = 'large',
	previewSettings,
	overlay = false,
	onClick = false,
	onRegenerateClick = false,
	skeletonLoadingTime = 2500,
	designObject,
	handleFavorite,
	handlePreview,
	isRegenerating,
} ) => {
	const { setActiveHomepage } = useDispatch( nfdOnboardingStore );
	const [ loadingParent, setIsLoadingParent ] = useState( true );

	const navigate = useNavigate();
	const { nextStep } = useSelect( ( select ) => {
		return {
			nextStep: select( nfdOnboardingStore ).getNextStep(),
		};
	} );

	const onPreviewVersionClick = () => {
		setActiveHomepage( designObject );
		navigate( nextStep.path );
	};
	const handleRegenerate = () => {
		onRegenerateClick(
			designObject?.slug,
			designObject?.color,
			designObject?.isFavourited
		);
	};

	return (
		<div
			className={ `${ className }` }
			role="button"
			tabIndex={ 0 }
			onClick={ () => {
				if ( ! loadingParent && typeof onClick === 'function' ) {
					onClick();
				}
			} }
			onKeyDown={ () => {
				if ( ! loadingParent && typeof onClick === 'function' ) {
					onClick();
				}
			} }
		>
			<div className={ `${ className }__live-preview-container` }>
				<BlockPreviewSiteGen
					styling={ styling }
					blockGrammer={ blockGrammer }
					viewportWidth={ viewportWidth }
					previewSettings={ previewSettings }
					setIsLoadingParent={ setIsLoadingParent }
					skeletonLoadingTime={ skeletonLoadingTime }
					isRegenerating={ isRegenerating }
				/>
				{ overlay && ! loadingParent && (
					<div
						className={ `${ className }__live-preview-container__overlay` }
						onClick={ onPreviewVersionClick }
						onKeyDown={ ( event ) => {
							if ( event.key === 'Enter' ) {
								handlePreview();
							}
						} }
					>
						<Button
							className={ `${ className }__live-preview-container__overlay__button` }
							onClick={ () => handlePreview() }
						>
							<Icon icon={ search } />
							{ __( 'Preview Version', 'wp-module-onboarding' ) }
						</Button>
					</div>
				) }
				<div
					className={ `${ className }__live-preview-container-buttons ${
						isRegenerating ? 'disabled' : ''
					}` }
				>
					<div
						role="button"
						tabIndex="0"
						onClick={ () => handleFavorite( designObject?.slug ) }
						onKeyDown={ ( event ) => {
							if ( event.key === 'Enter' ) {
								handleFavorite( designObject?.slug );
							}
						} }
						aria-label="Add to Wishlist"
						className={ `${ className }__live-preview-container-buttons__button` }
					>
						<span>
							{ designObject?.isFavourited ? (
								<FavouriteIconFilled />
							) : (
								<FavouriteIconStroked />
							) }
						</span>
						<span>{ designObject?.title }</span>
					</div>
					<div
						role="button"
						tabIndex="0"
						onClick={ () => handleRegenerate() }
						onKeyDown={ ( event ) => {
							if ( event.key === 'Enter' ) {
								handleRegenerate();
							}
						} }
						aria-label={ __(
							'Regenerate Content',
							'wp-module-onboarding'
						) }
						className={ `${ className }__live-preview-container-buttons__button` }
					>
						<Icon icon={ reusableBlock } />
						{ __( 'Regenerate', 'wp-module-onboarding' ) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default SiteGenPreviewSelectableCard;
