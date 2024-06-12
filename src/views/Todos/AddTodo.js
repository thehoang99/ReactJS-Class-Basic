import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleClickAdd = () => {
        if (!this.state.title) {
            toast.error('Missing required parametter');
            return;
        }
        this.props.addNewTodo({
            id: Math.floor(Math.random() * 101),
            title: this.state.title
        })

        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <div className="todo-add">
                <input type="text" value={this.state.title}
                    placeholder="Please enter something"
                    onChange={(event) => this.handleChangeTitle(event)} />
                <button className="btn-add" type="button"
                    onClick={() => this.handleClickAdd()}>Add
                </button>
            </div>
        )
    }
}

export default AddTodo;