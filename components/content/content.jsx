/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */

import Loop from './loop/loop.jsx'
import entry_thumbnail from './entry-thumbnail.js'

/**
 * Handles getting of posts from the server
 */
export default class Content extends  React.Component {

  constructor(props) {
    super(props)

  }
	componentDidMount() {

    console.log('didmount!!!');
		// Update body class
		document.body.className = this.props.bodyClass;

		// Call the single entry function render hack
		entry_thumbnail();
	}

	componentDidUpdate(prevProps, prevState) {

		// Update body class
		document.body.className = this.props.bodyClass;

		// Call the single entry function render hack
		entry_thumbnail();

		// Scroll to top of page so user can see page transition
		window.scroll(0,0);
	}

	render() {

    console.log('upsss!');
    console.log('render!!!');
    var singlePostID = 0;



    console.log(this.props.data);
		// Check if we're just viewing one post, if so, pass the ID down
		if ( this.props.data.length === 1 ) {
			singlePostID = this.props.data[0].id;
		} else {
			singlePostID = 0;
		}

    console.log(singlePostID);
		return (
			<Loop data={this.props.data} context={ this.props.bodyClass } postID={ singlePostID } />
		)


	}
}


