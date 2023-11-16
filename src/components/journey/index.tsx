import Image from "next/image"

interface IStory {
    image?: string
    story: string
    date?: string
    title?: string
    quote?: string
}
function Story({story, quote}: {story?: IStory; quote?: string}){
    return (
        <div className="flex w-full fade-in">
            <div className="flex-initial w-180px relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className="rounded-full w-100px h-100px of-hidden relative border-1">
                        {!!quote ? (
                            <div className="rounded-full w-100px h-100px of-hidden relative bg-#353535 flex items-center justify-center">
                                <span className="text-45px text-#ffd700">&ldquo;</span>
                            </div>
                        ) : <Image 
                        className="bg-white"
                        src={story?.image ?? ''} 
                        alt={story?.title ?? ''} 
                        fill
                        objectFit="scale-down"
                    />}
                    </div>
                </div>
            </div>
            <div className="flex-auto max-w-70% bg-white rounded-4px flex flex-col p-25px gap-10px m-y-25px">
                {quote ? (
                    <q className="text-13px">
                    {quote}
                    </q>
                ) : (
                <>
                    <span className="border-b-0.5px border-black text-15px">
                        {story?.date ?? ''}
                    </span>
                    <span className="text-13px">
                        {story?.story}
                    </span>
                </>
                )}
            </div>
        </div>
    )
}

function QuoteComponent(){
    return (
        <div className="flex-initial w-360px bg-#353535 flex flex-col gap-60px items-center rounded-l-8px justify-center p-35px max-h-30%">
            <span className="text-45px text-#ffd700">&ldquo;</span>
            <span className="text-15px font-serif text-white">A life well-lived is a drama well-played; may your scenes be rich, your acts profound, and your legacy enduring.</span>
            <span className="text-15px font-serif text-white">With each dawn, script a new act; let the curtains rise on a narrative that transcends the ordinary.</span>
            <span className="text-45px text-#ffd700">&rdquo;</span>
        </div>
    )
}

function Journey({className = ''}){
    const stories: IStory[] = [{
        date: '12-08-2014',
        story: 'I started my journey as a student in Bina Nusantara University',
        image: 'https://rekreartive.com/wp-content/uploads/2018/10/Logo-Binus-University-Universitas-Bina-Nusantara-Original-PNG.png'
    }, {
        date: '01-02-2016',
        image: '/slc.jpeg',
        story: 'After 1 semester of my studies, i applied and got accepted as a teaching assistant in my university',
        title: 'Teaching Assistant | Bina nusantara university',
        quote: 'I was excited to be able to teach and share my knowledge to students'
    }, {
        date: '01-02-2017',
        story: 'In my fifth semester, i join researcher team in my university',
        image: '/pajero.jpeg',
        title: 'Junior researcher | Bina nusantara university',
        quote: 'A lot of new things i learned from this experience, especially in the field of AI'
    }, {
        date: '01-07-2018',
        story: 'I got my first job as a mobile engineer in a startup company',
        image: 'https://media.licdn.com/dms/image/C560BAQGTngESjenkgw/company-logo_200_200/0/1630663513759/airpaz_com_logo?e=1707955200&v=beta&t=dyGhDd5Y2XQ-aO7_NxAtdnQ8nP9uLzBu-phUa9O-2WE',
        title: 'Mobile Engineer | Airpaz.com',
        quote: 'This open a new page in my life.'
    },{
        date: '01-11-2018',
        story: 'Horray, i graduated from my university',
        image: '/wisuda.jpeg'
    }, {
        date: '01-01-2019',
        story: 'Shifting my career from mobile engineer to front end engineer',
        title: 'Front end Engineer | Airpaz.com',
        image: 'https://media.licdn.com/dms/image/C560BAQGTngESjenkgw/company-logo_200_200/0/1630663513759/airpaz_com_logo?e=1707955200&v=beta&t=dyGhDd5Y2XQ-aO7_NxAtdnQ8nP9uLzBu-phUa9O-2WE',
    }, {
        date: '01-03-2020',
        story: 'Flew to Germany to pursue my dream',
        image: '/germany.png',
    }, {
        date: '01-01-2023',
        story: 'Here i am, working as a fullstack engineer and devOps in a startup company',
        title: 'Full stack & DevOps | Hyrd.de',
        image: 'https://media.licdn.com/dms/image/C560BAQEamhjRwbvjWw/company-logo_100_100/0/1644670558769/gethyrd_logo?e=1707955200&v=beta&t=sAF4USApyCevv_EFPgU_D77LL9qZNAQdByMLNJkwFH8'
    }]
    return (
        <div className={`${className} w-full flex relative`}>
            <Image className="-z-1" src="/autumn-background.jpeg" layout="fill" objectFit="cover" alt="background"/>
            <div className="flex-auto flex flex-col items-center">
                <div className="border-b-1px p-20px border-black ">
                    <span className="text-20px">My Journey</span>
                </div>
                <div className="flex flex-col p-50px w-full">
                    {stories.map((story, index) => {
                        return (
                            <>
                                <Story key={index} story={story}/>
                                {story.quote && <Story key={`${index}_quote`} quote={story.quote}/>}
                            </>
                        )
                    })}
                </div>
            </div>
            <QuoteComponent />
        </div>
    )
}

export default Journey