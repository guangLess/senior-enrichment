import React from 'react'
/* eslint-disable */
import store from '../store'
import axios from 'axios'
import Query from './Query'

import {getSingleStudent, updateStudent} from '../reducers/studentStore'



class SingleStudent extends React.Component {
    constructor(){
        super()
        //this.state = {name: '', email:''} // add campus later!
        this.state = store.getState();
        this.updateStudent = this.updateStudent.bind(this)
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

    render() {
        const studentInfo = this.state.students; // because it's a string "1", not a number!        
        console.log("what is passed in------>", this.state.students) 
        let cname = '' ;

        this.state.students.hasOwnProperty('campus') ? 
        cname = this.state.students.campus.name
        : cname = 'no campuse '
       // debugger;
        
    return (
        <div>
        <h1> Hello 👩🏻‍🌾 SingleStudent. </h1>
        <h2>--> {studentInfo.name}{studentInfo.email}{cname}</h2>
        <h2> ➕ 👩🏻‍🔖  update  </h2>
        <Query addOrUpdate={this.updateStudent}/>        
        </div>
        )
    }
}

export default SingleStudent;


