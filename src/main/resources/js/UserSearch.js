import React from 'react';

export default class UserSearch extends React.Component {
    handleSubmit() {

    }

    render() {
        return(
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <input className="form-control" type="text" placeholder="Buscar" aria-label="Buscar"/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        );
    }
}