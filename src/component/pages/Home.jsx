import React from 'react';
import Slider from '../Slider';
import { useLoaderData } from 'react-router';
import FeaturedCards from './FeaturedCards';

const Home = () => {

    const matesData = useLoaderData();
    console.log(matesData);

    return (
        <div>
            <div>
                <Slider></Slider>
            </div>

            <div className='bg-[#261FB3] h-fit mt-14 md:mt-28 py-7 md:py-11 lg:py-14 rounded-br-[180px] md:rounded-br-[240px] lg:rounded-br-[350px] mb-16'>
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

            {/* Featured Roommates Section */}

            <section className='mt-16 md:mt-28 lg:mt-32 bg-[#261FB3] py-[70px] md:py-[115px] lg:py-[155px] mb-10 md:mb-24'>
                <div className='mx-auto'>
                    <h1 className='text-white text-center font-bold text-[21px] md:text-[36px] lg:text-[47px]'>New Featured Roommates</h1>
                </div>
                <div className='md:w-11/12 mx-auto mt-7 md:mt-10 lg:mt-16'>
                    <div className='grid grid-cols-1 md:grid-cols-2 shadow-2xl'>
                        {
                            matesData.map((mateProfile) =>
                                <FeaturedCards key={mateProfile._id} mateProfile={mateProfile}></FeaturedCards>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Home;