'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Students from './components/students'
//import Root from './components/Root'
//<Root/>


// render(
//   <Provider store={store}>
//   <Students />
//   <h1> Hello world </h1>
//   </Provider>,
//   document.getElementById('main')
// )

const element = (<div>
                    <Students />
                    <h1> 🤣</h1>
                </div>);


render(
    element
 ,
  document.getElementById('main')
)

