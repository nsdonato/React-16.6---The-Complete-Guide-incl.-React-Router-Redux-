import React from 'react';
import classes from './Person.css';
// import Radium from 'radium';

const person = ( props ) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    const style = {

    }
    return (
        <div className={classes.Person} syle={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

// export default Radium(person);  
export default person;  