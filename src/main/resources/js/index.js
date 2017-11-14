import React from 'react';
import ReactDOM from 'react-dom';
import UserContainer from './UserContainer';
import UserModal from './UserForm';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="padded">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6">
                        <UserContainer/>
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
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root')
);