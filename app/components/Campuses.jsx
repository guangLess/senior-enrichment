import React from 'react'
import {getCampuses} from '../reducers/campusStore'
import {connect} from 'react-redux'
import store from '../store'
import axios from 'axios'


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


        // axios.get('/api/campus')
        // .then(res => {
        //    console.log("----campus---->", res.data)
        // })
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
        </div>
        )
    }
}

//export default connect(campuses => ({campuses}), {getCampuses})(Campuses)

