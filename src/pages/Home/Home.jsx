import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import News from "./Cliden/News";
import Message from "./Cliden/Message";



export default class Home extends Component {
   render() {
       return (
           <div>
                <h1>我是Home</h1>
                <div>
                    <NavLink to='/home/news' >News</NavLink>
                    <NavLink to='/home/messages'>Message</NavLink>
                </div>
               <div>
                   <Switch>
                       <Route path='/home/news' component={ News }></Route>
                       <Route path='/home/messages' component={ Message }></Route>
                       <Redirect to='/home/news' />
                   </Switch>
               </div>
           </div>
       )
   }
}
