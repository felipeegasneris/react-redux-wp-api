<?php
if ( ! function_exists( 'picard_setup' ) ) :

function picard_setup() {



	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'main' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See http://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside', 'image', 'video', 'quote', 'link', 'chat', 'gallery',
	) );
}
endif; // picard_setup
add_action( 'after_setup_theme', 'picard_setup' );

/**
 * Register Open Sans Google fonts for Picard.
 *
 * @return string
 */
function picard_open_sans_font_url() {
	$open_sans_font_url = '';

	/* translators: If there are characters in your language that are not supported
	 * by Open Sans, translate this to 'off'. Do not translate into your own language.
	 */
	if ( 'off' !== _x( 'on', 'Open Sans font: on or off', 'picard' ) ) {
		$subsets = 'latin,latin-ext';

		/* translators: To add an additional Open Sans character subset specific to your language,
		 * translate this to 'greek', 'cyrillic' or 'vietnamese'. Do not translate into your own language.
		 */
		$subset = _x( 'no-subset', 'Open Sans font: add new subset (greek, cyrillic, vietnamese)', 'picard' );

		if ( 'cyrillic' == $subset ) {
			$subsets .= ',cyrillic,cyrillic-ext';
		} elseif ( 'greek' == $subset ) {
			$subsets .= ',greek,greek-ext';
		} elseif ( 'vietnamese' == $subset ) {
			$subsets .= ',vietnamese';
		}

		$query_args = array(
			'family' => urlencode( 'Open Sans:300italic,400italic,600italic,700italic,300,400,600,700' ),
			'subset' => urlencode( $subsets ),
		);

		$open_sans_font_url = add_query_arg( $query_args, '//fonts.googleapis.com/css' );
	}

	return $open_sans_font_url;
}

/**
 * Register Montserrat Google fonts for Picard.
 *
 * @return string
 */
function picard_montserrat_font_url() {
	$montserrat_font_url = '';

	/* translators: If there are characters in your language that are not supported
	   by Montserrat, translate this to 'off'. Do not translate into your own language. */
	if ( 'off' !== _x( 'on', 'Montserrat font: on or off', 'picard' ) ) {

		$montserrat_font_url = add_query_arg( 'family', urlencode( 'Montserrat:400,700' ), "//fonts.googleapis.com/css" );
	}

	return $montserrat_font_url;
}

function picard_scripts() {
	wp_enqueue_style( 'picard-style', get_stylesheet_uri(), '20150405' );

	wp_register_script( 'picard-script', get_template_directory_uri() . '/main.js', array(), '20150506', true );

	wp_enqueue_script( 'picard-script' );

	wp_enqueue_style( 'genericons', get_template_directory_uri() . '/genericons/genericons.css', array(), '3.4' );
}
add_action( 'wp_enqueue_scripts', 'picard_scripts' );

function picard_get_json( $_post ) {
	foreach ( $_post as $post ) {
		$_post['post_class'] = implode( ' ', get_post_class( '', $_post['ID'] ) );

		// Get next and previous links
		global $post;
		$post = get_post( $_post['ID'] );

		$previous_post = get_adjacent_post( false, '', true );
		if ( $previous_post ) {
			$_post['previous_post_url']   = get_permalink( $previous_post );
			$_post['previous_post_title'] = get_the_title( $previous_post );
		}

		$next_post = get_adjacent_post( false, '', false );
		if ( $next_post ) {
			$_post['next_post_url']   = get_permalink( $next_post );
			$_post['next_post_title'] = get_the_title( $next_post );
		}

	}
	return $_post;
}

add_filter( 'json_prepare_post', 'picard_get_json' );




