import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#5c2626] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'> {/* Anything above small will go to right*/}
                    <p className='text-4xl font-bold inline border-b-4 border-[#fd7d7d]'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'> {/* When small drop down to 2 columns*/}
                <div className='sm:text-right text-4xl font-bold'> {/* Anything above small*/}
                    <p>
                        I am a passionate software developer!
                    </p>
                </div>
                <div>
                    <p>
                    My passion for the world of software ignited in 2005 when I first laid hands on my family's first computer. 
                    Since then, my unwavering curiosity has driven me to explore the inner 
                    workings of programs and their real-world significance.
                    </p>
                </div>
            
            </div>
        </div>  
    </div>
  )
}

export default About