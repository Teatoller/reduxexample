import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from "../actions/postAction";


class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    // replaces fetch which is inside the action
      this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            Title:
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            Body:
            <br />
            <textarea
              type="text"
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
PostForm.protoTypes = {
  createPost: PropTypes.func.isRequired,
  post: PropTypes.array.isRequired
}

export default connect(
  null,
  {createPost}
)(PostForm);
