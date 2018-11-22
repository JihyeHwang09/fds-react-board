import React, { Component } from 'react'
import api from '../api';
import Layout from "./Layout";

export default class PostDetail extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      // 이 컴포넌트를 그릴때는 서버로부터 자료를 가져오지 않았을 때는 빈 문자열 보여주려고.
      // 서버에서 받아오면 그때 다시 화면을 그려줌
      body: '',
      title: ''
    }
  }
  
  async componentDidMount() {
    // res.data가 객체라서 이 객체에 대한 분해대입을 이렇게 사용할 수 있다.
    const {data: {title, body}} = await api.get(`/posts/${this.props.postId}`)
    this.setState({
      title,
      body
    })
  }
  
  render() {
    const {postId, onEditPostFormPage} = this.props
    const {title, body} = this.state

    return (
      <Layout title="게시물 내용">
        <h1>게시물</h1>
        <button onClick={() => onEditPostFormPage(postId)}>수정</button>
        <div>{title}</div>
        <div>{body}</div>
      </Layout>
    )
  }
}
