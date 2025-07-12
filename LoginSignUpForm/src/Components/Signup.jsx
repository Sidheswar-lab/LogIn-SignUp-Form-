import React from 'react'
import { Link } from 'react-router'

export const Signup = () => {
  return (
    <div>Signup
      <Link to='/login' className='text-3xl text-black'>
        Log in
      </Link>
    </div>
  )
}
