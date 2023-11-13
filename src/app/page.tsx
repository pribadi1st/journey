
import Navbar from '@/app/navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full m-auto">
      <Navbar />
      <div className='flex h-600px w-full'>
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
        <blockquote className='text-18px flex item-center flex-col justify-center'>
          <span className='italic '>Etch your story in the annals of time, for life is but a stage, and you, the masterful playwright.</span>
          <span className='italic text-14px'>- Shakespear</span>
        </blockquote>
      </div>
      <div className='p-24px leading-28px text-center bg-#AFDCEC'>
        <p>
            I'm delighted to have you step into the virtual realm that is my personal website.
            Here, you'll find a curated collection of my passions, endeavors, and creative musings.
            Your presence is more than just a click; it's an exploration into the various facets of who I am and what I love.
        </p>

        <p>
            Feel at home as you navigate through the pages, from insightful blog posts to showcased projects.
            This isn't just a website; it's a dynamic space where ideas flourish, and connections are made.
            Your curiosity is the key, and I invite you to unlock the doors to inspiration.
        </p>

        <p>
            Welcome, explorer! Take your time, enjoy the journey, and thank you for being a part of this digital adventure with me.
        </p>
      </div>
    </main>
  )
}
