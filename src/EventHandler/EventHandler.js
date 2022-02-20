import React, { Component } from 'react'

export default class EventHandler extends Component {

    showMess = () => alert('helo')
    showInfo = (name) => alert('hello ' + name)
    render() {
        const handleClick = () => console.log(123);
        return (
            <div className='container'>
                <button id='btnShowMess' onClick={handleClick}>Show Message</button>

                <button onClick={this.showInfo.bind(this, 'Hung')}>Click me</button>
                <button onClick={() => this.showInfo('Hung')}>Click me!</button>

            </div>
        )
    }
}
