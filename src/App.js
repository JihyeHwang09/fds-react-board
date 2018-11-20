// 모든 react 컴포넌트들은 react 모듈의 Component클래스를 상속받는다. 
// Component는 ui를 구성하는 엘리먼트들을 독립적이고 재사용 가능하게 만드는 추상 클래스라고 생각하면 된다. 
// 미리 정의해 둔 메소드들이 있고, 그 메소드들을 override 해서 컴포넌트들을 구현하는데, 
// 그 중에서 화면을 그려주는 render 메소드는 필수적으로 정의해야 한다. 
// render 메소드는 반드시 jsx 문법으로 작성한 하나의 엘리먼트를 리턴한다.

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import PostList from './components/PostList'
import postDetail from './components/postDetail';

// 로그인 폼에 회원가입 버튼 만들기
// 회원가입 버튼 클릭하면 회원가입 폼 보여주기

// value prop을 이용하면,제어되는 컴포넌트로 만든다.
class App extends Component {
  constructor(props) {
    super(props)
    // page === 'login' -> 로그인 페이지
    // page === 'register' -> 회원가입 페이지
    // page === 'post-list' -> 게시물 목록 페이지
    // page === 'post-detail' -> 게시물 세부 페이지
    // page === 'new-post-form' -> 새 글 쓰기 페이지
    // page === 'edit-post-form' -> 글 수정 페이지



    // state란?
    // state는 컴포넌트의 스코프 안의 지역변수라고 할 수 있다.
    // 이 state가 변경되면 ,
    // -> 이 state를 참조하고 있는 컴포넌트의 다른 부분들도 영향을 받아 업데이트 된다. 


    // render 함수 위에 constructor를 선언하고, constructor 안에 this.state를 선언했다. 
    // state는 기본적으로 Object의 형태로 선언한다. 
    this.state = {
      page: 'post-list',
  // 현재 보고 있는 게시물의 ID
      postId: null
    } 
  }

  // 함수 이름 짓는 법
  //handle + 이벤트 + 
  handleRegisterPage() {
    this.setState({
      page: 'register'
    })
  }

  render() {
    //삼항연산자 깔끔하게 작성하는 법
    // ?뒤에 ()쓰기

    // d아래에서 this.쓰는건 위에서 분해대입하면 this 안적어줘도 됨

    // 코드 보기 힘들면 prop앞에서 엔터쳐서 코드 정리
    
    return (
      <div className="App">
        {this.state.page === 'login' ? (
          <LoginForm onRegister={() => this.handleRegisterPage()} />
        ) : this.state.page === 'register' ? (
          <RegisterForm />
        ) : this.state.page === 'post-list' ? (
          <PostList />
        ) : this.state.page === 'post-detail'? (
          <postDetail postId={this.state.postId}/>
        )
      }
      </div>
    );
  }
}

export default App;

