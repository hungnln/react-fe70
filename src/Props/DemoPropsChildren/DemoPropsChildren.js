import React, { Component } from 'react'
import CarStore from '../CarStore/CarStore'
import DemoChildren from './DemoChildren'

export default class DemoPropsChildren extends Component {
    render() {
        return (
            <div>
                <h3>Demo truyền về props children</h3>
                <DemoChildren>
                    <p>hello cybersoft</p>
                    <CarStore />
                </DemoChildren>
            </div>
        )
    }
}
