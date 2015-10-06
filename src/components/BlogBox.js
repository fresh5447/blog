import React from 'react'
import {connect} from 'react-redux'
import {addPost} from '../actions/BlogActions'
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
    const {blog} = this.props
    return(
      <div className="blogBox">
        <h1> Dougs Awesome Blog </h1>
        <BlogList blog={blog}/>
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

