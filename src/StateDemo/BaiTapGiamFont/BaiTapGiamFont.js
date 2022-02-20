import React, { Component } from 'react'

export default class BaiTapGiamFont extends Component {
    state = {
        size: 17
    }
    changeSize = (indexStr) => {
        if (indexStr === '+') {
            this.setState({
                size: ++this.state.size
            })
        } else {
            this.setState({
                size: --this.state.size
            })
        }
    }
    render() {
        return (
            <div className='container'>
                <h3 style={{
                    fontSize: `${this.state.size}px`
                }}>Bài tập tăng giảm font</h3>
                <button className='btn btn-outline-primary' onClick={() => this.changeSize('+')}>+</button>
                <button className='btn btn-outline-primary ml-2' onClick={() => this.changeSize()}>-</button>

            </div>
        )
    }
}
