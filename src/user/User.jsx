import React,{useState} from 'react'
// import axios from "axios"
import {Navigate, useNavigate, useParams } from "react-router-dom";

function User() {

  const [password, setpassword] = useState("");
  const [user, setuser] = useState("");

  const navigate=useNavigate();


  const proceedlogin = (e) => {
    e.preventDefault();
    try {
      
      }catch(err){
         
        };
    
  };

  return (
    <>
    <section className="  bg-gray-50  flex items-center justify-center">
 
  <div className=" bg-slate-100  mt-7 mb-7 flex rounded-2xl shadow-lg max-w-xl p-3 items-center">
 
    <div className="md:w-1/2 px-8 md:px-16">
      <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>


     <form className="flex flex-col gap-3">
     <input className=" bg-slate-300 p-2 mt-8 rounded-xl border"   onChange={(e) => setuser(e.target.value)} type="text" name="admin" placeholder="UserName"/> 

     <input className="  bg-slate-300 p-2 mt-8 rounded-xl border"   onChange={(e) => setpassword(e.target.value)} type="password" name="password" placeholder="Password"/> 
     
        <button  onClick={()=>{
          navigate('/show');
        }} className="  p-2 mt-8  border bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
      </form>

      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400"/>
        <p className="text-center text-sm"></p>
        <hr className="border-gray-400"/>
      </div>
    </div>
    

   
    <div className="md:block hidden w-1/2">
      <img className="rounded-2xl" src="https://i.pinimg.com/736x/40/9e/84/409e840cadae9555d1c40f4c5d29c0fd.jpg"/>
    </div>
  </div>
</section>
    </>
  )
}

export default User