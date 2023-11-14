import { FC } from 'react'

const Navbar = () => {
    return (
        <nav className="flex top-0 h-min-70px w-full bg-gradient-to-b  border-b-black border-b-0.5px">
            <div className='w-1080px flex m-auto items-center justify-between'>
                <h1 className='header-1'>
                    Pribadi1st
                </h1>
                <div className='flex gap-10px '>
                    <div
                        className='p-10px rounded text-16px leading-30px hover:bg-gray-200 hover:cursor-pointer'
                    >
                        My journey
                    </div>
                    <div
                        className='p-10px rounded text-16px leading-30px hover:bg-gray-200 hover:cursor-pointer'
                    >
                        My Skills
                    </div>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar
