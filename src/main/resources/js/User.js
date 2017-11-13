import React from 'react';
import axios from 'axios';

export default class User extends React.Component {
    deleteUser() {
        axios.post('/users/delete', this.props.user);
    }

    render() {
        return (
            <tr>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.surname}</td>
                <td>{this.props.user.phone}</td>
                <td>{this.props.user.email}</td>
                <td>
                    <button type="button" onClick={this.deleteUser.bind(this)} className="btn btn-danger">
                        Del
                    </button>
                </td>
            </tr>
        );
    }
}