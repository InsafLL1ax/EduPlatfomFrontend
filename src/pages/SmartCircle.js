import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar } from '../components/SideBar/SideBar'

export const SmartCircle = () => {
  return (
    <div className='courseWrapper'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}