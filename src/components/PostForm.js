import React, { Component } from 'react'

//새 글 쓰기와 글 수정의 공통된 부분을 따로  PostForm 컴포넌트로 뺌
// 상태도 없고, 라이프 사이클 훅이 없으면 함수형 컴포넌트로 만들어도 됨

// defaultValue에 다른 값을 또 넣어주지 않도록 주의
// 한 번 값을 넣어주면 그 값이 유지되도록 해줘야 한다
export default class PostForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={e => this.props.onSubmit(e)}>
          <input type="text" name="title" defaultValue={this.props.title} />
          <textarea name="body" cols="30" rows="10" defaultValue={this.props.body}></textarea>
          <button>전송</button>
        </form>
      </div>
    )
  }
}
