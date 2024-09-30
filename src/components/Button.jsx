import { button } from 'leva'
import React from 'react'

const Button = ({name, isBeam=false, containerClass}) => {
  return (
   <button className={`${containerClass} relative flex items-center justify-center px-6 py-3 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 rounded-full border-2 border-white gap-3`}>
    {isBeam ? <span className='relative flex h-3 w-3'>
        <span className="btn-ping"/>
        <span className="btn-ping_dot"/>
    </span> : null}
    {name}
   </button>
  )
}

export default Button
