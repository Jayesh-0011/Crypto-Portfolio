import React from 'react'
import { useState } from 'react';

const Heading = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    alert("You wallet has been connected")
    setClicked(!clicked);
  };
  return (
    <div className="flex items-center justify-center p-4 m-3 ">
      <h1 className="text-3xl font-bold text-center">
        Crypto Portfolio Dashboard
      </h1>
      <div className='fixed ml-[1300px]'>
        <button
          onClick={handleClick}
          disabled={clicked}
          style={{
            backgroundColor: clicked ? 'green' : 'blue',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: clicked? 'not-allowed':'pointer'
            
          }}
        >
          {clicked ? 'Connected' : 'Connect'}
        </button>
      </div>
    </div>

  )
}

export default Heading
