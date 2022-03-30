import React, { useRef, useState } from 'react'

export default function HookUseRef() {
    const [number, setNumber] = useState(0);
    const inputUserName = useRef(null)
    const inputPassword = useRef(null)
    let tong = useRef(0);//Lưu lại các giá trị thay đổi
    const handleSubmit = (e) => {
        e.preventDefault();//Ngăn chặn reload browser khi submmit

        let userName = inputUserName.current.value;
        let pass = inputPassword.current.value;
        inputUserName.current.style.color = 'green'
        console.log(userName);
    }
    return (
        <div className='container'>
            <div className='form-group'>
                <p>Nhập vào 1 số</p>
                <input className='form-control' onChange={(e) => { setNumber(e.target.value) }}></input>
                <button className='btn btn-success' onClick={() => {
                    tong.current = tong.current + Number(number);
                    console.log('tong', tong);
                }}>Tính tông</button>
            </div>
            <form className='container' onSubmit={handleSubmit}>
                <h3>Form useRef</h3>
                <div className='form-group'>
                    <p>username</p>
                    <input ref={inputUserName} className='form-control' id='username' name='username'></input>
                </div>
                <div className='form-group'>
                    <p>password</p>
                    <input ref={inputPassword} className='form-control' id='password' name='password'></input>
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-success'>Submit</button>
                </div>
            </form>
        </div>
    )
}
