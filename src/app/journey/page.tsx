import Image from 'next/image'
import MyJourney from '@/components/journey/index'

function Journey(){
    const profile = {
        name: 'Pribadi Ridwan Mulyono',
        title: 'Full stack developer',
        email: 'pribadiridwan1st@©mail.com',
        phone: '(+49) 17660943972',
        address: 'Wollanktraße 54c, 13359 Berlin',
        dateOfBirth: '05. December 1995',
    }
    return(
        <div className="w-full min-h-100vh flex flex-col gap-20px">
            <div className='relative flex flex-col '>
                <Image
                    src="/background.webp"
                    width={1920}
                    height={446}
                    quality={100} alt={''}
                />
                <div className='flex-1 min-h-200px w-full' />
                <div className='absolute bg-white rounded-8px flex left-1/2 transform -translate-x-1/2 bottom-0 w-50% shadow-md'>
                    <Image
                        className='rounded-l-8px'
                        src="/profile.jpeg"
                        width={400}
                        height={361}
                        quality={100}
                        alt="Profile image"
                    />
                    <div className='flex flex-col p-20px'>
                        <h1 className='text-26px'>{profile.name}</h1>
                        <h3 className='text-18px'>{profile.title}</h3>
                        <br />
                        <p className='text-16px'>Phone:</p>
                        <p className='text-16px'>{profile.phone}</p>
                        <br />
                        <p className='text-16px'>Email:</p>
                        <p className='text-16px'>{profile.email}</p>
                        <br />
                        <p className='text-16px'>Address:</p>
                        <p className='text-16px'>
                            {profile.address}
                        </p>
                        <br />
                        <p className='text-16px'>Date of Birth:</p>
                        <p className='text-16px'>{profile.dateOfBirth}</p>
                    </div>
                </div>
            </div>
            <div className='border-y-1px border-black w-max-1080px p-y-30px flex align-center justify-center'>
                <h1 className='leading-45px text-38px'>My journey</h1>
            </div>
            <MyJourney className="w-full p-y-60px" />
            
        </div>
    )   
}

export default Journey