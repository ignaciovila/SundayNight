import React from 'react';
import axios from 'axios';
import $ from 'jquery';

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', surname: '', phone: '', email: ''};

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

        axios.post('/users/new', this.state);

        this.setState({name: '', surname: '', phone: '', email: ''});

        //$('#userModal').modal('hide');
    }

    render() {
        return (
            <div className="modal fade" id="userModal" tabIndex="-1" role="dialog" aria-labelledby="userModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="userModalLabel">New User</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="name" placeholder="First Name"
                                           value={this.state.name} onChange={this.handleNameChange}/>
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" id="surname" placeholder="Last Name"
                                           value={this.state.surname} onChange={this.handleSurnameChange}/>
                                </div>

                                <div className="form-group">
                                    <input type="tel" className="form-control" id="phone" placeholder="Phone"
                                           value={this.state.phone} onChange={this.handlePhoneChange}/>
                                </div>

                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Email"
                                           value={this.state.email} onChange={this.handleEmailChange}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                            <button type="submit" className="btn btn-info" onClick={this.handleSubmit}>
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
