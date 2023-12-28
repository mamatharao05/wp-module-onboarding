/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';

import { subscribe } from '@wordpress/data';

/**
 * Internal dependencies
 */
// import {
// 	HIIVE_ANALYTICS_CATEGORY,
// 	NFD_REST_URL,
// 	NFD_WONDER_BLOCKS_MODAL_ID,
// 	NFD_WONDER_BLOCKS_TOOLBAR_BUTTON_ID,
// } from './constants';

import AiPageGenerator from './components/AiPageGenerator';

/**
 * Add the Wonder Blocks trigger button.
 * A hacky solution until proper FillSlot is implemented for adding header toolbar buttons in Gutenberg.
 */
const registerCallback = () => {
	window.requestAnimationFrame(() => {
		// Do not add the button again if it has been already added.
		if (document.getElementById('nfd-wba-toolbar-button2')) {
			unsubscribe();
			return;
		}

		// Exit early if the toolbar doesn't exist.
		if (
			!document.querySelector('.edit-post-header-toolbar') &&
			!document.querySelector('.edit-site-header_start')
		) {
			return;
		}

		// Create the button container.
		const buttonContainer = document.createElement('div');
		buttonContainer.id = 'nfd-wba-toolbar-button2';
		buttonContainer.classList.add('nfd-wba-shrink-0x');
		// Append the button container to the block editor.
		document
			.querySelector('.edit-post-header-toolbar')
			?.append(buttonContainer);

		// Append the button container to the FSE.
		document
			.querySelector('.edit-site-header_start')
			?.append(buttonContainer);

		// Render the button.
		render(<AiPageGenerator />, buttonContainer);

		unsubscribe();
	});
};

const waitForElement = (selector, callback) => {
    const targetNode = document.querySelector(selector);
  
    if (targetNode) {
      callback();
      return;
    }
  
    const observer = new MutationObserver(() => {
      const updatedNode = document.querySelector(selector);
      if (updatedNode) {
        callback();
        observer.disconnect();
      }
    });
  
    const config = { childList: true, subtree: true };
    observer.observe(document.body, config);
  };
  
  const registerCallback2 = () => {
    waitForElement('.components-panel', () => {
      // Your existing logic here
      window.requestAnimationFrame(() => {
        if (document.getElementById('nfd-wba-toolbar-button2')) {
          unsubscribe2();
          return;
        }
  
        const panelContainer = document.querySelector('.components-panel');
        if (!panelContainer) {
          return;
        }
  
        const buttonContainer = document.createElement('div');
        buttonContainer.id = 'nfd-wba-toolbar-button2';
        buttonContainer.classList.add('components-panel__body');
        // panelContainer.appendChild(buttonContainer);
        panelContainer.insertBefore(buttonContainer, panelContainer.firstChild);

  
        render(<AiPageGenerator />, buttonContainer);
  
        unsubscribe2();
      });
    });
  };

// const unsubscribe = subscribe(registerCallback);
const unsubscribe2 = subscribe(registerCallback2);