/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import Comment from './comment/comment.jsx'

/**
 * Renders list of comments
 */
export default class CommentList extends React.Component {

  render() {

    console.log(this.props.data);
    var commentNodes = this.props.data.map( (comment)=> {
      return (
        <Comment key={comment.id} comment={comment} />
      )
    });
    return (
      <ol className="comment-list">
				{commentNodes}
      </ol>
    )
  }
}
