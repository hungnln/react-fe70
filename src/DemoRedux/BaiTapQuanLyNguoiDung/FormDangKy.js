import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from "lodash"
import { THEM_NGUOI_DUNG } from '../../redux/actions/types/baiTapQuanLyNguoiDungType'
import { themNguoiDungAction } from '../../redux/actions/baiTapQuanLyNguoiDungAction'
class FormDangKy extends Component {
    state = {
        values: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            loaiNguoiDung: '1',
            matKhau: ''
        },
        errors: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            matKhau: ''
        }
    }
    handleChangeInput = (event) => {
        let { name, value, type } = event.target
        let newValues = { ...this.state.values }
        newValues[name] = value;
        let newErrors = { ...this.state.errors }
        let errorMess = '';
        if (value === '') {
            errorMess = name + ' không được bỏ trống !'
        }
        if (type == 'email') {
            let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!regexEmail.test(value)) {
                errorMess = name + ' không đúng định dạng!'
            }
        }
        newErrors[name] = errorMess;
        this.setState({
            values: newValues,
            errors: newErrors
        }, () => console.log(this.state))
    }
    handleSubmit = (event) => {
        event.preventDefault(); //Phương thức cần sự kiện reload của browser
        console.log('values', this.state.values);
        //Kiểm tra hợp lệ
        let { values, errors } = this.state;
        for (const key in values) {
            if (values[key] === '') {
                alert('Thông tin 1 hợp lệ');
                return;
            }
        }
        for (const key in errors) {
            if (errors[key] !== '') {
                alert('Thông tin ko hợp lệ');
                return;
            }
        }
        //Khi thông tin form hợp lệ => Đưa dữ liệu lên redux
        const action = themNguoiDungAction(this.state.values)
        //Gọi dữ liệu lên reducer
        this.props.dispatch(action);
    }
    //Hàm này đang được gọi bởi handleChange(setState)
    //Hàm này được gọi khi bấm nút sửa (newProps)
    //Khi nào bấm chỉnh sửa thì cần séttate
    //Khi nào không bấm chỉnh sửa mà changeInput thì ko cần gám newprops vào state
    // static getDerivedStateFromProps(newProps, currentState) {
    //     //Nhận vào props mới trước khi render và state hiện tại
    //     //Hàm này sẽ chay jtruowsc khi gia odieejn thay đổi (nhận vào props mới và state hiện tại)
    //     //=>Lấy props từ redux gắn vào state của component
    //     if (newProps.nguoiDungSua.taiKhoan !== currentState.values.taiKhoan)
    //         currentState = {
    //             ...currentState,
    //             values: newProps.nguoiDungSua
    //         }
    //     return currentState
    // }

    //hàm này chỉ chạy khi props thay đôi
    componentWillReceiveProps(newProps) {
        //trước khi render và sau khi props thay đổi thì gán props vào state
        this.setState({
            values: newProps.nguoiDungSua
        })
    }

    render() {
        let { taiKhoan, matKhau, hoTen, soDienThoai, email, loaiNguoiDung } = this.state.values;
        return (
            <form className='card' onSubmit={this.handleSubmit}>
                <div className='card-header'>
                    <h3>Form Đăng Ký</h3>
                </div>
                <div className='row card-body'>
                    <div className='col-6'>
                        <div className='form-group'>
                            <p>Tài khoản</p>
                            <input className='form-control' name='taiKhoan' onChange={this.handleChangeInput} value={taiKhoan}></input>
                            <div className='text-danger'>{this.state.errors.taiKhoan}</div>
                        </div>
                        <div className='form-group'>
                            <p>Mật khẩu</p>
                            <input className='form-control' name='matKhau' onChange={this.handleChangeInput} value={matKhau}></input>
                            <div className='text-danger'>{this.state.errors.matKhau}</div>

                        </div>
                        <div className='form-group'>
                            <p>Email</p>
                            <input type='email' className='form-control' name='email' onChange={this.handleChangeInput} value={email}></input>
                            <div className='text-danger'>{this.state.errors.email}</div>

                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group'>
                            <p>Họ tên</p>
                            <input className='form-control' name='hoTen' onChange={this.handleChangeInput} value={hoTen}></input>
                            <div className='text-danger'>{this.state.errors.hoTen}</div>

                        </div>
                        <div className='form-group'>
                            <p>Số điện thoại</p>
                            <input className='form-control' name='soDienThoai' onChange={this.handleChangeInput} value={soDienThoai}></input>
                            <div className='text-danger'>{this.state.errors.soDienThoai}</div>

                        </div>
                        <div className='form-group'>
                            <p>Loại người dùng</p>
                            <select name='loaiNguoiDung' className='form-control' onChange={this.handleChangeInput} value={loaiNguoiDung}>
                                <option value="1">Người dùng</option>
                                <option value="2">Quản trị</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <button type='submit' className='btn btn-outline-success'>Đăng ký</button>
                    <button type='button' className='btn btn-outline-primary ml-2' onClick={() => {
                        //Sử dụng dữ liệu từ giao diện gửi lên redux thay đổi giá trị người dùng trong mảng
                        const action = {
                            type: 'CAP_NHAT_NGUOI_DUNG',
                            nguoiDungCapNhat: this.state.values
                        }
                        this.props.dispatch(action)
                    }}>Cập nhật</button>

                </div>

            </form>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        nguoiDungSua: rootReducer.baiTapQuanLyNguoiDungReducer.nguoiDungSua
    }
}
export default connect(mapStateToProps)(FormDangKy)
