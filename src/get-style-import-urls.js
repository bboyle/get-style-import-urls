function getStyleImportUrls() {
	'use strict';

	function cleanCss( css ) {
		// normalise whitespace
		css = css.replace( /\s/g, ' ' );
		// at-rules must come first
		// throw away everything after the first {
		css = css.replace( /\{.*$/, '' );
		// strip comments
		css = css.replace( /\/\*.*?\*\//g, '' );

		return css;
	}

	function extractUrl( text ) {
		text = text.replace( /^.*url\(/, '' );
		text = text.replace( /\).*?$/, '' );
		// strip quotes
		text = text.replace( /^.*?(['"])(.*?)\1.*$/, '$2' );
		return text;
	}


	var a = document.createElement( 'a' );
	var url = [];

	var style = document.getElementsByTagName( 'style' );
	var i, iLen, j, jLen;

	for ( i = 0, iLen = style.length; i < iLen; i++ ) {
		var css = cleanCss( style[ i ].innerHTML );

		// split into rules
		css = css.split( /;\s*/ );

		for ( j = 0, jLen = css.length; j < jLen; j++ ) {
			if ( /@import/.test( css[ j ] )) {
				a.href = extractUrl( css[ j ]);
				url.push( a.href );
			}
		}
	}

	return url;
}
