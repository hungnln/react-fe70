import React, { Component } from 'react'

//kết nối redux
import { connect } from 'react-redux';

class SanPhamProps extends Component {
    render() {
        let { product } = this.props;
        return (
            <div className='card'>
                <img src={product.hinhAnh} alt='...'></img>
                <div className='card-body'>
                    <p>{product.tenSP}</p>
                    <button style={{ backgroundColor: 'black' }} className="text-white btn" onClick={() => { this.props.phoneDetailRedux(product) }}>Xem chi tiết </button>
                    <button style={{ backgroundColor: 'green' }} className="text-white btn ml-2" onClick={() => { this.props.themGioHang(product) }}>Thêm giỏ hàng</button>

                </div>
            </div>
        )
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        phoneDetailRedux: (product) => {
            const action = {
                type: 'XEM_CHI_TIET_SP',
                product: product
            };
            //Dùng hàm dispatch để đưa dữ liệu lên redux
            dispatch(action);
        },
        themGioHang: (sanPham) => {
            //tạo ra 1 action
            const action = {
                type: 'THEM_GIO_HANG',
                sanPham
            };
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchtoProps)(SanPhamProps);

