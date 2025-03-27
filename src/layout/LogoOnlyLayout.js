import React from 'react'
import { Link as RouterLink, Outlet } from 'react-router-dom';
export default function LogoOnlyLayout() {
  return (
    <>
      <RouterLink to="/dashboard"></RouterLink>
      <Outlet />
    </>
  )
}
