import React from 'react';

const userOutput = props => {
    const style = {
        fontSize: '1.15em'
    }

    return (
        <div>
            <p style={style}>Welcome, {props.username}</p>
            <p>I'll be your digital assistant</p>
        </div>
        );
}

export default userOutput;