import React from 'react'

//TODO: Add campus comp so that it will capture inputs accrodingly


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
        this.props.addOrUpdate(nameData)
    }

    render(){
        return (
            <div>
                <h2> ➕ 👩🏻‍🌾{this.props.type} ➕ </h2>
                <form onSubmit={this.handelSubmit} >
                <label>
                 Name & content :
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

