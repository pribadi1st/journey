import { FC } from 'react'

const Navbar = () => {
    return (
        <nav className="flex top-0 h-70px w-full bg-gradient-to-b p-24px  border-b-black border-b-0.5px">
            <div className='w-1080px flex m-auto justify-between'>
                <h1 className='header-1'>
                    My life my journey
                </h1>
                <div className='flex gap-10px '>
                    <div
                        className='p-10px rounded hover:bg-gray-200 hover:cursor-pointer'
                    >
                        My journey
                    </div>
                    <div
                        className='p-10px rounded hover:bg-gray-200 hover:cursor-pointer'
                    >
                        My Skills
                    </div>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar
