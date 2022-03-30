import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
export class TableDanhSachNguoiDung extends Component {
    state = {
        sortBy: 'taiKhoan'
    }
    handleSort = (name) => {
        this.setState({
            sortBy: name
        })
    }
    render() {
        let { mangNguoiDung } = this.props;
        mangNguoiDung = _.sortBy(mangNguoiDung, [this.state.sortBy])
        console.log(this.props);
        return (
            <div className='card'>
                <div className='card-header bg-dark text-white'>Danh sách người dùng</div>
                <table className='table'>
                    <thead>
                        <tr className='bg-dark text-white'>
                            <th>STT</th>
                            <th onClick={() => { this.handleSort('taiKhoan') }}>Tài khoản</th>
                            <th onClick={() => { this.handleSort('hoTen') }}>Họ tên</th>
                            <th>Mật khẩu</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Loại người dùng</th>
                            <th colSpan={2}>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.mangNguoiDung.map((nguoiDung, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{nguoiDung.taiKhoan}</td>
                                <td>{nguoiDung.hoTen}</td>
                                <td>{nguoiDung.matKhau}</td>
                                <td>{nguoiDung.email}</td>
                                <td>{nguoiDung.soDienThoai}</td>
                                <td>{nguoiDung.loaiNguoiDung}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => {
                                        const action = {
                                            type: 'XOA_NGUOI_DUNG',
                                            taiKhoan: nguoiDung.taiKhoan
                                        };
                                        //gửi dữ liệu lên reducer
                                        this.props.dispatch(action);
                                    }}>Xóa</button>
                                </td>
                                <td>
                                    <button className='btn btn-primary' onClick={() => {
                                        const action = {
                                            type: 'SUA_NGUOI_DUNG',
                                            nguoiDung: nguoiDung,
                                        };
                                        //gửi dữ liệu lên reducer
                                        this.props.dispatch(action);
                                    }}>Chỉnh sửa</button></td>

                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    mangNguoiDung: state.baiTapQuanLyNguoiDungReducer.mangNguoiDung
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, null)(TableDanhSachNguoiDung)
