import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    render() {
        console.log('props', this.props);
        return (
            <div>
                Home
                <button className='link' onClick={() => {
                    this.props.history.goBack();
                }}>Trở về trang trước</button>
                <br />
                <NavLink to={'/home'}>Trở về trang trước</NavLink>
            </div>
        )
    }
}
