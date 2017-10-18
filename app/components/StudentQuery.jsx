import React from 'react'

// version of not using connect 
/*
class StudentsQuery extends React.Component {
    constructor(){
        super();
        this.state = {name};
        this.handelSubmit = this.handelSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handelSubmit(evt){
        evt.preventDefalut();
        console.log("submit--->", this.state.name)
        this.setState({name: evt.target.value});
    }
    handleChange(evt){
        this.setState({name: evt.target.value})
        console.log("onChange--->", this.state.name)
    }
    render() {
        //const studentData =
        return (
            <div>
            <h1> Find 🌎 Student</h1>
            <form onSubmit={this.handelSubmit}>
                <label>
                Student Name:
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        );
    }
}
*/



const StudentsQuery = () => (
    <div>
    <h1> Hello I am rendering inside StudentsQuery. </h1>
    </div>
)

export default StudentsQuery;
