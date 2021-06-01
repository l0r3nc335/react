import React from 'react'; 

export const HelloNonJSX = () => {
    return React.createElement(
        'div', 
        //null,
        { id: 'hello', className: 'helloClass' }, 
        React.createElement('h1', null, 'Hello Non JSX functional Component')
    );
}

export const HelloJSX = () => {
    //JSX
    return (
        <div className='helloClass'>
            <h1>Hello JSX</h1>
        </div>
    )
}

//export default HelloJSX