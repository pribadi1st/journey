import { FC } from 'react'

const Navbar = () => {
    return (
        <nav className="flex top-0 w-full h-70px items-center bg-gradient-to-b p-24px justify-between">
            <h1 className='header-1'>
                My life my journey
            </h1>
            <div className='flex gap-10px '>
                <div
                    className='p-10px rounded hover:bg-gray-200 hover:cursor-pointer'
                >
                    My Stories
                </div>
                <div
                    className='p-10px rounded hover:bg-gray-200 hover:cursor-pointer'
                >
                    My Skills
                </div>
            </div>
        </nav>
    )
}

export default Navbar
