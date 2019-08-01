import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from './list'

export default class Regist extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        regists: PropTypes.array.isRequired,
        delRegist: PropTypes.func.isRequired
    }
   render() {
        const { regists } = this.props
       return (
           <div>
                <h1>评论回复</h1>
                <ul>
                    {
                        regists.map(( item, index ) =>
                           <List item={ item } key={ index } delRegist={ this.props.delRegist } index={index}/>
                        )
                    }
                </ul>
           </div>
       )
   }
}
