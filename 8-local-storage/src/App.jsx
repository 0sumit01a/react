import React from 'react'

const App = () => {

  const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
  }

  localStorage.setItem('user', JSON.stringify(user))

  const u = localStorage.getItem('user')
  console.log(typeof(u))
  console.log(JSON.parse(u))
  return (
    
    <div>
      hello
    </div>
  )
}

export default App
