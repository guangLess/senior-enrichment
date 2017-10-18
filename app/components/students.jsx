import React from 'react'
import {connect} from 'react-redux'
import {getStudents, addStudent} from '../reducers/studentStore'
import store from '../store'
import Query from './Query'

// version of not using connect 

class Students extends React.Component {
    constructor (){
        super();
        this.state = store.getState();
        this.addStudent = this.addStudent.bind(this)
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

    addStudent(newStudent){
        console.log(newStudent)
        const addStudentByThunk = addStudent(newStudent);
        store.dispatch(addStudentByThunk);
    }

    render() {
        const studentData = this.state.students;
        console.log("I am getting state---", studentData)
        return (
            <div>
            <h1> Hello 🌎 Student</h1>
            <ul>
            {
                studentData.map(student =>  
                    <li key={student.id}>{student.name} </li>
                )
            }
            </ul>
            <h3> Add Student </h3>
            <h2> here--->{this.addStudent} </h2>
            <Query submitStudent={this.addStudent}/>
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

