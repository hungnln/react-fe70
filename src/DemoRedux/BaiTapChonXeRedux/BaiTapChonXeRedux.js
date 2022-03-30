import React, { Component } from 'react'
import CarListRedux from './CarListRedux'

import CarModalRedux from './CarModalRedux'

export default class BaiTapChonXeRedux extends Component {
    products = [
        { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/products/silver-car.jpg', price: 3000 },
        { id: 3, name: 'Steel car', img: './img/products/steel-car.jpg', price: 4000 }
    ];
    render() {
        return (
            <div className='container'>
                <h3>Car List</h3>
                <CarModalRedux />
                <CarListRedux productList={this.products} />
            </div>
        )
    }
}
