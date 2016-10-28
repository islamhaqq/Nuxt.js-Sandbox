import React from 'react';

import contacts from './contacts';

class ContactsListComponent extends React.Component {
    render() {
        return (
            <ul>
                <li>{contacts.name} {contacts.phone}</li>
            </ul>
        )
    }
}

export default ContactsListComponent;
