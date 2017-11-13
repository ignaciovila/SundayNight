import React from 'react';
import User from './User';
import axios from 'axios';

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
            this.fetchUsers.bind(this), 1000
        );
    }

    fetchUsers() {
        axios.get('/users/all')
            .then((response) => {
                this.setState({
                    users: response.data
                });
            });
    }

    getUsers() {
        return this.state.users.map(user => <User user={user}/>);
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {this.getUsers()}
                </tbody>
            </table>
        );
    }
}