import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class List extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        item: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        delRegist: PropTypes.func.isRequired
    }
    delR = () => {
        this.props.delRegist(this.props.index)
        console.log(this.props.index)
    }
   render() {
        const { item } = this.props
       return (
           <div>
                <li>
                    <p>{ item.name } 说：</p>
                    <p>{ item.content }</p>
                    <button onClick={ this.delR }>删除</button>
                </li>
           </div>
       )
   }
}
