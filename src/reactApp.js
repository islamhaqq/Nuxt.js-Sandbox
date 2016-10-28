import React from 'react';
import { render } from 'react-dom';

import ContactsListComponent from './contactsList';

class AppComponent extends React.Component{
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
                <ContactsListComponent/>
            </div>
        )
    }
}

render(<AppComponent/>, document.getElementById('component-display'));
