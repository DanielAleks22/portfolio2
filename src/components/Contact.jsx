import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#5c2626] flex justify-center items-center p-4'>
        <form method='POST' action='getform url' className='flex flex-col max-w-[600px] w-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#fd7d7d] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or send me an email - daniel.al123@outlook.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#fd7d7d] hover:border-[#fd7d7d] px-4 py-3 my-8 mx-auto flex items-center'>Let's work together!</button>
        </form>
        {/* To setup the portfolio usi getform.io*/}
        
    </div>
  )
}

export default Contact