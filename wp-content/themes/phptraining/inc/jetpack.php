<?php
/**
 * Jetpack Compatibility File
 * See: http://jetpack.me/
 *
 * @package phptraining
 */

/**
 * Add theme support for Infinite Scroll.
 * See: http://jetpack.me/support/infinite-scroll/
 */
function phptraining_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'footer'    => 'page',
	) );
}
add_action( 'after_setup_theme', 'phptraining_jetpack_setup' );
