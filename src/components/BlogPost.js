import React from 'react'

class BlogPost extends React.Component{
  render(){
    const {children, title} = this.props

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{title}</h3>
        </div>
        <div className="panel-body">
          {children}
        </div>
      </div>
    )
  }
}

export default BlogPost
