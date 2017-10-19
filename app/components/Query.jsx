import React from 'react'


class Query extends React.Component {
    constructor(props){
        super(props)
        this.state = {name}
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    handelSubmit(evt){
        evt.preventDefault();
        
        const nameData = {
            name: evt.target.name.value,
            email: evt.target.email.value
        }
        console.log("name submited ----", nameData)
        this.props.addStudent(nameData)
    }

    render(){
        return (
            <div>
                <h2> ➕ 👩🏻‍🌾  Add student ➕ </h2>
                <form onSubmit={this.handelSubmit} >
                <label>
                 Student Name & email :
                <input type="name" name='name' />
                <input type='email' name='email' />
                </label>
                <button type="submit" className="">➕</button>
                </form>
            </div>
        )
    }
}


export default Query;

