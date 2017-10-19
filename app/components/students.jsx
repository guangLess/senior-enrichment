import React from 'react'
//import {connect} from 'react-redux'
import {getStudents, addStudent} from '../reducers/studentStore'
import store from '../store'
import Query from './Query'


import { Link } from 'react-router-dom'

// version of not using connect 
/* eslint-disable */

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

        //FIXME: warnings of unmount when re-render
        const getStudentsByThunk =  getStudents();
        store.dispatch(getStudentsByThunk);
    }
    componetWillUnmount () {
        this.unsubscribe();
    }

    addStudent(name){
        console.log('fetched name from query ---', name)
        const addStudentThuk = addStudent(name);
        store.dispatch(addStudentThuk);
    }

    render() {
        let studentData = this.state.students;

        debugger;
        //
        //this.state.students ? studentData = this.state.student : studentData = []



        console.log("I am getting state---", studentData)
        return (
            <div>
            <h1> Hello 🌎 Students</h1>
            <h2> 👩🏻‍🌾  </h2>
            <Query addOrUpdate={this.addStudent}/>
            <ul>
            {
                studentData.map(student =>  
                    <li key={student.id}>                    
                    <Link to={`/students/${student.id}`}>
                        {student.name} </Link>
                    </li>  
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

