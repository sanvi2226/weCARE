import React, { useState } from "react";
import { CircleX } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { KeyRound } from 'lucide-react';

function Modal({onClose}) {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    


    const CheckValue = () => {
        if (user.length>0 && password.length>0){
            setMsg(`Welcome ${user}`)
            setTimeout(() => {
                onClose();
            }, 1500);
        } else {
            setMsg("Invalid credentials")
        }
    }

    return ( 
        <div className="fixed inset-0 backdrop-blur-md bg-opacity-30 flex items-center bg-slate-900">
            <div className="flex flex-col w-[30%] mx-auto justify-center items-center">

                <button onClick={onClose} className="place-self-end"><CircleX size={30} color="white"/></button>

                <div className="bg-purple-600 bg-opacity-60 backdrop-blur-md text-white p-16 rounded-md font-semibold">
                  <div className="flex flex-col gap-4">

                    <p className="text-2xl place-self-center">LogIn</p>

                    <div className="flex gap-2"><CircleUserRound />
                    <input 
                    type="text"
                    placeholder="enter your username"
                    value={user}
                    required
                    onChange={(e)=>{setUser(e.target.value)}}
                    className="text-black rounded-md px-2" /></div>

                    <div className="flex gap-2"><KeyRound />
                     <input 
                     type="password"
                     placeholder="enter your password"
                     value={password}
                     required
                     onChange={(e)=>{setPassword(e.target.value)}}
                     className="text-black rounded-md px-2" /></div>

                     <button className="bg-purple-400 text-purple-900 hover:text-white hover:ring-2 ring-white rounded-3xl font-bold py-2 px-5 mx-auto" onClick={CheckValue}>LOGIN</button>
                     <p className="text-center">{msg}</p>
                  </div>
                </div>
            </div>
        </div>
     );
}

export default Modal;