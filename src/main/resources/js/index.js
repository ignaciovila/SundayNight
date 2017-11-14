import React from 'react';
import ReactDOM from 'react-dom';
import UserContainer from './UserContainer';
import UserModal from './UserForm';

class App extends React.Component {
    constructor() {
        super();
        this.state = {userFilter: ''};

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(event) {
        this.setState({userFilter: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="navbar bg-dark">
                    <a className="navbar-brand" href="/">Agenda</a>
                    <form className="form-inline">
                        <input className="form-control" type="text" placeholder="Buscar" aria-label="Buscar"
                        onChange={this.handleFilterChange}/>
                    </form>
                </div>
                <div className="container padded">
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-6">
                            <UserContainer filter={this.state.userFilter}/>
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">

                        </div>
                        <div className="col-md-2 centered">
                            <UserModal/>
                        </div>
                        <div className="col-md-5">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root')
);