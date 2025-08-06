import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import Modal from '../Modal/Modal';
import Dropnav from '../Modal/Dropnav';

function Header() {
  const [showModal, setShowModal] = useState(false)
  const [showDropnav, setShowDropnav] = useState(false)

  const handleDropnav = () => {
    setShowDropnav(prevState=>!prevState);
  }
  
    return ( 
      
     <div className=" bg-purple-200 h-full">
      {showModal && <Modal onClose={()=>setShowModal(false)}/>}
      {/* --- nav bar code starts here --- */}
      <nav className=" w-full h-14 text-white bg-purple-950 px-4 flex justify-between items-center">
        <div className=" font-bold text-2xl text-white">weCARE</div>
        <ul className="hidden md:flex">
          <li className="relative px-6 block cursor-pointer mx-[10px]">
            <NavLink to="/" className={({isActive}) => `${isActive ? "text-purple-300" : "text-white"}`}>
              Home</NavLink>
          </li>
          <li className="relative px-6 block cursor-pointer mx-[10px]">
            <NavLink to="/about" className={({isActive}) => `${isActive ? "text-purple-300" : "text-white"}`}>
              About</NavLink>
          </li>
          <li className="relative px-6 block cursor-pointer mx-[10px]">
            <NavLink to="/blogs" className={({isActive}) => `${isActive ? "text-purple-300" : "text-white"}`}>
              Blogs</NavLink>
          </li>
          <li className="relative px-6 block cursor-pointer mx-[10px]">
            <NavLink to="/contactus" className={({isActive}) => `${isActive ? "text-purple-300" : "text-white"}`}>
              Contact Us</NavLink>
          </li>
        </ul>
        
        <button onClick={()=>setShowModal(true)} className="hidden md:block cursor-pointer md:bg-purple-300 md:text-purple-900 hover:text-white md:rounded-3xl md:px-5 md:py-2 text-md p-3 font-semibold">Login</button>
        <div className="md:hidden hover:text-purple-300 absolute top-0 right-4">
          <a onClick={handleDropnav} className="text-5xl" href="#">&#8801;</a>
        </div>

        <div className="md:hidden block ">
          {showDropnav && <Dropnav />}
        </div>
        
      </nav>
      {/* --- nav bar code ends here --- */}
     </div>
     );
}

export default Header;