import React, { Component } from 'react';

//returning JSX with props from Component Call
/*class Welcome extends Component {
      render() {
          return <h1>Stateful Class Component Welcome {this.props.name} = {this.props.age}</h1>
      }
}*/

//destructuring props
class Welcome extends Component {
    render() {
        const {name, age} = this.props
        //const {state1, state2} = this.state //if has states
        return <h1>PROPS - Stateful Class Component Welcome {name} = {age}</h1>
    }
}
export default Welcome;