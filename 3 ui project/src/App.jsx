import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
   const users=[
    {img:"https://images.unsplash.com/photo-1712546852197-b279a870c926?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",intro:"",tag:"Satisfied"},
    {img:"https://images.unsplash.com/photo-1698755302257-435f4fd64fee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",intro:"",tag:"Underserved"}, 
    {img:"https://images.unsplash.com/photo-1657727534676-cac1bb160d64?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2008",intro:"",tag:"Underbanked"}
  ]
  return (
    <div >
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
