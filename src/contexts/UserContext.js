import React, { Component } from "react";

import api from "../api";

import React, { Component } from "react";

const { Provider, Consumer } = React.createContext({
  username: "",
  id: 0,
  login: () => {},
  logout: () => {}
});

export default class UserContext extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      username: null
    };
  }
  async componentDidMount() {
    if (localStorage.getItem("token")) {
      await this.refreshUser();
    }
  }

  async login(username, password) {
    const res = await api.post("/api-token-auth/", {
      username,
      password
    });
  }
  localStorage.setItem('token', res.data.token);
  await this.refreshUser();
  // this.props.


  logout() {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem('token');
    // 사용자 정보 캐시 초기화
    this.setState({
      id: null,
      username: null,
    })
  }

}
  render() {
    return <div />;
  }
