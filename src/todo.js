import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.toggleForm();
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="todo">
          <div className="container">
            <div className="row">
              <div className="col-7">{this.props.task}</div>
              <div className="col-5">
                {this.props.time}
                <div className="btn-group rightGroup">
                  <button
                    type="button"
                    class="btn-sm btn-warning"
                    onClick={this.toggleForm}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn-sm btn-danger"
                    onClick={this.props.removeTodo}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
