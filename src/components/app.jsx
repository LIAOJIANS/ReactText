import React, { Component } from 'react'
import AddRegist from './addRegist'
import Regist from './regist'

export default class App extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        regists: [
            { name: '安安', content: '山山好帅啊' },
            { name: '安安', content: '山山好帅啊' },
        ]
    }
    upRegist = (regist) => {
        let { regists } = this.state
        regists.unshift(regist)
        this.setState({ regists })
    }
    delRegist = (index) => {
        let { regists } = this.state
        regists.splice(index, 1)
        this.setState({regists})
    }
   render() {
       return (
           <div>
              <div className="top">
                  <h1>请发表对React的评论</h1>
              </div>
               <div className="button">
                   <AddRegist upRegist={ this.upRegist }/>
                   <Regist regists={ this.state.regists } delRegist={this.delRegist} />
               </div>
           </div>
       )
   }
}
