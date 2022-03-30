import React, { Component } from 'react'

export default class CarItem extends Component {
    render() {
        let { product } = this.props;
        return (
            <div className='card'>
                <img src={product.img}>
                </img>
                <div className='card-body'>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button style={{ backgroundColor: 'green' }} className="text-white btn" data-toggle="modal" data-target="#myModal" onClick={() => { this.props.xemChiTiet(product) }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
