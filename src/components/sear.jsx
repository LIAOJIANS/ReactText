import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class Sear extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        isShowResult: true,
        goingSearch: false,
        result: [],
        noResult: []
    }
    static propTypes = {
        searchName: PropTypes.string.isRequired
    }
    componentWillReceiveProps(nextProps, nextContext) {
        const { searchName } = nextProps
        const url = `https://api.github.com/search/users?q=${ searchName }`
        this.setState({
            isShowResult: false,
            goingSearch: true
        })
        axios.get(url).then(res => {
            const result = res.data.items.map(item => (
                {
                    avatarUrl: item.avatar_url,
                    name: item.login,
                    url: item.html_url
                }
            ))
            console.log(result)
            this.setState({
                goingSearch: false,
                result: result
            })

        })
    }
    render() {
        const { isShowResult, goingSearch, result, noResult } = this.state
       if (isShowResult) {
            return <h2>请输入搜索关键字</h2>
       } else if(goingSearch) {
           return <h2>正在搜索......</h2>
       } else if (result) {
           return (
               <div>
                   {
                       result.map((item, index) => (
                           <a href={ item.url } key={ index }>
                               <img src={ item.avatarUrl } alt=""/>
                               <p>{ item.name }</p>
                           </a>
                       ))
                   }
               </div>
           )
       } else {
           return <h2>暂无搜索记录</h2>
       }
   }
}
