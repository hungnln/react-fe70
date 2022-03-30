import React, { memo } from 'react'

function ChildComponent(props) {
    console.log('childen com render');
    return (
        <div>
            <h3>ChildComponent</h3>
            <h3>Number child: {props.number}</h3>

        </div>
    )
}
export default memo(ChildComponent)
