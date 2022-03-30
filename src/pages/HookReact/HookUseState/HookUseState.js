import React, { useState } from 'react'
import BaiTapChonXe from './BaiTapChonXe';

export default function HookUseState() {

    let [state, setState] = useState({ like: 1 }) //useState(stateDefault)

    let [like, setLike] = useState(1);
    return (
        <div className='container'>
            <div className='card w-25 mt-2'>
                <img src='https://i.pravatar.cc?u=39' alt='...' />
                <div className='card-body'>
                    <p className='text text-danger'>{like}</p>
                    <button className='btn btn-danger' onClick={() => {
                        setLike(like + 1)
                    }}>Like</button>
                </div>
            </div>
            <hr />
            <BaiTapChonXe />
        </div>
    )
}
