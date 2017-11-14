import React from 'react';
import axios from 'axios';
import FormError from "./FormError";

export default class UserModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', surname: '', phone: '', email: '', showError: false};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleSurnameChange(event) {
        this.setState({surname: event.target.value});
    }

    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.name.length > 1 && this.state.name.length > 1 && this.state.phone.length > 5 && this.state.email.includes('@') && this.state.email.includes('.com')) {
            axios.post('/users/new', this.state);
            this.setState({name: '', surname: '', phone: '', email: '', showError: false});
        } else {
            this.setState({showError: true});
        }
    }

    render() {
        return (
            <div className="modal fade" id="userModal" tabIndex="-1" role="dialog" aria-labelledby="userModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="centered padded-50">
                        {this.state.showError ? <FormError/> : null}
                    </div>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="userModalLabel">New User</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form id="userForm" onSubmit={this.handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="name" placeholder="First Name"
                                           value={this.state.name} onChange={this.handleNameChange} required="true"
                                           aria-required="true"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="surname" placeholder="Last Name"
                                           value={this.state.surname} onChange={this.handleSurnameChange}
                                           required="true" aria-required="true"/>
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control" id="phone" placeholder="Phone"
                                           value={this.state.phone} onChange={this.handlePhoneChange}
                                           required="true"
                                           aria-required="true"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Email"
                                           value={this.state.email} onChange={this.handleEmailChange}
                                           required="true"
                                           aria-required="true"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                    Close
                                </button>
                                <button type="submit" className="btn btn-info">
                                    Done
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
