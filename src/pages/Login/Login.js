import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dangNhapAction } from '../../redux/actions/quanLyNguoiDungAction'
class Login extends Component {

    state = {
        taiKhoan: '',
        matKhau: ''
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        //Sự kiện cản reload browser
        e.preventDefault();
        const action = dangNhapAction(this.state);
        //tốn khoảng thời gian để api kiểm tra
        this.props.dispatch(action);
    }
    render() {
        return (
            <div className='container'>
                <h3>Đăng nhập</h3>
                <div className='form-group'>
                    <p>Tài khoản</p>
                    <input className='form-control' name='taiKhoan' onChange={this.handleChange}></input>
                </div>
                <div className='form-group'>
                    <p>Mật khẩu</p>
                    <input className='form-control' name='matKhau' onChange={this.handleChange}></input>
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-success' onClick={this.handleSubmit}>Đăng nhập</button>
                </div>
            </div>
        )
    }
}
export default connect()(Login)
