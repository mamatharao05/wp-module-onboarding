// <reference types="Cypress" />
import {
	DrawerActivityForMenu,
	DrawerClose
} from '../wp-module-support/drawer.cy';
import { CheckHeadingSubheading } from '../wp-module-support/header.cy';
import {
	CheckHelpPanelLinks,
	CheckIllustrationPanel,
	CheckInfoPanel,
	CheckIntroPanel,
} from '../wp-module-support/sidebar.cy';
import { SocialMediaTextValidations } from '../wp-module-support/socialMedia.cy';

describe( 'Basic Info Page', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding#/wp-setup/step/basic-info'
		);
	} );

	it.skip( 'Check Drawer Activity', () => {
		DrawerActivityForMenu(
			'Exit to WordPress',
			':nth-child(3)',
			'Basic Info'
		);
	} );

	it.skip( 'Check if Header and Subheader shows up', () => {
		cy.wait(3000);
		DrawerClose();
		CheckHeadingSubheading();
	} );

	it.skip( 'Check to make sure sidebar opens, content is in place and close sidebar', () => {
		CheckIntroPanel( '__basic-info', 'Basic Info' );
		CheckIllustrationPanel();
		CheckInfoPanel();
		CheckHelpPanelLinks();
	} );

	it.skip( 'Check if Header has text `website` in it', () => {
		cy.get( '.nfd-main-heading__title' )
			.should('be.visible')
			.contains('website');
	} );

	it.skip( 'Enter a Title and then Check if it reflects elsewhere', () => {
		const title = 'Hello WordPress';
		const titleBox = cy.get( ':nth-child(1) > label > .nfd-input__field' );
		if ( titleBox.should( 'exist' ) ) {
			titleBox.scrollIntoView();
			titleBox.clear();
			cy.wait( 1000 );
			titleBox.type( title );

			// Check if Mini Preview Tab has the Title
			cy.get( '.browser-row-title_bar_main-text' ).contains( title );
			// Check if Mini Preview Webpage Search result has the Title
			cy.get( '.browser-content_top-row-name' ).contains( title );
		}
	} );

	it.skip( 'Enter a Desc and then Check if it reflects elsewhere', () => {
		const desc = 'Welcome to WordPress';
		const descBox = cy.get( ':nth-child(2) > label > .nfd-input__field' );
		if ( descBox.should( 'exist' ) ) {
			descBox.scrollIntoView();
			descBox.clear();
			cy.wait( 1000 );
			descBox.type( desc );

			// Check if Mini Preview Webpage Search result has the Desc
			cy.get( '.browser-content_desc' ).contains( desc );
		}
	} );

	it.skip( 'Check if Social Media Accordion Toggles', () => {
		cy.get(
			':nth-child(7) > .social-form__label > .social-form__label_name'
		)
			.should( 'exist' )
			.should( 'not.be.visible' );

		// Open Social Media Accordion
		cy.get( '.social-form__top-row_icon' ).click();
		cy.get(
			':nth-child(7) > .social-form__label > .social-form__label_name'
		)
			.should( 'exist' )
			.scrollIntoView()
			.should('have.css', 'opacity', '1');
	} );

	it.skip( 'Check for the short URL tooltip & Modal exists when we use URL shortner' , () => {
		const shortURL = 'https://bit.ly';
		const Tooltiptext1 = 'Short URLs are a great way to track clicks';
		const ModalText1 = `It looks like you're using a URL shortener!`;
		SocialMediaTextValidations(shortURL, Tooltiptext1, ModalText1 );
	});

	it.skip( 'Check if the URL automatically updates http to https' , () => {
		const sampleURL = 'http://www.facebook.com';
		const socialTest = '#facebook';
		cy.get( '.social-form__top-row_icon' ).click();
		if ( cy.get(socialTest).should( 'exist' ) ) {
			cy.get(socialTest).clear();
			cy.get(socialTest).type(sampleURL);
			cy.get('#twitter').focus();
			cy.get(socialTest).invoke('val').should('contain', 'https://');
		}
	} );

	it.skip( 'Check for twitter or instagram id starting with `@` to convert it to URL' , () => {
		const sampleID = '@infinity';
		const socialTest3 = '#instagram';
		if ( cy.get(socialTest3).should( 'exist' ) ) {
			cy.get(socialTest3).clear();
			cy.get(socialTest3).type(sampleID);
			cy.get('#facebook').focus();
			cy.get(socialTest3).invoke('val').should('contain', 'https://');

		}
	});

	it.skip( 'Check if Social Media URL checks are done', () => {
		const invalidURL = 'htt';
		const validURL = 'https://www.facebook.com';
		const Tooltiptext2 = 'we need the full URLs to your social profiles.';
		const ModalText2 = `One of those URLs doesn't look like a social media URL.`;

		// Facebook Social Media Component
		const socialTest2 = cy.get( '#twitter' );
		const socialTest = cy.get( '#facebook' );

		if ( socialTest.should( 'exist' ) ) {
			socialTest.clear();
			cy.get(
				'.browser-content_social_icon[style="background-image: var(--facebook-icon);"]'
			).should( 'have.css', 'opacity', '0.5' );

			socialTest2.focus();
			socialTest.type( invalidURL );
			socialTest2.focus();

			// The URL Checker runs on a debounce
			// Shows the message to the User in case of Invalid URL
			cy.get( '.Tooltip-Wrapper', { timeout: 3000 } ).should( 'exist' );
			cy.get( '.Tooltip-Tip' , { timeout: 3000 })
            	.should('be.visible')
            	.should('contain', Tooltiptext2);
			cy.get('.navigation-buttons_next').click();
			cy.get( '.components-modal__content' ).should('be.visible');
			cy.get( '.components-modal__header-heading' ).should('have.text', ModalText2);
			cy.get('.components-modal__content').type('{esc}');
			cy.get(
				'.browser-content_social_icon[style="background-image: var(--facebook-icon);"]'
			).should( 'have.css', 'opacity', '0.75' );

			socialTest.focus();
			socialTest.clear();
			socialTest.type( validURL );
			socialTest2.focus();
			cy.get( '.Tooltip-Wrapper', { timeout: 3000 } ).should(
				'not.exist'
			);
			cy.get(
				'.browser-content_social_icon[style="background-image: var(--facebook-icon);"]'
			).should( 'have.css', 'opacity', '1' );

			// Close Social Media Accordion
			cy.get( '.social-form__top-row_icon' ).scrollIntoView().click();
		}
	} );

	it.skip( 'Check if Image gets Uploaded', () => {
		const sampleLogo = `vendor/newfold-labs/wp-module-onboarding/tests/cypress/fixtures/image.png`;

		if (
			cy
				.get( '.image-uploader_window-reset-btn' )
				.should( 'exist' )
				.contains( 'UPLOAD' )
		) {
			cy.get( '.image-uploader_window-logo-icon-selected' ).should(
				'not.exist'
			);

			// Upload the Image into the Upload Section
			cy.get( '.image-uploader_window-select-btn', { timeout: 10000 } )
				.scrollIntoView()
				.should( 'exist' )
				.selectFile( sampleLogo, { force: true } )
				.then( () => {
					cy.wait( 1000 );
					// Check if the image got uploaded
					cy.get(
						'.image-uploader_window-logo-icon-selected'
					).should( 'exist' );
					cy.get( '.image-uploader_window-reset-btn' )
						.should( 'exist' )
						.scrollIntoView()
						.contains( 'RESET' );
				} );
		}
	} );
} );
