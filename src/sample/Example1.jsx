import React from 'react'

const Example1 = () => {
    const exampl1 = [
        {id:1,name:"Sujith kumar yadav", hobby:"reading novels"},
        {id:2,name:"latha",hobby:"making meme based jokes"},
        {id:3,name:"sreevan",hobby:"chatting and breaking hearts "}
    ]
  return (
    exampl1.map((ex1) => (
        <div key={ex1.id}>
            <h1>Id : {ex1.id}</h1>
            <h1>Name : {ex1.name}</h1>
            <h1>Hobbies : {ex1.hobby}</h1>
        </div>
    ))
  )
}

export default Example1