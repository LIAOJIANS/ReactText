import React, { Component } from 'react'
import { NavLink, Switch, Route } from "react-router-dom"
import About from './pages/About/About'
import Home from './pages/Home/Home'

export default class App extends Component {
   render() {
       return (
           <div>
                <h1>React Router Dome</h1>
               <div>
                   <NavLink to='/about'> About </NavLink>
                   <NavLink to='/home'> Home </NavLink>
               </div>
               <div>
                   <Switch>
                       <Route path='/about' component={ About }></Route>
                       <Route path='/home' component={ Home }  ></Route>
                   </Switch>
               </div>
           </div>
       )
   }
}
