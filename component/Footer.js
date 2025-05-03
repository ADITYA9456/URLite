import React from 'react'
import Link from 'next/link'
const Footer = () => {
return (
    <footer className='bg-gradient-to-r from-purple-200 to-pink-700 p-5 '>
        <div className='main'>
            <div className='font-bold text-center '>
                All rights reserved &copy; URL<span className=' text-purple-900 font-bold'>ite</span>  {new Date().getFullYear()}
            </div>
        </div>
    </footer>
)
}

export default Footer
