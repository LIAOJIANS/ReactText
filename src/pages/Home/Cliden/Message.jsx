import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import MessageDetil from './Message-detil'

const MessageBox = [
    { id: 1, name: 'message01' },
    { id: 2, name: 'message02' },
    { id: 3, name: 'message03' }
]

export default class Message extends Component {
   render() {
       return (
           <div>
               <ul>
                   {
                       MessageBox.map((item, index) => (
                           <li key={ index }>
                               <NavLink to={ `/home/messages/messagesDetil/${ item.id }` }>{ item.name }</NavLink>
                           </li>
                       ))
                   }
               </ul>
               <div>
                   <Route path='/home/messages/messagesDetil/:id' component={MessageDetil}></Route>
               </div>
           </div>
       )
   }
}
