import React, { useState } from "react";
import { CircleX, FastForward } from 'lucide-react';
import Modal from "../Modal/Modal"

function Signup({closeSgnup}) {

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [passagn, setPassagn] = useState("")
    const [msg, setMsg] = useState("")

    const [openModal, setOpenModal] = useState(false)
    const HandleModal = () => {
        closeSgnup();
        //console.log("Signup closed")
        //setTimeout(() => {setOpenModal(true);}, 100);
        setOpenModal(true);
        //console.log("modal opened")
    }

    const CheckValue = () => {
        if (fname.length>0 && lname.length>0 && email.length>0 && pass.length>0 && passagn.length>0){
            if (pass==passagn){
                setMsg(`Welcome ${fname} ${lname}`)
                setTimeout(() => {closeSgnup();}, 1500);
            } else {
                setMsg("Passwords do not match!")
            }
        } if (fname.length==0 || lname.length==0 || email.length==0 || pass.length==0 || passagn.length==0)
            {
            setMsg("Kindly fill all the fields")
        } 
    }

    return ( 
        <div className="fixed inset-0 backdrop-blur-md bg-opacity-30 flex items-center bg-slate-900">
            <div className="flex flex-col w-[420px] md:w-[600px] mx-auto justify-center items-center">

                <button onClick={closeSgnup} className="place-self-end"><CircleX size={30} color="white"/></button>

                <div className="bg-purple-600 bg-opacity-60 md:w-[500px] backdrop-blur-md text-white p-16 rounded-md font-semibold">
                  <div className="flex flex-col gap-4">

                    <p className="text-2xl place-self-center">SignUp</p>

                    <div className="flex flex-col gap-2">
                    <label>First Name <span className="text-red-700 font-extrabold">*</span></label>
                    <input 
                    type="text"
                    placeholder="enter your first name"
                    value={fname}
                    required
                    onChange={(e)=>{setFname(e.target.value)}}
                    className="text-black rounded-md px-2" /></div>

                    <div className="flex flex-col gap-2">
                    <label>Last Name <span className="text-red-700 font-extrabold">*</span></label>
                     <input 
                     type="text"
                     placeholder="enter your last name"
                     value={lname}
                     required
                     onChange={(e)=>{setLname(e.target.value)}}
                     className="text-black rounded-md px-2" /></div>
                     
                     <div className="flex flex-col gap-2">
                     <label>Email <span className="text-red-700 font-extrabold">*</span></label>
                     <input 
                     type="email"
                     placeholder="enter your email"
                     value={email}
                     required
                     onChange={(e)=>{setEmail(e.target.value)}}
                     className="text-black rounded-md px-2" /></div>
                     
                     <div className="flex flex-col gap-2">
                     <label>Create Password <span className="text-red-700 font-extrabold">*</span></label>
                     <input 
                     type="password"
                     placeholder="enter your password"
                     value={pass}
                     required
                     onChange={(e)=>{setPass(e.target.value)}}
                     className="text-black rounded-md px-2" /></div>
                     
                     <div className="flex flex-col gap-2">
                     <label>Confirm Password <span className="text-red-700 font-extrabold">*</span></label>
                     <input 
                     type="password"
                     placeholder="enter your password again"
                     value={passagn}
                     required
                     onChange={(e)=>{setPassagn(e.target.value)}}
                     className="text-black rounded-md px-2" /></div>

                     <button className="bg-purple-400 text-purple-900 mt-4 hover:text-white hover:ring-2 ring-white rounded-3xl font-bold py-2 px-5 mx-auto" onClick={CheckValue}>SIGNUP</button>
                     
                     <div className="text-center space-y-1">
                        <p className="text-white">Already have an account?</p> 
                        <button onClick={HandleModal} className="text-white hover:text-black">LogIn instead</button>
                    </div>

                     <div>
                        {openModal && <Modal onClose={()=>setOpenModal(false)}/>}
                     </div>
                     
                     <p className="text-center">{msg}</p>
                  </div>
                </div>
            </div>
        </div>
     );
}

export default Signup;