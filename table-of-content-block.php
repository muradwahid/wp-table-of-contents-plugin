<?php
/**
 * Plugin Name: Table of Content Block
 * Description: The Table of Contents block automatically generates a table of contents for your WordPress post or page.
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: table-of-content-block
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'BPPB_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '2.0.0' );
define( 'BPPB_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'BPPB_DIR_PATH', plugin_dir_path( __FILE__ ) );



require_once BPPB_DIR_PATH . 'inc/block.php';