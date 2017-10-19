import React from 'react'
import {getCampuses} from '../reducers/campusStore'
import {connect} from 'react-redux'
import store from '../store'
import Lists from './Lists'


export default class Campuses extends React.Component{
    constructor() {
        super()
        this.state = store.getState()
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe( () => {
            this.setState(store.getState())
        } )

        //FIXME: warnings of unmount when re-render
        const getCampusesByThunk = getCampuses();
        store.dispatch(getCampusesByThunk);
    }

    componetWillUnmount () {
        this.unsubscribe();
    }

    render(){
        let campusData = this.state
        console.log("----campusData---->", campusData.campuses)
        return (
        <div>
        <h1> Hello  👩🏻‍🌾  Campus. </h1>
        <Lists contents={campusData.campuses} Item={({item}) => <h2>{item.name}</h2>}/>
        </div>
        )
    }
}

//export default connect(campuses => ({campuses}), {getCampuses})(Campuses)

