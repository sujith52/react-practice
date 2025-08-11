import React from 'react'

const Userstatus = (props) => {
  if (props.loggedin && props.isadmin) {
    return <h1>Welcome to the admin dashboard my lord emperor</h1>
  }else{
    return <h1>Welcome to web our loyal user bro!!</h1>
  }
}

export default Userstatus