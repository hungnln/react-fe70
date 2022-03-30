import React, { Component } from 'react'
import CarList from './CarList';
import ModalCar from './ModalCar';
const products = [
    { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './img/products/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/products/silver-car.jpg', price: 3000 },
    { id: 3, name: 'Steel car', img: './img/products/steel-car.jpg', price: 4000 }
];
export default class CarStore extends Component {

    state = {
        product:
            { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 }

    }
    //Đặt state tại đâu thì viết hàm setState ở đó
    xemChiTiet = (product) => {
        this.setState({
            product: product
        })
    }
    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Bài tập truyền props</h3>
                <ModalCar product={this.state.product} />
                <CarList arrProduct={products} xemChiTiet={this.xemChiTiet} />
            </div>
        )
    }
}
