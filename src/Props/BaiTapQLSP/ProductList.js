import React, { Component } from 'react'
import ProductIem from './ProductIem'

export default class ProductList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         product: {
    //             id: 1,
    //             name: "Adidas Prophere",
    //             alias: "adidas-prophere",
    //             price: 350,
    //             description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    //             shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    //             quantity: 995,
    //             image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
    //         }
    //     }
    // }
    renderProductItem = () => {
        let { arrProduct } = this.props;
        return arrProduct.map((product, index) => {
            return <div className='col-4 mt-2' key={index}><ProductIem product={product} /></div>
        })
    }
    render() {
        return (
            <div className='row'>
                {this.renderProductItem()}
                {/* <div className='col-4'>
                    <ProductIem />
                </div>
                <div className='col-4'>
                    <ProductIem />

                </div>
                <div className='col-4'>
                    <ProductIem />
                </div> */}
            </div>
        )
    }
}
