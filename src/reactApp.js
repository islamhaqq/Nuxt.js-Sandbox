import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{
    render() {
        return (
            <div>hi</div>
        )
    }
}

render(<App/>, document.getElementById('reactApp'));
