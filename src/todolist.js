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
    this.complete = this.complete.bind(this);
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
  complete(id) {
    const completedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    this.setState({ todos: completedTodos });
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
        isComplete={todo.isComplete}
        removeTodo={() => this.remove(todo.id)}
        updateTodo={this.update}
        completeTodo={this.complete}
      />
    ));
    return (
      <div>
        <div className="TodoList">
          <h1 className="toptitle">TODO</h1>
          <button className="clear btn btn-danger" onClick={this.removeAll}>
            Clear All Tasks
          </button>
          <div className="form">
            <NewTodoForm createTodo={this.createTodo} />
          </div>
        </div>
        <div className="TodoList">
          <div className="alltodos">
            <div className="container">
              <div className="row">
                <div className="col subtitle">Task</div>
                <div className="col subtitle">Time Created</div>
              </div>
              {todos}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
