import React from 'react'
/* eslint-disable */
import store from '../store'
import axios from 'axios'
import Query from './Query'
import { Link } from 'react-router-dom'

import {getSingleStudent, updateStudent, deleteStudent} from '../reducers/studentStore'

class SingleStudent extends React.Component {
    constructor(){
        super()
        this.state = store.getState();
        this.updateStudent = this.updateStudent.bind(this)
        this.deleteStudent = this.deleteStudent.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        console.log("------------",typeof id)
        this.unsubscribe = store.subscribe( () => {
            this.setState(store.getState())
        } )
        const getSingleStudentByThunk = getSingleStudent(id);
        store.dispatch(getSingleStudentByThunk); 
    }

    componetWillUnmount () {
        this.unsubscribe();
    }  

    updateStudent(name){
        const sid = this.props.match.params.id
        const updateInfo = Object.assign(name, {id:sid});    
        console.log("------>", updateInfo)   
        const updateStudentThuk = updateStudent(updateInfo);
        store.dispatch(updateStudentThuk);
    }

    deleteStudent(){
        const stuId = this.props.match.params.id
        const deletStuThuk = deleteStudent(stuId)
        store.dispatch(deletStuThuk) 
    }

    render() {
        const studentInfo = this.state.students; // because it's a string "1", not a number!        
        console.log("what is passed in------>", this.state.students) 
        let cname = '' ;

        this.state.students.campusId ? 
        cname = this.state.students.campus.name
        : cname = 'no campuse '
       // debugger;
        
    return (
        <div>
        <h1> Hello 👩🏻‍🌾 SingleStudent. </h1>
        <h2>--> {studentInfo.name} --- {studentInfo.email} at {cname}</h2>
        <h2> ➕ 👩🏻‍🔖  update  </h2>
        <Link to={'/students'} style={{textDecoration:'none', fontSize: 30}} onClick={this.deleteStudent}> 🚫 delete  </Link>
        <Query addOrUpdate={this.updateStudent} type={"Update"}/>        
        </div>
        )
    }
}

export default SingleStudent;