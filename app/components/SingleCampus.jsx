import React from 'react'
import axios from 'axios'
/* eslint-disable */
import store from '../store'
import Query from './Query'

import {getSingleCampus, updateCampus} from '../reducers/campusStore'
import Lists from './Lists'


class SingleCampus extends React.Component {
    constructor(){
        super()
        this.state = store.getState();
        //this.updateStudent = this.updateStudent.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        console.log("------------", id)
        this.unsubscribe = store.subscribe( () => {
            this.setState(store.getState())
        } )

        const getCampThunk = getSingleCampus(id)
        store.dispatch(getCampThunk); 

    }

    componetWillUnmount () {
        this.unsubscribe();
    }  
    /*
    updateStudent(name){
        const sid = this.props.match.params.id
        const updateInfo = Object.assign(name, {id:sid});    
        console.log("------>", updateInfo)   
        const updateStudentThuk = updateStudent(updateInfo);
        store.dispatch(updateStudentThuk);
    }*/

    render() {
        const campuseInfo = this.state.campuses; // because it's a string "1", not a number!        
        console.log("what is passed in------>", campuseInfo) 
        let cname = '' ;

        this.state.campuses.hasOwnProperty('campus') ? 
        cname = this.state.campuses.campus.name
        : cname = 'no campuse '
        
    return (
        <div>
        <h1>-->Hello 👩🏻‍🌾 {campuseInfo.name} ---</h1>
        <Lists contents={campuseInfo.students} type={'students'} Item={({item}) => <h2>{item.name}</h2>}/>       
        <h2> ➕ 👩🏻‍🔖  update  </h2>
        <Query addOrUpdate={this.updateStudent}/>        
        </div>
        )
    }
}

export default SingleCampus;


