/**
 * External dependencies
 */
import React from 'react'
import page from 'page'
import request from 'superagent'

/**
 * Internal dependencies
 */
import Content from  '../content/content.jsx'

export default  class Router extends React.Component {

	componentDidMount() {

		var self = this;

		page( '/', ( ctx ) => {
			var data,
				slug = ctx.params.slug,
				url = "/wp-json/wp/v2/posts";
			request
				.get( url )
				.end( function( err, res ) {
					data = JSON.parse( res.text );
					self.setState({ component: <Content data={ data } bodyClass="index" /> });
				});
		});

		page( '/:year/:month/:day/:slug', ( ctx ) => {
			var data,
				slug = ctx.params.slug,
				url = "/wp-json/wp/v2/posts/?filter[name]=" + slug;
			request
				.get( url )
				.end( function( err, res ) {
					data = JSON.parse( res.text );
					self.setState({ component: <Content data={ data } bodyClass="single" /> });
				});
		});

		page( '*', ( ctx ) => {
			if ( ctx.state.pageData ) {
				self.setState({ component: <Content data={ ctx.state.pageData } bodyClass="page" /> });
			} else {
				var admin = 'wp-admin';
				var slug = ctx.pathname;

				if ( slug.indexOf( admin ) > -1 ) {
					document.location.href = ctx.path;
					return;
				}

				if(slug.substr(-1) == '/') {
					slug = slug.substr(0, slug.length - 1);
				}
				var part = slug.substring(slug.lastIndexOf('/') + 1);
				var url = "/wp-json/wp/v2/pages?&filter[name]=" + part;
        console.log('rlll');

        console.log(url);
				request
					.get( url )
					.end( function( err, res ) {

            console.log(res);
						data = JSON.parse( res.text );
						ctx.state.pageData = data;
						ctx.save();
						self.setState({ component: <Content data={ data } bodyClass="page" /> });
					});
			}
		});

		page.start();

	}

	constructor() {
    super();
		this.state =  { component: <div /> };
	}

	render() {
		return this.state.component;

	}

}
