import React from "react";
import './TodoStyles.scss';
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import { toast } from 'react-toastify';

class MainTodo extends React.Component {

    state = {
        arrTodo: [
            { id: 'TD01', title: 'Swimming' },
            { id: 'TD02', title: 'Reading book' },
            { id: 'TD03', title: 'Listening to music' },
        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            arrTodo: [...this.state.arrTodo, todo]
        })

        toast.success('Add a new TODO successfully!');
    }

    deleteTodo = (todo) => {
        let currentTodos = this.state.arrTodo;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);

        this.setState({
            arrTodo: currentTodos
        })

        toast.success('Deleted the TODO successfully!');
    }

    editTodo = (listTodo) => {
        this.setState({
            arrTodo: listTodo
        })

        toast.success('Updated the TODO successfully!');
    }

    render() {
        let { arrTodo } = this.state;

        return (
            <div className="todo-containter">
                <p>Simple TODO App with React.js</p>
                <AddTodo addNewTodo={this.addNewTodo} />
                <ListTodo arrTodo={arrTodo} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
            </div>
        )
    }
}

export default MainTodo;