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
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
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
        removeTodo={() => this.remove(todo.id)}
        updateTodo={this.update}
      />
    ));
    return (
      <div className="TodoList">
        <h1>TodoListv1</h1>
        <NewTodoForm createTodo={this.createTodo} />
        {todos}
      </div>
    );
  }
}

export default TodoList;
