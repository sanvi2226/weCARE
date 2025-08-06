import React from "react";
import { Link, NavLink } from "react-router-dom";

function Dropnav() {
    return ( 
        <div className=" absolute right-0 top-14">
            <div className="bg-purple-950 flex flex-col">
                <NavLink to="/">
                    <p className="hover:bg-purple-700 text-white font-semibold text-left p-4">Home</p>
                </NavLink>

                <NavLink to="/about">
                    <p className="hover:bg-purple-700 text-white font-semibold text-left p-4">About</p>
                </NavLink>

                <NavLink to="/blogs">
                    <p className="hover:bg-purple-700 text-white font-semibold text-left p-4">Blogs</p>
                </NavLink>

                <NavLink to="#">
                    <p className="hover:bg-purple-700 text-white font-semibold text-left p-4">Contact Us</p>
                </NavLink>
            </div>
        </div>
     );
}

export default Dropnav;
