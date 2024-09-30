import React from 'react'
import { navLinks } from '../constant'



const NavItems = () => {
  return (
   <ul className='nav-ul'>
    {
        navLinks.map((link)=>(
            <li key={link.id}>
                <a href={link.href} className='nav-li'>{link.name}</a>
            </li>
        ))
    }
   </ul>
  )
}

export default NavItems
