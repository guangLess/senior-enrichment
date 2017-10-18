import React from 'react'
import axios from 'axios'

import {addStudent} from '../reducers/studentStore'



class Query extends React.Component {
    constructor(props){
        super(props)
        this.state = {name}
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    handelSubmit(evt){
        evt.preventDefalut();
        const nameData = {
            name: evt.target.name.value,
            email: evt.target.email.value
        }
        console.log("name submited ----", nameData)

        addStudent(nameData);
        //this.props.submitStudent(nameData);

    }

    render(){
        return (
            <div>
                <h1> Find 🌎 Student from StudentsQuery. </h1>
                <form onSubmit={this.handelSubmit} >
                <label>
                 Student Name & email :
                <input type="name" name='name' />
                <input type='email' name='email' />
                </label>
                <button type="submit" className="">find</button>
                </form>
            </div>
        )
    }
}


export default Query;

