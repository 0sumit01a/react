import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full flex shrink-0 w-75 relative overflow-hidden rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="img" />
      <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard
