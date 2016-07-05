/**
 * External dependencies
 */

import React from 'react'
import page from 'page'

/**
 * Internal dependencies
 *
 *
 */
import Hentry from './hentry/hentry.jsx'
import PostNavigation from './navigation/post-navigation.jsx'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

/**
 * Renders list of posts
 */
export default class Loop extends React.Component {

	render() {
		var context = this.props.context,
			showExtra = false,
			next,
			previous;
		if ( this.props.postID !== 0 && this.props.postID === this.props.data[0].id ) {
			showExtra = true;
		}

		var postNodes = this.props.data.map( ( post ) => {

      console.log(post);
			return (
				<Hentry key={post.id} id={post.id} post_class={post.post_class} link={post.link} title={post.title} date={post.date} content={post.content} featured_image={ post.featured_image } context={ context } showExtra={ showExtra } />
			)
		});

		var navigationNodes = this.props.data.map( ( post ) => {
			if ( context === 'single' ) {
				return (
					<PostNavigation previous_post_url={post.previous_post_url} previous_post_title={post.previous_post_title} next_post_url={post.next_post_url} next_post_title={post.next_post_title} />
				);
			}
		});

		return (
			<div>

					{ postNodes }

				{ navigationNodes }
			</div>
		)
	}
}
