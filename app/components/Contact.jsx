import React from 'react'

export const Contact = () => {
  return (
      <footer className="py-15">
        <h2 className="font-semibold text-center text-5xl lg:text-6xl text-green-800">Come And Be Blessed</h2>
        <div className="max-w-7xl mx-auto px-5 py-10 grid md:grid-cols-2 gap-10">
          <div className="bg-gray-400 content-center text-center p-10">MAP</div>
          <div className="bg-gray-400 p-10 text-center">
            <p>Address: Address Details</p>
            <p>Contact: Phone Number, Email</p>
          </div>
        </div>
      </footer>
  )
}
