<?php

namespace NewfoldLabs\WP\Module\Onboarding\RestApi;

use NewfoldLabs\WP\Module\Onboarding\Permissions;
use NewfoldLabs\WP\Module\AI\SiteGen\SiteGen;
use NewfoldLabs\WP\Module\Onboarding\Data\Services\SiteGenService;
use NewfoldLabs\WP\Module\Onboarding\Data\Options;

/**
 * Class SiteGenController
 */
class SiteGenController {

	/**
	 * The namespace of this controller's route.
	 *
	 * @var string
	 */
	protected $namespace = 'newfold-onboarding/v1';

	/**
	 * The endpoint base
	 *
	 * @var string
	 */
	protected $rest_base = '/sitegen';

	/**
	 * Registers rest routes for SiteGenController class.
	 *
	 * @return void
	 */
	public function register_routes() {
		\register_rest_route(
			$this->namespace,
			$this->rest_base . '/identifiers',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_enabled_identifiers' ),
				'permission_callback' => array( Permissions::class, 'rest_is_authorized_admin' ),
			)
		);
		\register_rest_route(
			$this->namespace,
			$this->rest_base . '/generate',
			array(
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'generate_sitegen_meta' ),
				'permission_callback' => array( Permissions::class, 'rest_is_authorized_admin' ),
				'args'                => $this->sitegen_meta_args(),
			)
		);
		\register_rest_route(
			$this->namespace,
			$this->rest_base . '/get-homepages',
			array(
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'get_homepages' ),
				'permission_callback' => array( Permissions::class, 'rest_is_authorized_admin' ),
				'args' => $this->get_homepages_args(),
			)
		);
		\register_rest_route(
			$this->namespace,
			$this->rest_base . '/get-homepages-regenerate',
			array(
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'get_regenerated_homepages' ),
				'permission_callback' => array( Permissions::class, 'rest_is_authorized_admin' ),
				'args' => $this->get_homepages_regenerate_args(),
			)
		);
		\register_rest_route(
			$this->namespace,
			$this->rest_base . '/favourites',
			array(
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'toggle_favorite_homepage' ),
				'permission_callback' => '__return_true',
			)
		);
	}

	/**
	 * Required Args for Generating Site Gen Meta.
	 *
	 * @return array
	 */
	public function sitegen_meta_args() {
		return array(
			'site_info'  => array(
				'required' => true,
				'type'     => 'object',
			),
			'identifier' => array(
				'required' => true,
				'type'     => 'string',
			),
			'skip_cache' => array(
				'required' => false,
				'type'     => 'boolean',
			),
		);
	}

	/**
     * Gets the arguments for the 'get-homepages' endpoint.
     *
     * @return array The array of arguments.
     */
    public function get_homepages_args() {
        return array(
            'site_description' => array(
                'required' => true,
                'validate_callback' => function($param, $request, $key) {
                    return is_string($param);
                },
                'sanitize_callback' => 'sanitize_text_field'
            ),
            'regenerate' => array(
                'required' => false,
            ),
            // Add other parameters here as needed.
        );
    }

	/**
     * Gets the arguments for the 'get-homepages' endpoint.
     *
     * @return array The array of arguments.
     */
    public function get_homepages_regenerate_args() {
        return array(
            'site_description' => array(
                'required' => true,
                'validate_callback' => function($param, $request, $key) {
                    return is_string($param);
                },
                'sanitize_callback' => 'sanitize_text_field'
            ),
            'regenerate' => array(
                'required' => false,
            ),
			'slug' => array(
                'required' => false,
            ),
			'colorPalettes' => array(
                'required' => false,
            ),
        );
    }

	/**
	 * Gets all the valid Identifiers
	 *
	 * @return array
	 */
	public function get_enabled_identifiers() {
		return array_keys( array_filter( SiteGenService::enabled_identifiers() ) );
	}

	/**
	 * Generate Sitegen meta data.
	 *
	 * @param \WP_REST_Request $request Request model.
	 *
	 * @return array|WP_Error
	 */
	public function generate_sitegen_meta( \WP_REST_Request $request ) {
		if ( ! SiteGenService::is_enabled() ) {
			return new \WP_Error(
				'nfd_onboarding_error',
				'SiteGen is Disabled.',
				array( 'status' => 404 )
			);
		}

		$site_info  = $request->get_param( 'site_info' );
		$identifier = $request->get_param( 'identifier' );
		$skip_cache = $request->get_param( 'skip_cache' );

		// TODO Implement the main function and do computations if required.
		return SiteGenService::instantiate_site_meta( $site_info, $identifier, $skip_cache );

	}

	/**
	 * Gets the preview homepages
	 *
	 * @return array
	 */
	public function get_homepages( \WP_REST_Request $request ) {

		// Fetching parameters provided by the front end.
		$site_description = $request->get_param( 'site_description' );
		$regenerate = $request->get_param( 'regenerate' );
		$site_info = array( 'site_info' => array( 'site_description' => $site_description ) );

		// If the option exists and is not empty, return it
		$existing_homepages = get_option(Options::get_option_name( 'sitegen_homepages' ), []);		
        if ( ! empty( $existing_homepages )  && !$regenerate ) {
            return new \WP_REST_Response( $existing_homepages, 200 );
        }

		$target_audience = SiteGenService::instantiate_site_meta($site_info, 'targetaudience', $skip_cache);
		$content_style = SiteGenService::instantiate_site_meta($site_info, 'contenttones', $skip_cache);

		 // Ensure that the required data is available.
		if (!$target_audience || !$content_style) {
			return new \WP_Error(
				'nfd_onboarding_error',
				__( 'Required data is missing.', 'wp-module-onboarding' ),
				array(
					'status' => 400,
				)
			);
		}

		// Call the SiteGenService method to generate and process homepages
		$processed_home_pages = SiteGenService::generate_homepages(
			$site_description,
			$content_style,
			$target_audience,
			$regenerate
		);

		// Check for errors in the response
		if ( is_wp_error( $processed_home_pages ) ) {
			return $processed_home_pages;
		}

		// Return the processed homepages
		return new \WP_REST_Response($processed_home_pages, 200);
	}

    public function get_regenerated_homepages(\WP_REST_Request $request) {
        $site_description = $request->get_param('site_description');
        $regenerateSlug = $request->get_param('slug');
        $regenerateColorPalattes = $request->get_param('colorPalettes');
		/* TODO: call the favourites as a function from sitegenservice */
        $favorites = get_option( Options::get_option_name( 'sitegen_favorites' ), []);
        $isFavorite = in_array($regenerateSlug, $favorites);

		$target_audience = SiteGenService::instantiate_site_meta($site_info, 'targetaudience', $skip_cache);
		$content_style = SiteGenService::instantiate_site_meta($site_info, 'contenttones', $skip_cache);

        if (!$target_audience || !$content_style) {
            return new \WP_Error(
				'nfd_onboarding_error',
				__( 'Required data is missing.', 'wp-module-onboarding' ),
				array(
					'status' => 400,
				)
			);
        }

        if ($isFavorite) {
            $result = SiteGenService::handle_favorite_regeneration($regenerateSlug, $regenerateColorPalattes);
        } else {
            $result = SiteGenService::handle_regular_regeneration($site_description, $content_style, $target_audience);
        }

        if ($result === null) {
			return new \WP_Error(
				'nfd_onboarding_error',
				__( 'Error processing request.', 'wp-module-onboarding' ),
				array(
					'status' => 500,
				)
			);
        }

        return new \WP_REST_Response($result, 200);
    }
	
    public function toggle_favorite_homepage(\WP_REST_Request $request) {
        $slug = $request->get_param('slug');

        $response = SiteGenService::toggle_favorite_homepage($slug);

        return new \WP_REST_Response($response, 200);
    }
}