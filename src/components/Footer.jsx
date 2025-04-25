import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer className='absolute bottom-0 right-0 left-0'>

  <div className="bg-indigo-700 py-4 text-gray-100">
    <div className="container mx-auto px-4">
      <div className="-mx-4 flex flex-wrap justify-between">
        <div className="px-4 w-full text-center sm:w-auto sm:text-left">
          Copyright © {new Date().getFullYear()} - Tic Tac Toe Game. 
        </div>
        <div className="px-4 w-full text-center sm:w-auto sm:text-left">
          Made with ❤️ by Zeeshan Ali Anjam.
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
