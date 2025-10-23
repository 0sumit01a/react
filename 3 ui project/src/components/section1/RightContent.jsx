import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-5 flex flex-nowrap gap-10 w-2/3 rounded-4xl overflow-x-auto'>
      {/* {props.users.map((user,index)=>(
        <RightCard key={index} img={user.img} intro={user.intro} tag={user.tag}/>
      ))} */}
     {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}  />
     })}
    </div>
  )
}

export default RightContent
