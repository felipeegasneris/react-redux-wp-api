/**
 * Created by felipe on 05-07-16.
 */
import React from 'react'

export default class EntryHeader extends React.Component {

  render() {

    console.log("entry-header");
    console.log(this.props);
    return (

      <div className="entry-thumbnail" style={this.props.thumbnailImage}>
        <header className="entry-header">
          <h1 className="entry-title">
            <a onClick={this.props.handleAdd} href={this.props.link} rel="bookmark">
							{this.props.title.rendered}
            </a>

          </h1>
          <div className="entry-meta">
						{this.props.formattedDate}
          </div>
        </header>
      </div>
    )
  }


}
