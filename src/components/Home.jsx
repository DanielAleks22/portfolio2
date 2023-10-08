import React from 'react'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#5c2626]'>
        {/*Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#fd7d7d]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Daniel Aleksandrov</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Full Stack Developer.</h2>
        </div>
    </div>
  )
}

export default Home