module.exports = function (gulp, $, handleErrors) {
	var
		browserify = require( 'browserify' ),
		buffer = require( 'vinyl-buffer' ),
		reactify = require( 'reactify' ),
    babelify = require('babelify'),
		bundler = browserify( './components/main.jsx' ),
		source = require( 'vinyl-source-stream' );
		bundler.transform( reactify );



    return function () {

      var dependencies = [
        'react',
        'react-dom'
      ];
		// bundler.on( 'update', bundle );

      var scriptsCount = 0;

		return bundler
      .transform("babelify", {presets: ["es2015", "react"]})
      .bundle()
			.pipe( source( 'main.js' ) )
			.pipe( gulp.dest( './' ) );

	}

};
