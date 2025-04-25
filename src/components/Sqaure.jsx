import React from 'react'

const Sqaure = ({value, Onclick}) => {
  return (
    <div className='square border-2 border-black border-solid h-24 w-[100%] flex justify-center items-center' onClick={Onclick}>
        <h5>{value}</h5>
    </div>
  )
}

export default Sqaure