import React, { useState } from 'react'
import NavItems from '../components/NavItems';





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }



  return (
    <header className=" fixed top-0 left-0 w-full z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-5 mx-auto c-space">

          <a href="/" className="text-xl font-bold text-neutral-400 hover:text-white transition-all">
            Nilesh
          </a>

          <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle Menu'>
            <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg" }alt="menu" className='w-5 h-5'/>
          </button>


        <nav className='sm:flex hidden'>
            <NavItems />
        </nav>

      

       
        </div>
      </div>

      {/* // mobile view */}
      <div className={` nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} transition-ease duration-400`}>
        <nav className='p-5'>
        <NavItems />
        </nav>


      </div>
    </header>
  )
}

export default Navbar
