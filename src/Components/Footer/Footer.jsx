import React from "react";
import {Link, NavLink} from 'react-router-dom';
function Footer() {
    return ( 
   <div>
      
    <div className="bg-purple-950 h-full">

     <div className="bg-purple-950 mx-auto p-7 space-y-2 md:flex ">
      
       <div className="mx-auto text-center">
         <h1 className="text-white text-4xl font-bold">weCARE</h1>
         <img className=" mx-auto size-40" src="https://cdn.pixabay.com/photo/2022/12/26/16/02/social-media-icons-7679299_960_720.png" alt="social" />
       </div>

       <div className="mx-auto text-center md:text-left md:flex">
         <ul>
            <li className="text-white text-lg font-bold ">About Us</li>
            <NavLink to="/blogs" ><li className="text-white text-lg hover:underline cursor-pointer">Blogs</li></NavLink>
            <li className="text-white text-lg hover:underline cursor-pointer">Our Team</li>
            <li className="text-white text-lg hover:underline cursor-pointer">Privacy Policy</li>
            <li className="text-white text-lg hover:underline cursor-pointer">Terms & Conditions</li>
         </ul>
       </div>

       <div className="mx-auto text-center md:text-left md:flex">
         <ul>
           <li className="text-white text-lg font-bold ">Connect With Us</li>
           <li className="text-white text-lg hover:underline cursor-pointer">Feedback</li>
           <li className="text-white text-lg hover:underline cursor-pointer">Review</li>
           <li className="text-white text-lg hover:underline cursor-pointer">Contact Us</li>
         </ul>
       </div>

     </div>
    </div>

  </div>
     );

}

export default Footer;