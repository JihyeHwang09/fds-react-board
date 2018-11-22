import React from 'react'
import api from '../api';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
  
    this.usernameRef = React.createRef()
    this.passwordRef = React.createRef()
  }
  
  async handleSubmit(e) {
    e.preventDefault()
    const username = this.usernameRef.current.value
    const password = e.target.elements.password.value
    const res = await api.post('/users/login', {
      username,
      password
    })
    localStorage.setItem('token', res.data.token)

    // await 붙이면 실행될때까지 기다려주는 것

    // '/me'경로로 get 요청 보내면, 유저 정보를 받음



    // TODO: 게시글 목록 보여주기

  }
// form을 안쓰면서 DOM객체를 만지기 위해선 꼭 ref 사용!
//(e.target.elements는 form 내장기능임)
  render() {
    const {onRegister} = this.props
    return <React.Fragment>
        <form onSubmit={e => this.handleSubmit(e)}>
          <h1>로그인</h1>
          <input ref={this.usernameRef} type="text" name="username" />
          <input ref={this.passwordRef} type="password" name="password" />

          <button>로그인</button>
        </form>
        {/*  회원 가입 버튼이 폼 안에 있으면, 
폼 내장 기능인 전송 기능이 동작해서 회원가입 버튼을 누르면 ->
 로그인 폼이 전송되는 일이 발생할 수 있음
 -> 해결방법: <React.Fragment></React.Fragment>로 감싼다.*/}

      {/* <React.Fragment></React.Fragment>를 사용하면, 아무 의미없는 태그로 감싸는 효과임 */}
        <button onClick={() => onRegister()}>회원 가입</button>
      </React.Fragment>;
  }
}