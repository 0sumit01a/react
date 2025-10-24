import React, { useState } from 'react'

const App = () => {
  const[count,setCount]=useState(0);

 
  return (
     <div className="flex items-center justify-center h-screen bg-[#F5F8FF] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-16 left-20 w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-white bg-pink-400 border-r-[20px] border-r-transparent opacity-50"></div>
      <div className="absolute bottom-  0 left-0 bg-yellow-200 w-32 h-20 rounded-t-full"></div>
      <div className="absolute right-24 w-6 h-6 bg-yellow-400 rounded-full"></div>

      {/* Counter Card */}
      <div className="bg-white rounded-3xl shadow-lg p-8 w-64 flex flex-col items-center">
        {/* Counter display with gradient */}
        <div className="w-full h-40 bg-gradient-to-br from-yellow-200 to-green-200 rounded-2xl flex items-center justify-center text-5xl font-semibold text-black mb-6">
          {count}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="w-14 h-14 bg-gray-100 rounded-xl shadow text-2xl font-medium hover:bg-gray-200 transition"
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="w-14 h-14 bg-gray-100 rounded-xl shadow text-2xl font-medium hover:bg-gray-200 transition"
          >
            −
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
