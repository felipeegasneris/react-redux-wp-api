/**
 * External dependencies
 */
import  React from'react'
import request from 'superagent'

/**
 * Internal dependencies
 */
import CommentList from './comment-list/comment-list.jsx'
import CommentForm from './comment-form/comment-form.jsx'

/**
 * Handles getting of comments from the server and posting of comments to the server
 */
export default class Comments extends React.Component {


	loadCommentsFromServer() {
    console.log(this.props);
		var repliesLink = '/wp-json/wp/v2/comments/?post='+ this.props.postID;

		var self = this;

		var data;
		request
			.get( repliesLink )
			.end( function( err, res ) {
				data = JSON.parse( res.text );

        console.log(data);



				self.setState({ data: data });

			});
	}

	handleCommentSubmit( comment ) {

		var newComment,
			self = this,
			url = '/wp-json/wp/v2/comments';
		request
			.post( url )
			.type( 'form' )
			.send( comment )
			.end( function( err, res ) {
				if ( res.ok ) {
					newComment = JSON.parse( res.text );
					self.setState( { data: self.state.data.concat( [ newComment ] ) } );
				} else {
					console.error( '/wp-json/picard/comments', err.toString() );
				}
			});

	}
  /*
	getInitialState: function() {
		return {data: []};
	},*/

  constructor(props){

    super(props);

    this.state = {data :[]}
  }

	componentDidMount() {
		this.loadCommentsFromServer();
	}

	render() {
		return (
			<div id="comments" className="comments-area">
				<h2 className="comments-title">Comments</h2>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		)
	}


}
