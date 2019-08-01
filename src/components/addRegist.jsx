import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddRegist extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        name: '',
        content: ''
    }
    static propTypes = {
        upRegist: PropTypes.func.isRequired
    }
    add = (event) => {
        console.log(this.state.name)
        let regist = {
            name: this.state.name,
            content: this.state.content
        }
        this.props.upRegist(regist)
        this.state.name = ''
        this.state.content = ''
        event.preventDefault()
    }
    userNamechange = (event) => {
        let name = event.target.value
        this.setState({ name })
    }
    comtentchange = (event) =>{
        let content = event.target.value
        this.setState({ content })
    }
   render() {
       return (
           <div>
               <form action="" onSubmit={ this.add }>
                   <p className='userName'>用户名</p>
                   <input type="text" placeholder='用户名' value={ this.state.name } onChange={ this.userNamechange }/>
                   <p className='content'>评价内容</p>
                   <textarea name="" id="" cols="30" rows="10" placeholder='内容' value={ this.state.content } onChange={ this.comtentchange }>
                   </textarea>
                   <input type="submit" value='提交'/>
               </form>
           </div>
       )
   }
}
