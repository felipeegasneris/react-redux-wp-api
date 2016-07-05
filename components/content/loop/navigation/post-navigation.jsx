/**
 * External dependencies
 */
import React from 'react'

/**
 * Renders links to the next and previous posts.
 */
export default class PostNavigation extends React.Component {

	render() {
		var previousPostLink;
		if ( this.props.previous_post_url ) {
			previousPostLink = <div className="nav-previous">
				<a href={this.props.previous_post_url} rel="prev">
					<span className="screen-reader-text">{this.props.previous_post_title}</span>
				</a>
			</div>;
		}

		var nextPostLink;
		if ( this.props.next_post_url ) {
			nextPostLink = <div className="nav-next">
				<a href={this.props.next_post_url} rel="next">
					<span className="screen-reader-text">{this.props.next_post_title}</span>
				</a>
			</div>;
		}

		return (
			<nav className="navigation post-navigation" role="navigation">
				<div className="nav-links">
					{ previousPostLink }
					{ nextPostLink }
				</div>
			</nav>
		)
	}
}

module.exports = PostNavigation;
