import React from 'react'
/* eslint-disable */
import store from '../store'
import axios from 'axios'
import {getSingleStudent} from '../reducers/studentStore'



class SingleStudent extends React.Component {
    constructor(){
        super()
        //this.state = {name: '', email:''} // add campus later!
        this.state = store.getState();
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

    render() {
        const studentInfo = this.state.students; // because it's a string "1", not a number!        
        console.log("what is passed in------>", this.state.students) 
        
    return (
        <div>
        <h1> Hello 👩🏻‍🌾  I am rendering inside SingleStudent. </h1>
        <h2>--> {studentInfo.name}{studentInfo.email}</h2>
        
        </div>
        )
    }
}

export default SingleStudent;


