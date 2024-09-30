import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex  items-center justify-between flex-wrap gap-5' >

      <div className='text-white-500 flex gap-2'>
        <p> Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>

      </div>

      <div className='flex gap-3 justify-center items-center'>
        <div className='social-icons'>
            <a href="https://github.com/nileshchouhan09" target='_blank'>
            <img src="/assets/github.svg" alt="github" className='w-6 h-6' />
            </a>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/nilesh-chouhan-491768216/" target='_blank'>
            <img src="/assets/linkedin.png" alt="github" className='w-8 h-8' />
            </a>
        </div>
       
      </div>
      <p className='text-white-500'>© 2024 Nilesh Chauhan. All rights reserved.</p>
    </section>
  )
}

export default Footer
