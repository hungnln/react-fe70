import React, { Component } from 'react'

export default class ChildComponent extends Component {
    render() {
        /*
        Sự khác biệt giwuax state và props
        + Giống nhau: Đều là thuộc tính của class component để binding dữ liệu lên giao diện
        + Khác nhau: State chứa các giá trị thay đổi trên giao diện. State có thể tahy đổi được giá trị khi gọi phương thức setState
                     Props là thuộc tính của component chứa giá trị trừ component cha truyenf vào. Props không thể thay đổi giá trị   
        */
        //this.props: là thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào. Lưu ý giá trị đó là readonly
        let { sanPham } = this.props;
        return (
            <div className='card'>
                <div className='card-header'>Header</div>
                <img src={sanPham.img} alt='...'></img>
                <div className='card-body'>
                    <p>Tên sản phẩm : {sanPham.name}</p>
                    <p>Giá bán : {sanPham.gia}</p>
                </div>
            </div>
        )
    }
}
