import React from 'react'
import $ from 'jquery'
import axios from 'axios'


const BlogForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    const title = React.findDOMNode(this.refs.title).value.trim();
    const body = React.findDOMNode(this.refs.body).value.trim();
    if(!title || !body){
      return;
    }
    this.props.onBlogSubmit( title, body);
    React.findDOMNode(this.refs.title).value = '';
    React.findDOMNode(this.refs.body).value = '';
  },
  render: function(){
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label> Title </label>
          <input type="text" placeholder="blog title" ref="title" />
        </div>
        <div className="form-group">
          <textarea className="form-control" ref="body" rows="9"></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default" value="POST">Save </button>
        </div>
      </form>
      );
  }
});

export default BlogForm

