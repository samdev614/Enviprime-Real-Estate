import React from 'react'
import {Link} from "react-router-dom"

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' />
        <input type="text" placeholder='email' className='border p-3 rounded-lg' id='email' />
        <input type="text" placeholder='password' className='border p-3 rounded-lg' id='password' />
        <button className='bg-sky-700 text-white p-3 rounded-lg uppercase hover:bg-slate-500 disabled:opacity-75'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to= {"/sign-in"}>
        <span className='text-blue-800'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp