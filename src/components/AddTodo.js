import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        todoTitle: '' 
    }
    onChange = (e) => {
        this.setState({todoTitle: e.target.value});        
    }

    onSubmitClick = () => {
        this.props.addTodo(this.state.todoTitle);
        this.state.todoTitle = '';
    }

    render() {
        return (
            <div style={{display: 'flex', height: '40px'}}>
                <input
                    style={{flex: '10'}} 
                    type="text"
                    name="addTodoText"
                    value={this.state.todoTitle}
                    onChange={this.onChange}
                />
                <input
                    style={{flex: '1'}}
                    type="button"
                    name="Submit"
                    value="Submit"
                    onClick={this.onSubmitClick}
                />
            </div>
        )
    }
}

export default AddTodo;