import React from 'react';
import UserButton from './UserButton';
import UserModal from './UserModal';

export default class UserForm extends React.Component {
    render() {
        return (
            <div>
                <UserButton/>
                <UserModal/>
            </div>
        );
    }
}