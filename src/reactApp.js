import React from 'react';
import { render } from 'react-dom';

class ReactApp extends React.Component{
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
            </div>
        )
    }
}

render(<ReactApp/>, document.getElementById('reactApp'));
