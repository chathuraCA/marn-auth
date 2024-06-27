import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { signInStart,singInSuccess,signInFailure } from "../redux/user/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function Singup() {
  const [formData, setFormData] = useState({});
  const{loading,error}=useSelector((state)=>state.user);


const navigate=useNavigate();
const dispatch=useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
 const handleSubmit=async(e)=>{
  e.preventDefault();
  try{
    dispatch(signInStart());
    const res=await fetch('/api/auth/singin',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    });
    const data=await res.json();
    dispatch(singInSuccess(data));
    if(data.success===false){
      console.log(data.message);
      dispatch(signInFailure(data));
      return;
    }
     dispatch(singInSuccess(data));
    navigate('/');
    
  }catch(error){
    
    dispatch(signInFailure(error));
    
  }

 }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7 ">Sing In</h1>

      <form onSubmit={handleSubmit}className="flex flex-col  gap-4">
   
        <input
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          type="text"
          placeholder="Email"
          id="email"
        />
        <input
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          id="password"
        />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-60">
        {loading ?'Loading...':'Sing up'}
        </button>
      </form>
      <div className="flex gap-3 mt-5">
        <p>Dont have an account ?</p>
        <Link to="/singup">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
      <p className="text-red-500 m-3">{error ? error.message|| 'Something went wrong':''}</p>
    </div>
  );
}
