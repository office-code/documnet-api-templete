import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header'
export default function Dashboard() {
    return (
        <>
            <div className='main-page-ui'>
                <div className='flex-container'>
                    <div className='sidebar'>
                        <Sidebar />
                    </div>
                    <div className='outlet'>
                        <Header />
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
