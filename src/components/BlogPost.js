import React from 'react'

class BlogPost extends React.Component{


  render(){
    const {post, onPostDelete} = this.props

    const handleDelete = () => {
      console.log('On post delete id',post.id)
      onPostDelete(post.id)
    }

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{post.title}</h3>
        </div>
        <div className="panel-body">
          {post.body}
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    )
  }
}

export default BlogPost
