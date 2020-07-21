import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props,state){
    //     console.log('1.1[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // } outdated

    //shouldComponentUpdate lifecycle
    // shouldComponentUpdate(nextProps, nextSate) {
    //     console.log('2.1[Persons.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true
    //     } else {
    //         return false;
    //     }
    // }

    //getSnapshotBeforeUpdate lifecycle
    // getSnapshotBeforeUpdate(prevProp, prevState) {
    //     console.log('4.1[Persons.js] getSnapshotBeforeUpdate');
    // }

    // componentWillUpdate(){
    // } outdated

    //componentDidUpdate lifecycle
    componentDidUpdate() {
        console.log('5.1[Persons.js] componentDidUpdate');
    }

    // componentWillMount(){
    //     console.log('6.1[Persons.js] componentWillMount');
    // }

    //render lifecycle
    render() {
        console.log('3.1[Persons.js] rendering...')
        // create Person elements and show them
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
};

export default Persons;