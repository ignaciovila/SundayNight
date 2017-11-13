import React from 'react';
import ReactDOM from 'react-dom';
import UserContainer from './UserContainer';
import UserModal from './UserModal';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="padded">
                <div className="row">
                    <div className="col-md-5">
                        <UserContainer/>
                        <UserModal/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root')
);