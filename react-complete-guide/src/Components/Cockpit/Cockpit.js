import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const authCon = useContext(AuthContext);

    console.log(authCon.authenticated);

    useEffect(() => {
        console.log('3.1 [Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert('saved data');
        // }, 1000);
        toggleButtonRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, []);

    // useEffect(() => {
    //     console.log('3.1.2 [Cockpit.js] 2nd useEffect');
    //     return () => {
    //         console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    //     };
    // });

    let btnClass = '';
    if (props.showPerson) {
        btnClass = classes.Red;
    }

    //dynamic css classes
    const assignedClasses = [];
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); //classes be red
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold); //classes be bold
    }

    return (
        <div className={classes.Cockpit}>
            <h1> {props.title}</h1>
            <p className={assignedClasses.join(' ')}> awe </p>
            <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}> Toggle Persons</button>
            <button onClick={authCon.login}>Log in</button>
        </div>);
};

export default React.memo(cockpit);