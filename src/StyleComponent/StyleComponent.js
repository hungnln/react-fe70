import React, { Component } from 'react'
import './style.css'
import style from './Style.module.css'

export default class StyleComponent extends Component {
    render() {
        const styleObject = {
            backgroundColor: 'black',
            color: 'green'
        }
        return (
            <div>
                <p className='pColorRed'>Hello frontend 70</p>
                <p className={style.pColorGreen}>Hello frontend 70</p>
                <p className={style['p-color-blue']}>Hello frontend 70</p>
                <p style={styleObject}>Hello frontend 70</p>
                <p style={{
                    backgroundColor: 'yellow',
                    color: 'green'
                }}>Hello frontend 70</p>


            </div >
        )
    }
}
