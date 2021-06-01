import React, { Component } from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Click Function Component');
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Function Component</button>
        </div>
    ) 
}

export default FunctionClick