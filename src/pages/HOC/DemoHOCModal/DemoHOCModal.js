import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Login from '../../Login/Login'
import Register from '../../Register/Register'
import ModalHOC from './ModalHOC'

export default function DemoHOCModal() {

    // let newComponent =Register
    const [component, setComponent] = useState(<Register />)
    const dispatch = useDispatch()
    return (
        <div className='container'>
            <h3 className='mt-05 display-4 text-center'>Demo HOC</h3>
            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId"
                onClick={() => {
                    const action = {
                        type: 'OPEN_FORM',
                        component: <Register />,
                        handleSubmit: () => {
                            console.log('dăng ký submit');
                        }
                    }
                    dispatch(action)
                }}>
                Đăng ký
            </button>
            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId"
                onClick={() => {
                    const action = {
                        type: 'OPEN_FORM',
                        component: <Login />,
                        handleSubmit: () => {
                            console.log('dăng nhập submit');
                        }
                    }
                    dispatch(action)
                }}>
                Đăng nhập
            </button>
            <ModalHOC component={component} />
        </div>
    )
}




