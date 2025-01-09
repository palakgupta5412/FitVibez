import React from 'react'
import { useState } from 'react'
import { navLinks } from '../constants'

const NavItems = () => {
    return (<ul className="nav-ul">
        {navLinks.map(({id , href , name})=>(
            <li key={id} className="nav-li">
                <a className="nav-li_a" href={href} onClick={()=>{}}>{name}</a>
            </li>
        ))}
    </ul>)
}

const Navbar = () => {

    const [isOpen , setOpen] = useState(false) ;

    const toggle = () => setOpen(prevValue => !prevValue) ;

  return (
    <header className='fixed top-0 left-0 right-0 z-50  bg-black/90'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-5 mx-auto c-space'>
                <a href="/" className = "text-pink-500 font-bold text-3xl sm-font-semibold  hover:text-pink-700  transition-colors">
                    FitVibez
                </a>
                
                <button 
                    onClick={toggle} 
                    className="text-neutral-800 hover:text-white sm:hidden flex" 
                    aria-label='toggle'>
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="menu" className='w-8 h-8 text-neutral-800 hover:text-white' />
                </button>

                <nav className="sm:flex hidden">
                    <NavItems />
                </nav>
            </div>
        </div>
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <nav className='p-5'>
                <NavItems />
            </nav>
        </div>
    </header>
  )
}

export default Navbar 