import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            countFive: 0,
            countOne: 0
        }
    }

    increment() {
        /* //with call back
        this.setState({
            count: this.state.count + 1
        },//call back value 
            () => {
                console.log('Callback value', this.state.count) 
            }
        )
        */
        this.setState( (prevState, props)  => ({
            countFive: prevState.countFive + props.val     
        }))
        console.log(this.state.countFive)   
    }

    incrementOnce() {
        this.setState( (prevState, props)  => ({
            countOne: prevState.countOne + props.val     
        }))
        console.log(this.state.countOne)   
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div><strong>Count(+5)</strong> : {this.state.countFive}</div>
                <button onClick={ () => this.incrementFive()}>Increment</button>
                <br />
                <div><strong>Count(+1)</strong> : {this.state.countOne}</div>
                <button onClick={ () => this.incrementOnce()}>Increment</button>
            </div>
            
        )
    }
}

export default Counter