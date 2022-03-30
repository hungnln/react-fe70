import React, { Component } from 'react'

export default class DemoChildren extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
