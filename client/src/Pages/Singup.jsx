import React from 'react'
import {Link} from 'react-router-dom'
export default function Singup() {
  return (
    <div className='p-3 max-w-lg mx-auto' >
<h1 className='text-3xl text-center font-bold my-7 '>Sing up</h1>

<form className='flex flex-col  gap-4'>
  <input className='bg-slate-100 p-3 rounded-lg' type='text' placeholder='Usernname' id='username'/>
  <input className='bg-slate-100 p-3 rounded-lg' type='text' placeholder='Email' id='email'/>
  <input className='bg-slate-100 p-3 rounded-lg' type='password' placeholder='Password' id='password'/>
  <button  className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-60'>Sing up</button>
</form>
<div className='flex gap-3 mt-5'>
<p>Have an account ?</p>
<Link to='/singin'>
<span className='text-blue-500'>Sign In</span>
</Link>

</div>

</div>


  )
}
