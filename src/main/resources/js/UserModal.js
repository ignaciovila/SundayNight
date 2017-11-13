import React from 'react';
import UserForm from './UserForm'

export default class UserModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-info" data-toggle="modal" data-target="#userModal">
                    New
                </button>

                <UserForm/>
            </div>
        );
    }
}