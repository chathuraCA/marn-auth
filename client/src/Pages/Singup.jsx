import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Singup() {
  const [formData, setFormData] = useState({});
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(false);
  



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
 const handleSubmit=async(e)=>{
  e.preventDefault();
  try{
    setLoading(true);
    const res=await fetch('/api/auth/singup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    });
    const data=await res.json();
    setLoading(false);
    if(data.success===false){
      setError(true);
      return;
    }
    setError(false);
  }catch(error){
    setLoading(false);
    setError(true);
  }

 }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7 ">Sing up</h1>

      <form onSubmit={handleSubmit}className="flex flex-col  gap-4">
        <input
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          type="text"
          placeholder="Usernname"
          id="username"
        />
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
        <p>Have an account ?</p>
        <Link to="/singin">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
      <p className="text-red-500 m-3">{error && 'Something went wrong'}</p>
    </div>
  );
}
