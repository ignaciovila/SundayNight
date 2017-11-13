import React from 'react';
import axios from 'axios';
import Modal from "react-bootstrap/es/Modal";

export default class UserModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false, name: '', surname: '', phone: '', email: ''};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    close() {
        this.setState({show: false});
    }

    open() {
        this.setState({show: true});
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

        this.setState({show: false, name: '', surname: '', phone: '', email: ''});
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-info" onClick={this.open.bind(this)}>
                    New
                </button>
                <Modal show={this.state.show} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>New User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" placeholder="First Name"
                                       value={this.state.name} minLength="3" onChange={this.handleNameChange}/>
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control" id="surname" placeholder="Last Name"
                                       value={this.state.surname} minLength="3" onChange={this.handleSurnameChange}/>
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
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" className="btn btn-info" onClick={this.close.bind(this)}>Done</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}