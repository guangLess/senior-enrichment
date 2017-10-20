import React from 'react'
import Students from './students'
import { Switch, Route, Link } from 'react-router-dom'

//FIXME: change the name  to app.jsx
const SillyMain = () => (
    <div>
    <Link to="/students" style={{fontSize: 30}}>
         Hello silly animal students🐳
    </Link>
    <hr></hr>
    <Link to="/campuses" style={{fontSize: 30}}>
         and your wonderland 🏖🌌🎇
    </Link>
    </div>
)

export default SillyMain;
