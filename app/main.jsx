'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import store from './store'
import SillyMain from './components/silly'
import Students from './components/students'


const element = (<div>
                  <BrowserRouter>                  
                    <Switch>
                      <Route exact path="/" component={SillyMain} />                
                      <Route exact path="/students" component={Students}/>   
                    </Switch>
                  </BrowserRouter>
                </div>);

render(
  element
  ,
  document.getElementById('main')
)

//<Students />
//<h1> 🤣 </h1>