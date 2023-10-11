import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#5c2626]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#fd7d7d]'>Projects</p>
                <p className='py-6'>Some projects I have worked on: </p>
            </div>

            {/* Grid Container */}
            <div className='text-12xl'>
                <ul className="list-disc">
                    <li><strong>EasyGoing</strong>: Provides geolocation-based data including weather, news, local activities, and nearest metro/train stations, using React Native and Python.</li>
                    <li><strong>ZooAdopt</strong>: This full-stack web application enabling users to list and adopt pets. Crafted the frontend using vanilla HTML, CSS,
                        and JavaScript. Backend built using Flask with Python and JavaScript integration, utilizing SQLite for database management.</li>
                    <li><strong>DebtGraph</strong>: Utilizes graph data structures for calculating debt and loans among banks in C++.</li>
                    <li><strong>GeoFilter</strong>: Geographical data extraction and filtering, population-based sorting in C.</li>
                </ul>

            </div>
            
        </div>
        
    </div>
  )
}

export default Work