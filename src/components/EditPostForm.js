import React, { Component } from 'react'
import App from '../App';

export default class EditPostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    // 화면에 표시되면 실행하는 함수
    async componentDidMount() {
        // this.props.postId를 쓸 수 있는 이유는 App.js에서 this.state.postId를 내려줬기 때문
    }


  render() {
    return (
      <div>
        
      </div>
    )
  }
}
