/**
 * External dependencies
 */
import React from 'react'

/**
 * Renders content
 */
export default class EntryContent extends React.Component {

	render(){
		return (
			<div className="entry-content" dangerouslySetInnerHTML={{__html: this.props.content}} />
		)
	}

}


