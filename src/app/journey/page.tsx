import Image from 'next/image'

function Journey(){
    return(
        <div className="w-full min-h-100vh">
            <div className='relative flex flex-col'>
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
                        <h1 className='text-26px'>Pribadi Ridwan Mulyono</h1>
                        <h3 className='text-18px'>Full stack developer</h3>
                        <br />
                        <p className='text-16px'>Phone:</p>
                        <p className='text-16px'>123-456-7890</p>
                        <br />
                        <p className='text-16px'>Email:</p>
                        <p className='text-16px'>(+49) 17660943972</p>
                        <br />
                        <p className='text-16px'>Address:</p>
                        <p className='text-16px'>
                            Wollanktraße 54c
                            <br />
                            13359 Berlin
                        </p>
                        <br />
                        <p className='text-16px'>Date of Birth:</p>
                        <p className='text-16px'>05. December 1995</p>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Journey