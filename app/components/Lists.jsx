import React from 'react'
import { Link } from 'react-router-dom'

/* eslint-disable */

const NameOf = ({item}) => (<span> {item.name} </span>) //added default 

class Lists extends React.Component {

    render(){
        const {Item = NameOf} = this.props //added default 
        console.log("llists conetens got passed in from parents", this.props.contents)

    return (
            <div>
                <h2>lists of content from Lists comp </h2>
                <ul>
                {
                    this.props.contents
                    ? this.props.contents.map(ele =>  
                        <li key={ele.id}>                    
                        <Link to={`/${this.props.type}/${ele.id}`}>
                            <Item item={ele}/> </Link>
                        </li>  
                    )
                    : "can not find campus"
                }
                </ul>
            </div>
        )
    }
}

export default Lists;

