'use client'
import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";
export default function SignUp() {
    const [AuthType, setAuthType] = useState('login');
    const [showPassword, setShowPassword]=useState(false);
    const [message, setMessage]=useState('');
    const handleSignIn=(e)=>{
        e.preventDefault();
        const fromData= e.target.elements;
        const email = fromData.email.value;
        const password = fromData.password.value;
        console.log("email: ", email, "password: ", password);
    }
    const handleSignUp=(e)=>{
        e.preventDefault();
        const fromData= e.target.elements
        const username = fromData.username.value;
        const email = fromData.email.value;
        const password = fromData.password.value;
        console.log("username: ",username,"email: ", email, "password: ", password);
    }
    return (
        <div className="flex h-screen flex-wrap items-center justify-around w-full mx-auto">
            <img src="/getstarted.png" alt="image" className="hidden lg:block lg:w-[40%]" />
            <div className="w-[80%] lg:w-[40%] p-10">
                <div className=" m-auto max-w-96 flex justify-center flex-col">
                    <h1 className="font-sans font-extrabold text-4xl text-left mb-5">{AuthType == 'login' ? "Sign In" : "Sign Up"}</h1>
                    <form onSubmit={(e)=>AuthType=='login'? handleSignIn(e) : handleSignUp(e) }>
                    {AuthType !== 'login' && <input name="username" type="text" placeholder="Username" className="border border-gray-300 rounded-md p-2 w-full outline-none mb-2" />}
                    
                    <input name="email" type="email" placeholder="xyz@gmail.com" className="border border-gray-300 rounded-md p-2 w-full outline-none mb-2" />
                    <div className="flex items-center border border-gray-300 rounded-md w-full mb-1 px-2 ">
                        <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" className="flex-1 outline-none border-none py-2" />
                        {!showPassword && <IoEyeOff onClick={()=>setShowPassword(true)} className="text-2xl text-gray-300 mr-1"/>}
                        {showPassword && <IoEye onClick={()=>setShowPassword(false)} className="text-2xl text-gray-300 mr-1"/>}
                    </div>
                    { message && <p className="text-sm text-center text-red-500 italic">{message}</p> }
                     <button className="bg-yellow-400 w-full font-sans font-semibold text-black text-center py-2 px-5 m-auto rounded-md mt-3 hover:opacity-80 hover:shadow-sm hover:shadow-blue-200">
                        {AuthType=='login'? 'Sign In' : 'Sign Up'}
                    </button>
                    </form>
                    
                    <p className="text-gray-400 text-sm flex items-center justify-center gap-2 mt-2">
                        <span className="block w-full h-px bg-gray-300"></span>
                        or
                        <span className="block w-full h-px bg-gray-300"></span>
                    </p>
                    <div className="flex justify-between w-full">
                        <button className="w-[150px] md:w-[170px] lg:w-[180px] bg-gray-300 font-sans font-medium text-black text-center py-2 px-5 rounded-md  hover:opacity-80 hover:shadow-md hover:shadow-blue-200">
                            Google
                        </button>
                        <button className="w-[150px] md:w-[170px] lg:w-[180px] bg-gray-300 font-sans font-medium text-black text-center py-2 px-5 rounded-md hover:opacity-80 hover:shadow-md hover:shadow-blue-200">
                            Facebook
                        </button>
                    </div>
                    <p className="font-sans font-semibold text-xs text-gray-400 m-auto mt-2">
                        {AuthType == 'login' ? "Don't have an account?" : "Already have an account?"}
                        <button onClick={()=>setAuthType(AuthType == 'login' ? 'signUp' : 'login')} className="underline text-black hover:text-gray-400 ml-1">{AuthType =='login' ? 'Sign Up' :'Sign In' }</button>
                        
                    </p>
                </div>
            </div>
        </div>
    )
};