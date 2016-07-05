/**
 * External dependencies
 */
import React from 'react'
import page from 'page'

/**
 * Internal dependencies
 */
import Comments from  '../comments/comments.jsx'
import EntryContent from './entry-content/entry-content.jsx'
import EntryHeader from './hentry-header/entry-header.jsx'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
/**
 * Animation setup
 */
//var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

/**
 * Renders post
 */
export default class Hentry extends React.Component {
	handleAdd(e) {
		e.preventDefault();
		let url = this.props.link;
		url = url.replace(/^.*\/\/[^\/]+/, '');
		page(url)
	}

	render(){


    let  d = new Date( this.props.date ),
    formattedDate = d.toDateString();

		// Decide whether or not to render comments and entry-content
		var comments,
			content;

    console.log(this.props);
    comments = <Comments postID={ this.props.id } />;
    let entryContent = <EntryContent content={ this.props.content.rendered } />;

    var entryHeader;
		// Featured image support
		let postClass;
		if ( this.props.featured_image ) {
			let thumbnailImage = {
				backgroundImage: 'url(' + this.props.featured_image.source + ')'
			};
			entryHeader = <EntryHeader thumbnailImage={thumbnailImage}
        handleAdd = {this.handleAdd  }
        link = {this.props.link}
        title = {this.props.title}
        formattedDate = {formattedDate} />;


			postClass = this.props.post_class + " has-post-thumbnail";
		} else {
      var none = {};
      entryHeader = <EntryHeader thumbnailImage={none}
        handleAdd = {this.handleAdd  }
        link = {this.props.link}
        title = {this.props.title}
        formattedDate = {formattedDate} />;

			postClass = this.props.post_class;
		}

		return (
			<div className="hentry-wrapper">
				<article className={ postClass }>

          { entryHeader }

          { entryContent }

				</article>
				{ comments }
			</div>
		);
	}
}
