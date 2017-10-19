'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import store from './store'
//Route to render of
import SillyMain from './components/silly'

import Students from './components/students'
import SingleStudent from './components/SingleStudent'
import Campuses from './components/Campuses'


const element = (<Provider store={store}>
                <div>
                  <BrowserRouter>                  
                    <Switch>
                      <Route exact path="/" component={SillyMain} />                
                      <Route exact path="/students" component={Students}/>   
                      <Route exact path="/students/:id" component={SingleStudent}/>
                      <Route exact path="/campuses" component={Campuses}/>
                    </Switch>
                  </BrowserRouter>
                </div>
                </Provider>);

render(
  element
  ,
  document.getElementById('main')
)

