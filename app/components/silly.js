import React from 'react'
import Students from './students'
import { Switch, Route, Link } from 'react-router-dom'


const SillyMain = () => (
    <div>
    <Link to="/students" style={{fontSize: 30}}>
         Hello silly animal students🐳
    </Link>
    </div>
)

export default SillyMain;
