import React from 'react'
import { Link } from 'react-router-dom'

/* eslint-disable */

class Lists extends React.Component {
    // constructor(props){
    //     super(props)
    //     //this.state = {"contents": props.contents}
    //     //this.handelSubmit = this.handelSubmit.bind(this);
    // }

    // handelSubmit(evt){
    //     evt.preventDefault();
        
    //     const nameData = {
    //         name: evt.target.name.value,
    //         email: evt.target.email.value
    //     }
    //     console.log("name submited ----", nameData)
    //     this.props.addOrUpdate(nameData)
    // }

    render(){
        //FIXME: this logic can be fixed
        let contents = [];
            this.props.contents
        ? contents = this.props.contents
        : contents = []

        console.log("llists conetens got passed in from parents", contents)
        return (
            <div>
                <h2>lists of content from Lists comp </h2>
                <ul>
                {
                    contents.map(ele =>  
                        <li key={ele.id}>                    
                        <Link to={`/${ele.name}/${ele.id}`}>
                            {ele.name} </Link>
                        </li>  
                    )
                }
                </ul>
            </div>
        )
    }
}


export default Lists;

