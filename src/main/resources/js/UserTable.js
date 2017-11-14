import React from 'react';
import User from './User';

export default class UserTable extends React.Component {
    getUsers() {
        return this.props.users.map(user => <User user={user}/>);
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
                    <th>:)</th>
                </tr>
                </thead>
                <tbody>
                {this.getUsers()}
                </tbody>
            </table>
        );
    }
}