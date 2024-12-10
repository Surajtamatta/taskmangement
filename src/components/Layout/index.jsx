import React from 'react'
import Navbar from '../Navbar'
import Advertize from '../Advertize'

const Layout = ({children}) => {
  return (
    <div className='w-full bg-white'  >
        <Navbar/>
        <Advertize/>
        <main className=' w-full mt-8 p-6 '>
            {
                children
            }
        </main>
    </div>
  )
}

export default Layout