import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class Profile extends Component {

    state = {
        name: '',
        lastName: ''
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        return true
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>
                            Enter name
                        </label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        >
                        </input>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label>
                            Enter last name
                        </label>
                        <input
                            type="text"
                            value={this.state.lastName}                            
                            onChange={this.handleLastNameChange}                            
                        >
                        </input>
                    </div>                    
                </form>
            </div>
        )
    }
}

// Profile.propTypes = {
//     name: PropTypes.oneOf(['Phil', 'Philip']),
//     lastName: PropTypes.string,
//     age: PropTypes.number,
//     hobbies: PropTypes.array,
//     spanish: PropTypes.bool,
//     message: PropTypes.func,
//     mother: function (props, propName, componentName) {
//         if (props[propName] !== 'Jane') {
//             return new Error(`The name ${props[propName]} is incorrect`)
//         }
//     }
// }

export default Profile;
