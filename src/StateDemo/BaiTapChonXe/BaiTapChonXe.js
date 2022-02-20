import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        imgSrc: './img/product/black-car.jpg'
    }
    changeImgSrc = (color) => {
        this.setState({
            imgSrc: `./img/product/${color}-car.jpg`
        });
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <img className='w-100' src={this.state.imgSrc}></img>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-3'>
                                <button style={{ color: 'black' }} onClick={() => this.changeImgSrc('black')}>Black Car</button>
                            </div>
                            <div className='col-3'>
                                <button style={{ color: 'gray' }} onClick={() => this.changeImgSrc('steel')}>Steel Car</button>
                            </div>
                            <div className='col-3'>
                                <button style={{ color: 'silver' }} onClick={() => this.changeImgSrc('silver')}>Silver Car</button>
                            </div>
                            <div className='col-3'>
                                <button style={{ color: 'red' }} onClick={() => this.changeImgSrc('red')}>Red Car</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
