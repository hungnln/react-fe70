import React, { useState, useEffect } from 'react'
import ToDoApp from './ToDoApp';

export default function HookUseEffect() {
    const [number, setNumber] = useState(0);
    const [like, setLike] = useState(0);
    const timeOut = setInterval(() => {
        console.log(1);
    }, 1000)

    useEffect(() => {
        // //Chạy sau khi được tạo
        // //Thay thế cho componentDidMount và componentDidUpdate tương ứng react class component
        // console.log('componentDidMount & componentDidUpdate');
    })
    useEffect(() => {
        //Chạy 1 lần duy nhất sau khi render
        //Thay thế componentDidMount lấy dữ liệu từ backend về
        console.log('componentDidMount');
        return () => {
            console.log('WillUnmo8nt');
            clearInterval(timeOut)
        }
    }, [])
    useEffect(() => {
        //Kiểm tra giá trị number thay đổi thì chạy lại hàm này ( Giống componentDidUpdate)
        console.log('componentDidMount number');
    }, [number])
    console.log('render');
    return (
        <div className='container'>
            <p>Number: {number}</p>
            <button className='btn btn-success' onClick={() => { setNumber(number + 1) }}>+</button>
            <hr />
            <p>Like: {like}</p>

            <button className='btn btn-success' onClick={() => { setLike(like + 1) }}>+</button>
            <hr />
            <ToDoApp />
        </div>
    )
}
