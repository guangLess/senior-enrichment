import React from 'react'
import {getCampuses, addCampus} from '../reducers/campusStore'
//import {connect} from 'react-redux'
import store from '../store'
import Lists from './Lists'
import Query from './Query'


export default class Campuses extends React.Component{
    constructor() {
        super()
        this.state = store.getState()
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe( () => {
            this.setState(store.getState())
        } )

        const getCampusesByThunk = getCampuses();
        store.dispatch(getCampusesByThunk);
    }

    componetWillUnmount () {
        this.unsubscribe();
    }

    addCampus(name){
        console.log('fetched name from query ---', name)
        const addCampus = addCampus(name);
        store.dispatch(addCampus);
    }

    render(){
        let campusData = this.state
        console.log("----campusData---->", campusData.campuses)
        return (
        <div>
        <h1> Hello  👩🏻‍🌾  Campus. </h1>
        <Query addOrUpdate={this.addCampus}/>
        <Lists contents={campusData.campuses} type={'campuses'} Item={({item}) => <h2>{item.name}</h2>}/>
        </div>
        )
    }
}

//export default connect(campuses => ({campuses}), {getCampuses})(Campuses)

