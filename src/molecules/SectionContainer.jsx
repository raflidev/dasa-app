import React from 'react'

function SectionContainer(props) {
  return (
    <div className='flex justify-center font-roboto'>
      <div className='w-full max-w-2xl p-4'>
        
        {props.children}
      </div>
    </div>
  )
}

export default SectionContainer