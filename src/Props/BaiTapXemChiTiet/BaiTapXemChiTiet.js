import React, { Component } from 'react'
import SanPhamProps from './SanPhamProps'

// kết nối redux
import { connect } from 'react-redux'
import GioHang from './GioHang'
const dataPhone = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]


class BaiTapXemChiTiet extends Component {
    //Yêu cầu binding state lên giao diện và xử lí setState khi người dùng bấm xem chi tiết
    state = {
        sanPhamChiTiet:
            { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }

    }
    renderPhone = () => {
        return dataPhone.map((product, index) => {
            return <div className='col-4' key={index}>
                <SanPhamProps product={product} phoneDetail={this.phoneDetailOnclick} />
            </div>
        })
    }
    phoneDetailOnclick = (product) => {
        this.setState({
            sanPhamChiTiet: product
        })
    }
    render() {

        return (
            <div className='container'>
                <h3>Giỏ Hàng</h3>
                <GioHang />
                <h3 className='text-center display-4' >Danh sách sản phẩm</h3>
                <div className='row'>
                    {this.renderPhone()}
                </div>
                <div className='mt-2'>
                    <div className='row'>
                        <div className='col-4'>
                            <h3>Tên sản phẩm</h3>
                            <img src={this.props.sanPhamChiTiet.hinhAnh} alt='...' height={300}></img>

                        </div>
                        <div className='col-8'>
                            <h3>Thông số kĩ thuật</h3>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Màn hình</th>
                                        <th>{this.props.sanPhamChiTiet.manHinh}</th>
                                    </tr>
                                    <tr>
                                        <th>Hệ điều hành</th>
                                        <th>{this.props.sanPhamChiTiet.heDieuHanh}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera trước</th>
                                        <th>{this.props.sanPhamChiTiet.cameraTruoc}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera sau</th>
                                        <th>{this.props.sanPhamChiTiet.cameraSau}</th>
                                    </tr>
                                    <tr>
                                        <th>Ram</th>
                                        <th>{this.props.sanPhamChiTiet.ram}</th>
                                    </tr>
                                    <tr>
                                        <th>Rom</th>
                                        <th>{this.props.sanPhamChiTiet.rom}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}
const mapStatetoProps = (rootReducer) => {
    return {
        sanPhamChiTiet: rootReducer.productDetailReducer
    }
}
export default connect(mapStatetoProps)(BaiTapXemChiTiet);

