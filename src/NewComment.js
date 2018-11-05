import React, { Component } from "react";

class NewComment extends Component {
  state = {
    newComment: ""
  };

  handleChange = event => {
    this.setState({
      newComment: event.target.value
    });
  };

  sendCommnet = () => {
    this.props.sendCommnet(this.state.newComment);
    this.setState({
      newComment: ""
    });
  };

  render() {
    return (
      <div>
        <textarea
          className="form-control"
          rows="3"
          value={this.state.newComment}
          onChange={this.handleChange}
        />
        <button className="btn btn-primary mt-2" onClick={this.sendCommnet}>
          Enviar
        </button>
      </div>
    );
  }
}

export default NewComment;
