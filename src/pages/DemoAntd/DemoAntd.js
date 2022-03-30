import React from 'react'
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
export default function DemoAntd() {
    return (
        <div className='container'>
            <h3>DemoAntd</h3>
            <div className="App">
                <h1>antd version: {version}</h1>
                <DatePicker />
                <Button type="primary" style={{ marginLeft: 8 }}>
                    Primary Button
                </Button>
            </div>
        </div>
    )
}
