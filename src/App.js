import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import './App.css';
import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Todo 1',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Todo 2',
        completed: false
      },
      {
        id: uuid.v4(),
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

  addTodo = (todoTitle) => {
    const newTodo = {
      id: uuid.v4(),
      title: todoTitle,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Header></Header>
          
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}></AddTodo>
              <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )} />

          <Route path="/about" component={About} />

        </div>
      </Router>
    );
  }
}

export default App;
