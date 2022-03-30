import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        return (
            <div className='container'>
                id: {this.props.match.params.id}
            </div>
        )
    }
}
