import React, { Component } from 'react'
import CarItemRedux from './CarItemRedux';

export default class CarListRedux extends Component {
    renderProduct = () => {
        let { productList } = this.props;
        return productList.map((item, index) => {
            return <div className='col-3' key={index}>
                <CarItemRedux item={item} />
            </div>
        })
    }
    render() {
        return (
            <div className='row'>
                {this.renderProduct()}
            </div>
        )
    }
}
