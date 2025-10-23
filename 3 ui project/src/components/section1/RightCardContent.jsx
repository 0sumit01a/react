import React from 'react'

const RightCardContent = (props) => {
  return (
   <div className='absolute top-0 left-0 h-full w-full  p-7 flex flex-col justify-between ' >
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold'>{props.id+1}</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-8 text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestiae ducimus in! Exercitationem, est autem?</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-7 py-2 rounded-full text-lg'>{props.tag }</button>
                    <button className='bg-blue-600 text-white font-medium px-4  py-2 rounded-full text-lg' ><i className='ri-arrow-right-line'></i></button>
                </div>
            </div>
      </div>
  )
}

export default RightCardContent
