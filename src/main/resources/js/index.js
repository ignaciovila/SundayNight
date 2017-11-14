import React from 'react';
import ReactDOM from 'react-dom';
import UserContainer from './UserContainer';
import UserButton from "./UserButton";
import UserModal from "./UserModal";

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
                    <a className="navbar-brand" href="/">Contact List</a>
                    <form className="form-inline">
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search"
                               onChange={this.handleFilterChange}/>
                    </form>
                </div>
                <div className="row padded">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6">
                        <UserContainer filter={this.state.userFilter}/>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
                <div className="row padded">
                    <div className="col-md-5">

                    </div>
                    <div className="col-md-2 centered">
                        <UserButton/>
                        <UserModal/>
                    </div>
                    <div className="col-md-5">

                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root')
);