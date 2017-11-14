import React from 'react';

export default class UserButton extends React.Component {
    render() {
        return (
            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#userModal">
                New
            </button>
        );
    }
}