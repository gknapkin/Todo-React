import React, { Component } from "react";
import uuid from "uuid/v4";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = {
      ...this.state,
      id: uuid(),
      time: new Date().toLocaleTimeString(),
      isComplete: false
    };
    this.props.createTodo(newTodo);
    this.setState({ task: "" });
  }
  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
              id="task"
              placeholder="Type in a task or a todo!"
            />
            <div className="input-group-addon input-group-button">
              <button
                onClick={this.handleSubmit}
                type="submit"
                className="btn btn-success"
              >
                Add Todo
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
