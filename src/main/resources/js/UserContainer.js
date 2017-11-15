import React from 'react';
import axios from 'axios';
import UserTable from './UserTable';

export default class UserContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentWillMount() {
        this.fetchUsers();
    }

    componentDidMount() {
        setInterval(
            this.fetchUsers.bind(this), 500
        );
    }

    fetchUsers() {
        axios.get('/users/all/?filter=' + this.props.filter)
            .then((response) => {
                this.setState({
                    users: response.data
                });
            });
    }

    render() {
        return (
            this.state.users.length > 0
                ?
                <UserTable users={this.state.users}/>
                :
                <div className="alert alert-info">
                    No users found
                </div>
        );
    }
}