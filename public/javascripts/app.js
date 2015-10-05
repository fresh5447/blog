var data = [
	{title: "my first week of code school", body: "lorem ipsum..."},
	{title: "my second week of code school", body: "more lorem ipusm..."}
];

var BlogBox = React.createClass({
	render: function(){
		return(
			<div className="blogBox">
				<h1> Dougs Awesome Blog </h1>
				<BlogList data={this.props.data}/>
				<BlogForm />
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
	render: function(){
		return (
			<form className="form-horizontal">
				<div className="form-group">
					<label> Title </label>
					<input type="text" placeholder="blog title" />
				</div>
				<div className="form-group">
					<textarea className="form-control" rows="9"></textarea>
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

React.render( <BlogBox data={data} />, document.getElementById('content') );