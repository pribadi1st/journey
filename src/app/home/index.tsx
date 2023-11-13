'use client'
import Laptop from '@/app/home/Laptop';
function Home() {
    return (
        <main className="flex calc(100vh-70px) flex-col items-center w-full m-auto">
          <div className='flex h-500px w-full'>
            <div
              className='flex-initial w-30%'
              style={{
                backgroundImage: `url(/my-life.jpeg)`,  // coming from public folder
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "50%",
                height: "100%",
              }}
            />
            <div className='w-full'>
                <Laptop></Laptop>
            </div>
            {/* <blockquote className='text-18px flex item-center flex-col justify-center'>
              <span className='italic '>Etch your story in the annals of time, for life is but a stage, and you, the masterful playwright.</span>
              <span className='italic text-14px'>- Shakespear</span>
            </blockquote> */}
          </div>
          <div className='p-24px leading-28px text-center bg-#AFDCEC min-h-215px'>
            <p>
                I`m delighted to have you step into the virtual realm that is my personal website.
                Here, you will find a curated collection of my passions, endeavors, and creative musings.
                Your presence is more than just a click; it is an exploration into the various facets of who I am and what I love.
            </p>
    
            <p>
                Feel at home as you navigate through the pages, from insightful blog posts to showcased projects.
                This is not just a website; it`s a dynamic space where ideas flourish, and connections are made.
                Your curiosity is the key, and I invite you to unlock the doors to inspiration.
            </p>
    
            <p>
                Welcome, explorer! Take your time, enjoy the journey, and thank you for being a part of this digital adventure with me.
            </p>
          </div>
        </main>
    )
}

export default Home;