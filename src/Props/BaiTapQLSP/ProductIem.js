import React, { Component } from 'react'

export default class ProductIem extends Component {
    render() {
        let { product } = this.props;
        return (
            <div className='card'>
                <img src={product.image} alt='...'></img>
                <div className='card-body'>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button style={{ backgroundColor: 'black' }} className="text-white btn">Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
