var BlogBox = React.createClass({
 loadBlogsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleBlogSubmit: function(blog){
  	var blogs = this.state.data;
  	var newBlogs = blogs.concat([blog]);
  	this.setState({data: newBlogs});
  	$.ajax({
  		url: this.props.url,
  		dataType: 'json',
  		type: 'POST',
  		data: blog,
  		success: function(data){
  			this.setState({data: data});
  		}.bind(this),
  		error: function(xhr, status, err){
  			console.error(this.props.url, status, err.toString());
  		}.bind(this)
  	});
  },
	getInitialState: function(){
		return {data: []};
	},
	componentDidMount: function(){
		this.loadBlogsFromServer();
		setInterval(this.loadBlogsFromServer, this.props.pollInterval);
	},
	render: function(){
		return(
			<div className="blogBox">
				<h1> Dougs Awesome Blog </h1>
				<BlogList data={this.state.data}/>
				<BlogForm onBlogSubmit={this.handleBlogSubmit}/>
			</div>
		);
	}
});

var BlogList = React.createClass({
	render: function(){
		var blogNodes = this.props.data.map(function(blog){
			return (
				<Blog title={blog.title}>
					{blog.body}
				</Blog>
			);
		});
		return (
			<div className="blogList">
				{blogNodes}
			</div>
			);
		}
});

var BlogForm = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
		var title = React.findDOMNode(this.refs.title).value.trim();
		var body = React.findDOMNode(this.refs.body).value.trim();
		if(!title || !body){
			return;
		}
		this.props.onBlogSubmit({title: title, body: body});
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
					<button type="submit" class="btn btn-default" value="POST">Save </button>
				</div>
			</form>
			);
	}
});

var Blog = React.createClass({
	render: function(){
		return (
			<div className="panel panel-default">
  			<div className="panel-heading">
    			<h3 className="panel-title">{this.props.title}</h3>
  			</div>
  			<div className="panel-body">
    			{this.props.children}
  			</div>
			</div>
		);
	}
});

React.render( <BlogBox url="http://localhost:3000/api/blogs" pollInterval={2000} />, document.getElementById('content') );