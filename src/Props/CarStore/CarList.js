import React, { Component } from 'react'
import CarItem from './CarItem'

export default class CarList extends Component {
  renderCarList = () => {
    let { arrProduct } = this.props;
    return arrProduct.map((product, index) => {
      return <div className='col-3' key={index}><CarItem product={product} xemChiTiet={this.props.xemChiTiet} /></div>
    })
  }
  render() {
    return (
      <div className='row'>
        {this.renderCarList()}
      </div>
    )
  }
}
