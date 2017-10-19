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



const element = (<div>
                  <BrowserRouter>                  
                    <Switch>
                      <Route exact path="/" component={SillyMain} />                
                      <Route exact path="/students" component={Students}/>   
                      <Route exact path="/students/:id" component={SingleStudent}/>
                    </Switch>
                  </BrowserRouter>
                </div>);

render(
  element
  ,
  document.getElementById('main')
)

