import React from 'react'
import {connect} from 'react-redux'
import {getStudents} from '../reducers/studentStore'
import store from '../store'


// version of not using connect 

class Students extends React.Component {
    constructor (){
        super();
        this.state = store.getState();
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe( () => {
            this.setState(store.getState())
        } )
        //fetch data 
        //dispatch to store
        const getStudentsByThunk =  getStudents();
        store.dispatch(getStudentsByThunk);
    }
    componetWillUnmount () {
        this.unsubscribe();
    }

    render() {
        const studentData = this.state.students;
        //console.log("I am getting state---", this.state)
        console.log("I am getting state---", studentData)
        return (
            <div>
            <h1> Hello Student React Componets</h1>
            <ul>
            {
                studentData.map(student =>  
                    <li key={student.id}>{student.name} </li>
                )
            }
            </ul>
        </div>
        )
    }
}


// version of using connect
//const mapState = students => 
//export default connect(students => ({students}, {getStudents}))(Students)


// testing for dum component
/*
const Student = () => (
    <div>
    <h1> Hello I am rendering inside student. </h1>
    </div>
)
*/

export default Students;

