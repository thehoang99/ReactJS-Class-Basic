import React from "react";

class ListTodo extends React.Component {
    state = {
        showTodoList: true,
        editTodo: {}
    }

    handleShowHide = () => {
        this.setState({
            showTodoList: !this.state.showTodoList
        })
    }

    handleClickDelete = (todo) => {
        this.props.deleteTodo(todo);
    }

    handleClickEdit = (todo) => {
        let { editTodo } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;

        if (!isEmpty && editTodo.id === todo.id) {
            let arrTodoCopy = [...this.props.arrTodo];
            let todoIndex = arrTodoCopy.findIndex(item => item.id === todo.id);

            arrTodoCopy[todoIndex].title = editTodo.title;

            this.props.editTodo(arrTodoCopy);
            this.setState({
                editTodo: {}
            })
            return;
        }

        this.setState({
            editTodo: todo
        })
    }

    handleChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { arrTodo } = this.props;
        let { showTodoList, editTodo } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;

        return (
            <>
                {!showTodoList ?
                    <div>
                        <button className='btn-showHide'
                            onClick={() => this.handleShowHide()}
                        >Show TODO List</button>
                    </div>
                    :
                    <>
                        <div className="todo-content">
                            {arrTodo && arrTodo.length > 0 &&
                                arrTodo.map((item, index) => {
                                    return (
                                        <div className="todo-child" key={item.id}>
                                            {!isEmpty && editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input type="text" value={editTodo.title}
                                                        onChange={(event) => this.handleChangeEditTodo(event)} />
                                                </span>
                                                :
                                                <span>{index + 1} - {item.title}</span>
                                            }
                                            <button type="button" className="btn-edit"
                                                onClick={() => this.handleClickEdit(item)}
                                            >
                                                {!isEmpty && editTodo.id === item.id ? 'Save' : 'Edit'}
                                            </button>
                                            <button type="button" className="btn-delete"
                                                onClick={() => this.handleClickDelete(item)}
                                            >Delete</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button className='btn-showHide'
                                onClick={() => this.handleShowHide()}
                            >Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ListTodo;