import React, { Component } from 'react'
const MessageBox = [
    { id: 1, name: 'message01', content: '我爱中国' },
    { id: 2, name: 'message02', content: '我爱中' },
    { id: 3, name: 'message03', content: '我爱' }
]

export default class MessageDetil extends Component {
   render() {
       const { id } = this.props.match.params
       const message = MessageBox.find((item) => item.id = id)
       return (
           <div>
               <ul>
                   <li>{ message.id }</li>
                   <li>{ message.name }</li>
                   <li>{ message.content }</li>
               </ul>
           </div>
       )
   }
}
