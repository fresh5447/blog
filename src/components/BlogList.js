import React from 'react'
import BlogPost from './BlogPost'



class BlogList extends React.Component {
  render() {

    const blogNodes = this.props.blog.map( blog =>
      (
        <BlogPost title={blog.title}>
          {blog.body}
        </BlogPost>
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


