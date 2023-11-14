import { FC } from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="flex top-0 h-min-70px w-full bg-gradient-to-b  border-b-black border-b-0.5px">
            <div className='w-1080px flex m-auto items-center justify-between'>
                <Link
                    href={'/'}
                >
                    <h1 className='header-1'>
                        Pribadi1st
                    </h1>
                </Link>
                <div className='flex gap-10px '>
                    <Link
                        href='journey'
                        className='p-10px rounded text-16px leading-30px hover:bg-gray-200 hover:cursor-pointer'
                    >
                        My journey
                    </Link>
                    <Link
                        href='skills'
                        className='p-10px rounded text-16px leading-30px hover:bg-gray-200 hover:cursor-pointer'
                    >
                        My Skills
                    </Link>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar
