import React, { useState } from 'react'

function Regisration() {
  const [name , setName]=useState()

    function getData(){
        alert("hello inside get data");
    }


  return (
    <div>Registration
        <form>
            <label>Enter Name:</label><input type='text' onChange={(e)=>setName(e.target.value)}/>
        <button onClick={getData}>Click Me</button>
        {name}
        </form>
    </div>
  )
}

export default Regisration