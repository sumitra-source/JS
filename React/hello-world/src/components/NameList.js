import React from 'react'
import Person from './Person'

function NameList() {
    const names=['Bruce','Clark','Diana']
    {/*const persons=[
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:25,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:28,
            skill:'Vue'
        }
    ]
    const personList=persons.map(person=>(
        <Person key={person.name} person={person}></Person>
    ))*/}

    const nameList=names.map((name,index)=><h2 key={index}>{index}{name}</h2>)
    
    return <div>{nameList}</div>
    {/*
    const names=['Bruce','Clark','Diana']
    const nameList=names.map(name=><h2>{name}</h2>)
  return (
    <div>{
        nameList
    }
    </div>
  )
}*/}
}
export default NameList