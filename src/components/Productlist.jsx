import React from 'react'

const Productlist = () => {
    const products = [
        {id:1, name:"Phone", price:"600"},
        {id:2, name:"Laptop", price:"12000"},
        {id:3, name:"Headphones", price:"1000"}
    ]
  return (
    products.map((pro) =>(
        <div key={pro.id}>
            <h1>Name :{pro.name}</h1>
            <h1>Price :{pro.price}</h1>
        </div>
    ))
  )
}

export default Productlist