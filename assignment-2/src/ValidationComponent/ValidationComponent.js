import React from 'react';

const validationComponent = props => {
    let response = <p>Text long enough</p>;
    if (props.length < 5) {
        response = <p>Text too short</p>
    } 
    
    return response;
}

export default validationComponent;