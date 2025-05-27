import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import axios from 'axios'

function Dashboard() {

    const [manager, setManager] = useState(0);
    const [exports, setExports] = useState(0);


    useEffect(() => {
        axios.get("http://localhost:9090/manager/view").then((response) => {
            setManager(response.data.length)
        })
        axios.get("http://localhost:9090/export/view").then((response) => {
            setExports(response.data.length)
        })
    }, [])

    return (
        <>
            <Header />
            <h1 className='text-3xl  font-bold uppercase text-orange-300 ml-10'>Dashboard</h1>
            <br />
            <div className="flex gap-20 justify-around p-7">
                <div className='border p-4 rounded-md w-full mt-15 shadow-lg border-orange-100'>
                    <h1 className='font-bold uppercase text-orange-300'>furniture</h1>
                    <span className='text-end block text-5xl'>5</span>
                </div>

                <div className='border p-4 rounded-md w-full mt-15 shadow-lg border-orange-100 '>
                    <h1 className='font-bold uppercase text-orange-300'>import</h1>
                    <span className='text-end block text-5xl'>5</span>
                </div>

                <div className='border p-4 rounded-md w-full mt-15 shadow-lg border-orange-100 '>
                    <h1 className='font-bold uppercase text-orange-300'>export</h1>
                    <span className='text-end block text-5xl'>5</span>
                </div>

                <div className='border p-4 rounded-md w-full mt-15 shadow-lg border-orange-100 '>
                    <h1 className='font-bold uppercase text-orange-300'>user manager</h1>
                    <span className='text-end block text-5xl'>{manager}</span>
                </div>
            </div>

        </>
    )
}

export default Dashboard
