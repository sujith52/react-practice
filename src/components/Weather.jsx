import React from 'react'

const Weather = () => {
  let temp = 15

  if (temp < 15) {
    return <h1>It was very cold inside bro</h1>
  } else if (temp >= 15 && temp <= 25) {
    return <h1>it was nice outside</h1>
  }else if (temp > 25) {
    return <h1>it was hot outside </h1>
  }
}

export default Weather