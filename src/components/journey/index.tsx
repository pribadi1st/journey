import Image from "next/image"

interface IStory {
    image?: string
    story: string
    date?: string
    title?: string
    quote?: string
}
function Story({story, quote}: {story?: IStory; quote?: string}){
    if(!!quote) return (
        <div className="flex w-full">
            <div className="flex-initial w-180px">
                {/* <Image src={image} alt={story} className="w-full" /> */}
            </div>
            <div className="flex-auto max-w-70% bg-white rounded-4px flex flex-col p-25px gap-10px m-y-25px items-center">
                <q className="text-13px">
                    {quote}
                </q>
            </div>
        </div>
    )
    return (
        <div className="flex w-full">
            <div className="flex-initial w-180px">
                {/* <Image src={image} alt={story} className="w-full" /> */}
            </div>
            <div className="flex-auto max-w-70% bg-white rounded-4px flex flex-col p-25px gap-10px m-y-25px">
                <span className="border-b-0.5px border-black text-15px">
                    {story?.date ?? ''}
                </span>
                <span className="text-13px">
                    {story?.story}
                </span>
            </div>
        </div>
    )
}

function QuoteComponent(){
    return (
        <div className="flex-initial w-360px bg-#353535 flex flex-col gap-60px items-center rounded-l-8px justify-center p-35px">
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
        story: 'I started my journey as a student in Bina Nusantara University'
    }, {
        date: '01-02-2016',
        story: 'After 1 semester of my studies, i applied and got accepted as a teaching assistant in my university',
        title: 'Teaching Assistant | Bina nusantara university',
        quote: 'I was excited to be able to teach and share my knowledge to students'
    }, {
        date: '01-02-2017',
        story: 'In my fifth semester, i join researcher team in my university',
        title: 'Junior researcher | Bina nusantara university',
        quote: 'A lot of new things i learned from this experience, especially in the field of AI'
    }, {
        date: '01-07-2018',
        story: 'I got my first job as a mobile engineer in a startup company',
        title: 'Mobile Engineer | Airpaz.com',
        quote: 'This open a new page in my life.'
    },{
        date: '01-11-2018',
        story: 'Horray, i graduated from my university',
    }, {
        date: '01-01-2019',
        story: 'Shifting my career from mobile engineer to front end engineer',
        title: 'Front end Engineer | Airpaz.com',
    }, {
        date: '01-03-2020',
        story: 'Flew to Germany to pursue my dream',
    }, {
        date: '01-01-2023',
        story: 'Here i am, working as a fullstack engineer and devOps in a startup company',
        title: 'Full stack & DevOps | Hyrd.de',
    }]
    return (
        <div className={`${className} w-full flex`}>
            <div className="flex-auto flex flex-col items-center">
                <div className="border-b-1px p-20px border-black gap-25px">
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