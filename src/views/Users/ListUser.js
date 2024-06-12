import React from "react";
import axios from "axios";
import './ListUser.scss';
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class ListUser extends React.Component {

    state = {
        listUser: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleShowDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`);
    }

    render() {
        let { listUser } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div className="child" key={item.id}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                    <button className="btn-detail" type="button"
                                        onClick={() => this.handleShowDetailUser(item)}
                                    >
                                        Detail
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);