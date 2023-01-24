import React, { Component } from 'react';
import {Transition} from 'react-transition-group';
import '../css/App.css';

class TransitionComp extends Component{

    state = {
        show:true
    }

    showDiv = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render(){
        return(
            <>
              <Transition
                in={this.state.show}
                timeout={2000}
                enter={false}
                exit={false}
                onEntered={(node) => {
                    console.log('ENTER')
                }}
                onExited={(node) => {
                    console.log('EXIT')
                }}                
              >
                {state => (
                    <div className={`square square-${state}`}>
                        {state}
                    </div>
                )}
              </Transition>
              <div className="showDiv"
                   onClick={this.showDiv}>
                Show/Hide
              </div>
            </>
        )
    }
}


export default TransitionComp;