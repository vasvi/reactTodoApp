import React, {Component} from 'react';

class TodoItem extends Component {    
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const {id, title} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}></input> {''}
                {title}
                <button style={deleteBtn} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

const deleteBtn = {
    background: '#ff0000',
    color: '#ffffff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor:'pointer',
    float: 'right'
};

export default TodoItem;