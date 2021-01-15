import React, { useContext, useRef, useEffect } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = props => {
  
    const assignedClasses = [];
    let btnClass = '';
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        toggleButtonRef.current.click();
    }, [])

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push('red');
    }
    if (props.persons.length <=1) {
        assignedClasses.push('bold');
    }
    
    return (
    <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>It's really working</p>
        <button ref={toggleButtonRef} className={btnClass} onClick={props.toggle}>Toggle Persons List</button>
        <button onClick={authContext.login}>Log in</button>
        
    </div>
    );
};

export default React.memo(cockpit);