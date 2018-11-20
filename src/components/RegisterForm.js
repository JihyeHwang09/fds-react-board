import React, { Component } from 'react'

import api from '../api'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // 현재 입력 필드에 입력된 사용자 이름/암호
            username: '',
            password: ''
        }
    }

    async handleSubmit(e) {
        e.preventDefault()
        const { username, password } = this.state
        // 사용자 이름 중복체크
        //https://chip-carriage.glitch.me/users?username=ffff으로 get 요청
        // ~/users?username=fast에 요청을 보내서, username=fast가 있으면,
        // [
        //   {
        //     username: "fast",
        //     id: 3
        //   }
        // ];
        // user 정보가 배열로 넘어옴
        //없는  username으로 get 요청 보내면, 빈 배열 []이 응답으로 옴
        // users는 배열
        //return하면 post요청이 안 날아가고 빠져나옴(회원가입이 중단됨)




        const { data: users } = await api.get('/users', {
            params: {
                username
            }
        })
        if (users.length > 0) {
            alert('이미 같은 이름이 사용 중입니다.')
            return
        }
        const res = await api.post('/users/register', {
            username,
            password
        })
        localStorage.setItem('token', res.data.token)
        // TODO: 게시글 목록 보여주기
    }

    handleFieldChange(e, name) {
        // name 변수에 저장되어 있는 문자열을
        // 그대로 속성 이름으로 사용하기
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        const { username, password } = this.state
        return (
            // 이벤트 객체 넘겨줄 때도 있고, 안 넘겨줄 때도 있는 이유
// 이벤트 객체가 필요할 때는 넘겨주고, 굳이 이벤트 객체가 필요없을 때는 넘겨주지 x
            <form onSubmit={e => this.handleSubmit(e)}>
                <h1>회원 가입</h1>
                <input type="text" name="username" value={username} onChange={e => this.handleFieldChange(e, 'username')} />
                <input type="password" name="password" value={password} onChange={e => this.handleFieldChange(e, 'password')} />
                <button>가입</button>
            </form>
        )
    }
}
