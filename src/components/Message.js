import React, { Component } from 'react';


class Message extends Component {

    //state object
    constructor() {
        super();
        this.state = {
            message: 'Welcome Visitor',
            buttonMessage: 'Subscribe',
            flag: 0
        }
    }
    //method setting states
    subscribe() {
        this.setState({
            message: 'Welcome Visitor',
            buttonMessage: 'Subscribe',
            flag: 0
        })
    }
    unsubscribe() {
        this.setState({
            message: 'Thank you for subscribing',
            buttonMessage: 'Unsubscribe',
            flag: 1
        })
    }
    //Method fired by JSX event
    changeMessage() {
        if(this.state.flag == 0) {
            this.unsubscribe();
        }else{
           this.subscribe();
        }
    }
    //Return JSX
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>{this.state.buttonMessage}</button>
            </div>
        )
    }
}
export default Message;