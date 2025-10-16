import React from 'react';
import Slider from '../Slider';

const Home = () => {
    return (
        <div>
           <div>
             <Slider></Slider>
           </div>

            <div className='bg-[#8a2af7] h-fit mt-10 md:mt-20 py-7 md:py-11 lg:py-14 rounded-br-[180px] md:rounded-br-[240px] lg:rounded-br-[350px] mb-16'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center'>
                    <div className='px-4 md:w-[45%]'>
                        <h1 className='text-xl md:text-4xl lg:text-7xl font-bold md:break-all lg:break-normal'>Finding the ideal roommates should be simple and straightforward. </h1>
                        <p className='font-light mt-2 md:mt-6 text-gray-300 text-[12px] md:text-[17px] lg:text-[20px]'>We are here to do that exactly! So why are we waiting? Let's get started and find your new Homie.</p>
                    </div>
                    <div className='w-[80%] md:w-[40%]'>
                        <img className=' object-cover' src="/sliderImg/Adobe Express - file.png" alt="Searching img" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;