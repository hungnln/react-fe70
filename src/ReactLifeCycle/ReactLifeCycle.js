import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ReactLifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 1,
            like: 1,
            object: {
                number: 1,
                like: 1

            }
        }
        console.log('constructor');
    }
    static getDerivedStateFromProps(newProps, currentState) { //Nhận vào props mới trước khi render và state hiện tại
        console.log('getDerivedStateFromProps');
        return currentState;
    }
    shouldComponentUpdate(newProps, newState) {
        //shouldComponentUpdate quyết định render hoặc ko render lại
        console.log('shouldComponentUpdate');

        return true;
    }
    render() {
        console.log('render');
        return (
            <div className='container'>
                <h3>Number : {this.state.object.number}</h3>
                <button className='btn btn-success' onClick={() => {
                    let newObject = { ...this.state.object };
                    newObject.number += 1
                    this.setState({ object: newObject })
                }}>+</button>
                {console.log(this.state.number)}
                <h3>Like : {this.state.like}</h3>
                <button className='btn btn-success' onClick={() => { this.setState({ like: this.state.like + 1 }) }}>+</button>

                <h3>Child Component</h3>
                <ChildComponent object={this.state.object} />
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount');
    }
}
