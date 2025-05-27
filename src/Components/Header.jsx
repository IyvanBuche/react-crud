import React from 'react'

function Header() {
    return (
        <>
            <header className='flex justify-between items-center p-6 bg-black text-white mb-13 border-b border-green-500 '>
                <h1>CARGO <span className='text-[10px] text-orange-500'>Ltd.</span></h1>
                <nav className='flex gap-10 capitalize'>
                    <a className='hover:text-orange-200  hover:font-bold' href="/dashboard">dashboard</a>
                    <a className='hover:text-orange-200  hover:font-bold' href="/furniture">furniture</a>
                    <a className='hover:text-orange-200  hover:font-bold' href="/import">import</a>
                    <a className='hover:text-orange-200  hover:font-bold' href="/export">export</a>
                    <a className='hover:text-orange-200  hover:font-bold' href="/report">report</a>
                </nav>
                <a className=' p-2 uppercase text-white bg-black rounded-md hover:text-black hover:font-bold hover:bg-white' href="">logout</a>
            </header>

        </>
    )
}

export default Header
