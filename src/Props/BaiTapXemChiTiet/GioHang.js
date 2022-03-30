import React, { Component } from 'react'
import { connect } from 'react-redux'
class GioHang extends Component {
    render() {

        console.log(this.props);
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.gioHang.map((item, index) => {
                        return < tr key={index} >
                            <td>{item.maSP}</td>
                            <td><img src={item.hinhAnh} alt='...' width={50} height={50}></img></td>
                            <td>{item.tenSP}</td>
                            <td>{item.giaBan}</td>
                            <td>{item.soLuong}</td>
                            <td>{item.giaBan * item.soLuong}</td>
                            <td><button className='btn btn-danger'>Xóa</button></td>

                        </tr>
                    })}

                </tbody>
            </table >
        )
    }
}
const mapStatetoProps = (rootReducer) => {
    return {
        gioHang: rootReducer.gioHangReducer.gioHang
    }
}

export default connect(mapStatetoProps)(GioHang)
