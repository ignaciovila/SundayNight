import React from 'react';

export default class FormError extends React.Component {
    render() {
        return(
            <div className="alert alert-danger">
                There are fields with errors
            </div>
        );
    }
}