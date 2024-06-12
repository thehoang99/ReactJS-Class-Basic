import React from "react";
import { connect } from "react-redux";

class ReduxComponent extends React.Component {
    handleClickDelete = (user) => {
        this.props.deleteUserRedux(user);
    }

    handleAddUserRedux = () => {
        this.props.addUserRedux();
    }

    render() {
        let listUser = this.props.dataRedux;

        return (
            <>
                <p>List User form redux</p>
                <div>- - -</div>
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <button type="button" onClick={() => this.handleClickDelete(item)}>x</button>
                                </div>
                            )
                        })
                    }
                </div >
                <button type="button" onClick={() => this.handleAddUserRedux()}>Add new</button>
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'ADD_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);