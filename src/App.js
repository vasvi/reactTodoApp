import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: '1',
        title: 'Todo 1',
        completed: false
      },
      {
        id: '2',
        title: 'Todo 2',
        completed: false
      },
      {
        id: '3',
        title: 'Todo 3',
        completed: false
      }
    ]
  };

  toggleComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
      })
    })
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
