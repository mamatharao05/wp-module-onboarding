<?php
namespace NewfoldLabs\WP\Module\Onboarding\Data;

use NewfoldLabs\WP\Module\Onboarding\Services\PluginInstaller;
use NewfoldLabs\WP\Module\Onboarding\Services\ThemeInstaller;

final class Live_Preview {

     private static function boolean_to_status( $boolean ) {
          return $boolean ? 'activated' : 'init';
     }

     private static function pre_requisites() {
          return array(
               'ecommerce' => array(
                    'themes' => array(
                         'nfd_slug_yith_wonder' => self::boolean_to_status( ThemeInstaller::is_theme_active( 'yith-wonder' ) ),
                    ),
                    'plugins' => array(
                         'woocommerce' => self::boolean_to_status( PluginInstaller::exists( 'woocommerce', true ) ),
                    ),
               ),
          );
     }

     public static function get_pre_requisites() {
          $pre_requisites = self::pre_requisites();
          return isset( $pre_requisites[ Data::current_flow() ] ) ? $pre_requisites[ Data::current_flow() ] : array();
     }
     
     public static function get_settings() {
          $block_editor_context = new \WP_Block_Editor_Context( array( 'name' => 'core/edit-site' ) );
          $custom_settings      = array(
               'siteUrl' => \site_url(),
          );

          return array(
               'settings'           => \get_block_editor_settings( $custom_settings, $block_editor_context ),
               'globalStyles'       => \wp_get_global_styles(),
               'preRequisites' => self::get_pre_requisites()
          );
     }
}