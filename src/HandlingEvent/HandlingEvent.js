import React, { Component } from 'react'

export default class HandlingEvent extends Component {


    handleSayHello = () => console.log('Say Hello');
    handleSayName = (name) => console.log('Hi ' + name);



    render() {
        return (
            <div>
                <button onClick={this.handleSayHello}>Say Hello</button>
                <button style={{
                    marginLeft: '5px',
                }} onClick={() => this.handleSayName('Hoang')}>Hi + name</button>

            </div>
        )
    }
}
