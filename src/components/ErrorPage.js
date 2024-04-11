import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <h1>404 Not Found</h1>
      <NavLink to='/' >Back To HomePage</NavLink>
    </>
  )
}

export default ErrorPage