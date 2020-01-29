import React, { Component } from "react";
import NewTodoForm from "./newtodoform";
import Todo from "./todo";
import "./Todo.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.createTodo = this.createTodo.bind(this);
    this.update = this.update.bind(this);
    this.removeAll = this.removeAll.bind(this);
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
  removeAll() {
    this.setState({
      todos: []
    });
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  createTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        id={todo.id}
        key={todo.id}
        task={todo.task}
        time={todo.time}
        removeTodo={() => this.remove(todo.id)}
        updateTodo={this.update}
      />
    ));
    return (
      <div className="TodoList">
        <h1>TodoListv1</h1>
        <button className="clear btn btn-danger" onClick={this.removeAll}>
          Clear All Tasks
        </button>
        <div className="form">
          <NewTodoForm createTodo={this.createTodo} />
        </div>

        <div className="alltodos">
          <div className="container">
            <div className="row">
              <div className="col">Task</div>
              <div className="col">Time</div>
            </div>

            {todos}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
