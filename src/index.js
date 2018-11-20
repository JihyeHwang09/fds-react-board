// jsx문법을 사용하기 위해서는 react모듈을 import 해야한다. 모든 react 컴포넌트에 필수적인 코드이다.
import React from 'react';
// react-dom모듈은 react 앱을 최초 렌더링 하기위해 엔트리 포인트에서 쓰인다.
import ReactDOM from 'react-dom';
// css파일을 import 구문으로 가져오고 있다.이는 webpack의 css - loader를 활용한 것인데, create - react - app에서 기본적으로 세팅이 되어있다.
import './index.css';
// App이라는 react 컴포넌트를 가져오는 코드이다. 
// 컴포넌트는 react 웹에서 기본적인 화면을 구성하는 단위이다. 
// 예를들어, 회원 가입 화면에서 button, input, textarea와 같은 것들이 컴포넌트이고, 이러한 컴포넌트들이 구성한 화면 조차도 하나의 컴포넌트이다. 
// react는 이러한 컴포넌트들을 만들고, 조립하는 것을 용이하게 해줌으로써 개발에 편의성을 제공한다. 
import App from './App';
// service worker란 네트웍이 느리거나 오프라인인 상태에서도 온라인 인것 처럼 리소스들을 캐싱해서 보여주는 모듈을 뜻한다. 
// create-react-app에서는 기본으로 구현하여 소스코드에 포함되어있다.
import * as serviceWorker from './serviceWorker';
//root라는 id를 가진 태그를 찾아서 그 안에 App컴포넌트를 렌더링시킨다.
//이곳이 우리가 만드는 react 웹의 엔트리 포인트인데, 껍데기가 되는 html 파일은 public / index.html파일이 된다.
// 이 파일을 열어보면 root라는 id를 가진 div태그가 존재함을 확인할 수 있다.
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
