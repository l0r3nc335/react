import react from 'react';

/*
function Greet() {
    return <h1>Hello Enzo</h1>
}
*/
//  ES6 Stateless Functional Component 
/*export*/ const GreetEnzo = () => <h1>Stateless Functional Component - Hello Enzo</h1>
/*export*/ const GreetRona = () => <h1>Export ES6 -  Hello Rona</h1>

//JSX Functional Component 
/*const Greet = props => {
    return (
        <div>
            <h1>ES6 stateles functional compoent -  Hello {props.name}={props.age}</h1>
            {props.children}
        </div>
    ) 

}*/

//destructure props in functional component
/*const Greet = ({name,age}) => {
    return (
        <div>
            <h1>ES6 stateles functional compoent -  Hello {name}={age}</h1>
        </div>
    ) 
}*/
//destructure props in functional component
const Greet = (props) => {
    const {name, age} = props
    return (
        <div>
            <h1>ES6 stateles functional compoent PROPS-  Hello {name}={age}</h1>
            {props.children}
        </div>
    ) 
}

export default Greet;