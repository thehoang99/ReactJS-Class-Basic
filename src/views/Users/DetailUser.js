import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import './DetailUser.scss';

class DetailUser extends React.Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        let res = await axios.get(`https://reqres.in/api/users/${id}`);
        this.setState({
            user: res && res.data && res.data.data ? res.data.data : {}
        })
    }

    handleClickBack = () => {
        this.props.history.push('/user');
    }

    render() {
        let { user } = this.state;
        let isEmpty = Object.keys(user).length === 0;
        return (
            <div className="user-container">
                {!isEmpty &&
                    <>
                        <div className="title">
                            Detail User with id = {user.id}
                        </div>
                        <div className="user-content">
                            <h4 className="name">
                                {user.first_name} {user.last_name}
                            </h4>
                            <div className="email">
                                {user.email}
                            </div>
                            <img className="avatar" src={user.avatar} alt="this is avt" />
                        </div>
                        <button type="button" onClick={() => this.handleClickBack()}>Back</button>
                    </>
                }
            </div>

        )
    }
}

export default withRouter(DetailUser);