import React, { useState } from 'react'

export default function BaiTapChonXe() {

    let [img, setImg] = useState('./img/products/black-car.jpg');
    return (
        <div className='row'>
            <div className='col-6'>
                <img src={img} alt='...' className='w-100' />
            </div>
            <div className='col-6'>
                <div className='row'>
                    <div className='col-4'>
                        <button className='btn bg-dark text-white' onClick={() => { setImg('./img/products/black-car.jpg') }}>Black Car</button>
                    </div>
                    <div className='col-4'>
                        <button className='btn bg-danger text-white' onClick={() => { setImg('./img/products/red-car.jpg') }}>Red Car</button>
                    </div>
                    <div className='col-4'>
                        <button className='btn bg-secondary text-white' onClick={() => { setImg('./img/products/silver-car.jpg') }}>Silver Car</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
