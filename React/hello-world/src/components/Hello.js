import React from 'react'
const Hello=()=>{
   /* return (
        <div class name='dummyClass'>
            <h1>Hello Sumitra</h1>
        </div>
    )*/
    return React.createElement('div',
    {id:'hello',className:'dummyClass'}
    ,React.createElement('h1',null,'Hello Sumitra Shrestha'))
    
}
export default Hello