import React from 'react'

const Greet = (props) => {
    return props.isday === "morning" ? ( <h1>This is morning</h1>) : ( <h1>This is afternon</h1>)
}

export default Greet