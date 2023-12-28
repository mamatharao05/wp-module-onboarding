<?php
namespace NewfoldLabs\WP\Module\Onboarding;

/**
 * Primary instantiation of Onboarding Application.
 */
final class AiPageGenerator {

	/**
	 * Constructor.
	 */
	public function __construct() {
		\add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'register_assets' ) );
	}

	/**
	 * Register assets.
	 */
	public static function register_assets() {
		$asset_file = NFD_ONBOARDING_BUILD_DIR . '/ai-page-generator.asset.php';

		if ( is_readable( $asset_file ) ) {
			
			$asset = include_once $asset_file;

			\wp_register_script(
				'nfd-ai-page-generator',
				NFD_ONBOARDING_BUILD_URL . '/ai-page-generator.js',
				array_merge( $asset['dependencies'], array() ),
				$asset['version'],
				true
			);

			\wp_register_style(
				'nfd-ai-page-generator',
				NFD_ONBOARDING_BUILD_URL . '/ai-page-generator.css',
				array(),
				$asset['version']
			);

			\wp_enqueue_script( 'nfd-ai-page-generator' );
			\wp_enqueue_style( 'nfd-ai-page-generator' );
		}
	}
}
