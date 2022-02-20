import React, { Component } from 'react'

export default class LoginForm extends Component {
    //state : là thuộc tính có sẵn của react class component, chứa các giá trị thay đổi trên giao diện khi người dùng thao tác
    state = {
        login: false
    }
    userName = 'Nguyen Van A';
    renderFormLogin = () => {
        if (this.state.login) {
            return <div>Hello {this.userName}</div>
        }
        return <button onClick={this.handerLogin}>Dang Nhap</button>
    }
    handerLogin = () => {
        console.log(123);
        /*setState là phương thức có sẵn của react class component. Nhận vào tham số là 1 state mới
            +Thay đổi csc giá trị của state = state mới
            +Render lại giao diện
            +setState là 1 phương thức bất đồng bộ
        */
        this.setState({
            login: true //this.state.login = true 
        }, () => console.log(this.state.login))
    }
    render() {
        return (
            <div className='container'>
                {/* {this.login ? <div>Hello {this.userName}</div> : <button>Dang Nhap</button>} */}
                {this.renderFormLogin()}
            </div>
        )
    }
}
