import React, { Component } from 'react';
import AuthContext from '../../../context/auth-context';
import './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        return (  
                <div className="Person">
                    {this.context.authenticated ? <p>Autheticated!</p> : <p>Please Login</p>}
                    <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                    <p>{this.props.children}</p>
                    <input
                        ref={this.inputElementRef}
                        type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name}/>
                </div>
            
            
        );
    }
}

export default Person;