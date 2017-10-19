import React from 'react'
import { Link } from 'react-router-dom'

/* eslint-disable */

const NameOf = ({item}) => (<span> {item.name} </span>)

class Lists extends React.Component {

    render(){
        const {Item = NameOf} = this.props //added default 

    return (
        //console.log("llists conetens got passed in from parents", contents)
            <div>
                <h2>lists of content from Lists comp </h2>
                <ul>
                {
                   //FIXME: this logic can be fixed
                    //let contents = [];
                    this.props.contents
                    ? this.props.contents.map(ele =>  
                        <li key={ele.id}>                    
                        <Link to={`/${ele.name}/${ele.id}`}>
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

