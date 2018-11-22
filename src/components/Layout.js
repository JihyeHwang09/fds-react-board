// 헤더, 푸터
// 뭔가를 감싸는 컴포넌트 만들고 싶을 때
import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className ="header">헤더</div>
        <h1 className="title">{this.props.title}</h1>
        <div className ="footer">푸터</div>
      </div>
    )
  }
}
