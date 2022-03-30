import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class DemoProps extends Component {
    render() {
        let sp1 = {
            id: 1,
            name: 'Iphone',
            gia: 1000,
            img: 'https://picsum.photos/200'
        }
        let sp2 = {
            id: 2,
            name: 'SamSung',
            gia: 2000,
            img: 'https://picsum.photos/200'
        }
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <ChildComponent sanPham={sp1} tenSanPham="Iphone" gia={1000} />
                    </div>
                    <div className='col-4'>
                        <ChildComponent sanPham={sp2} tenSanPham="SamSung" gia={2000} />
                    </div>
                </div>
            </div>
        )
    }
}
