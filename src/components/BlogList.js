import React from 'react'
import BlogPost from './BlogPost'



class BlogList extends React.Component {
  render() {

    const blogNodes = this.props.blog.map( post =>
      (
        <BlogPost post={post} onPostDelete={this.props.onPostDelete}/>
      )
    )

    return (
      <div className="blogList">
        {blogNodes}
      </div>
      );
    }
}

export default BlogList


