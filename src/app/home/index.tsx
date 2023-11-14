'use client'
import Laptop from '@/app/home/Laptop';
function Home() {
    return (
        <main className="flex calc(100vh-70px) flex-col items-center w-full m-auto">
          <div className='flex h-500px w-full'>
            <div className='w-full'>
                <Laptop></Laptop>
            </div>
          </div>
          <div className='bg-dark min-h-297px text-white w-full flex justify-around items-center'>
            <div className='flex w-1080px m-auto items-center h-full'>
              <div className='flex h-full'>
                <h2 className='text-56px leading-58px'>
                  Welcome to Pribadi1st
                </h2>
              </div>
              <p className='text-16px leading-30px'>
                Take your time, enjoy the journey, and thank you for being a part of this digital adventure with me.
              </p>
            </div>

          </div>
        </main>
    )
}

export default Home;