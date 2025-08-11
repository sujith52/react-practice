import React from 'react'
import Welcomemessage from './components/Welcomemessage'
import JSXRules from './components/JSXRules'
import Greeting from './components/Greeting'
import ProductInfo from './components/ProductInfo'
import Ext1 from './sample/Ext1'
import UserList from './components/UserList'
import Productlist from './components/Productlist'
import Example1 from './sample/Example1'
import Person from './components/Person'
import Product from './components/Product'

const App = () => {
  return (
    <div>
       <Person name="Sujith kumar" age={22} />
       <Product name="Fan" price={56235} />
    </div>
  )
}

export default App