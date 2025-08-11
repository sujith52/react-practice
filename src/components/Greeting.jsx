import React from 'react'

const Greeting = () => {
    const Greet = "Hello people "
    const date = new Date()
  return (
    <div>
        <h1>Hello my freind Greetings?? <br />{Greet}</h1>
        <p>date : 08-08-2025 <br />{date.getDate()}</p>
    </div>
  )
}

export default Greeting