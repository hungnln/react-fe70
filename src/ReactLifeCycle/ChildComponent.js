import React, { Component, PureComponent } from 'react'

export default class ChildComponent extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            timeOut: 1
        }
        console.log('constructor child');
    }
    static getDerivedStateFromProps(newProps, currentState) { //Nhận vào props mới trước khi render và state hiện tại
        console.log('getDerivedStateFromProps child');
        return currentState;
    }

    // shouldComponentUpdate(newProps, newState) {
    //     if (this.props.number === newProps.number) {
    //         return false;
    //     }
    //     return true
    // }
    render() {
        console.log('render child');
        return (
            <div className='container'>
                <p className='p-5 bg-dark text-while display-4'>Child Component</p>
                <h3 className='text-danger'>{this.props.number}</h3>
            </div>
        )
    }

    componentDidMount() {
        this.timeOut = setInterval(() => {
            console.log('123');
        }, 1000)
        console.log('componentDidMount child');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate child');
    }
    componentWillUnmount() {
        //clear các hàm chạy ngầm hoặc các sự kiện addEventListener
        clearTimeout(this.timeOut)
    }
}
