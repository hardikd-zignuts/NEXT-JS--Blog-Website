import React from 'react'

const about = () => {
  return (
    <>
    {/* use <style jsx global> for access global class */}
      <style jsx>
        {`
       .dummy{
        background-color:red;
       }
       `}
      </style>
      <div className='dummy'>
        About Page
      </div>
    </>
  )
}

export default about
