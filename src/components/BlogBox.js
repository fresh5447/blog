import React from 'react'
import {connect} from 'react-redux'
import {addPost, deletePost} from '../actions/BlogActions'
import BlogList from './BlogList'
import BlogForm from './BlogForm'



class BlogBox extends React.Component {

  constructor(props) {
    super(props);
    this.handleBlogSubmit = this.handleBlogSubmit.bind(this);
  }

  handleBlogSubmit(title, body){
    const {dispatch} = this.props
    dispatch(addPost(title, body))
  }


  render() {
    const {blog, dispatch} = this.props

    const handlePostDelete = (id) => {
      console.log('Should delete post with id', id)
      dispatch(deletePost(id))
    }

    return(
      <div className="blogBox">
        <h1> Dougs Awesome Blog </h1>
        <BlogList blog={blog} onPostDelete={handlePostDelete}/>
        <BlogForm onBlogSubmit={this.handleBlogSubmit}/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    blog: state.blog
  }
}
export default connect(mapStateToProps)(BlogBox)

