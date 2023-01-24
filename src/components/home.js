import React, { Component } from 'react';
import Profile from './profile';

class HomeComponent extends Component {

    state = {
        name: 'Phil',
        lastName: 'Merrilees',
        age: 45,
        hobbies: ['run'],
        spanish: false,
        message(){console.log('Hello' + this.name)},
        mother: 'Lynne'
    }

    render() {
        return (
            <>
                <Profile {...this.state} />
            </>
        )
    }
}

export default HomeComponent;