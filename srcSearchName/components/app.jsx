import React, { Component } from 'react'
import Main from './main'
import Sear from './sear'

export default class App extends Component {
    state = {
        searchName: ''
    }
    changeSearchName = (searchName) => {
        console.log(searchName)
        this.setState({searchName})
    }
   render() {
       return (
           <div>
                <Main changeSearchName={this.changeSearchName}/>
                <Sear searchName={this.state.searchName}/>
           </div>
       )
   }
}
