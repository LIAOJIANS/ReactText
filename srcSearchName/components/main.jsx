import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        changeSearchName: PropTypes.func.isRequired
    }
    state = {
        searchName: ''
    }
    Search =() => {
        const SearchName = this.input.value.trim()
        if(SearchName) {
            this.props.changeSearchName(SearchName)
        }
    }
   render() {
       return (
           <div>
               <input type="text" placeholder='输入关键字' ref={ input => this.input = input }/>
               <button onClick={ this.Search }>搜索</button>
           </div>
       )
   }
}
