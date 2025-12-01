import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const RoommateDetails = () => {

    const { name, PhotoURL, description, location, preferences, title, amount, roomtype } = useLoaderData();

    const [likeCount, setLikeCount] = useState(0);

    const handleLikeCount = () => {
        const counter = likeCount + 1;
        setLikeCount(counter);
        console.log(counter);
    }
    return (
        <div>

            <div
                className="hero min-h-screen bg-linear-to-t from-[#3338A0] to-zinc-300"
                style={{
                    backgroundImage:
                        "linear-gradient(to top, rgba(51,56,160,0.2)),url('/sliderImg/Gradient.jpeg')",
                }}
            >

                <div className="card flex-col md:flex-row md:w-10/12 mt-5 mb-5 card-side bg-base-100 shadow-sm mx-4 overflow-y-auto scroll-smooth">
                    <figure className='w-full md:w-1/2 h-auto md:h-auto lg:h-auto flex-shrink-0'>
                        <img
                            src={PhotoURL}
                            className='w-full h-auto md:h-full object-cover'
                            alt="Movie" />
                    </figure>
                    <div className="flex flex-auto flex-col p-6  space-y-3.5 md:space-y-8 w-full h-auto md:w-1/2 lg:h-auto flex-shrink-0">
                        <h2 className="text-[18px] md:text-[26px] lg:text-3xl">Name: {name}</h2>
                        <p className='text-[14px] md:text-[17px] lg:text-[20px]'>Title : {title}</p>
                        <p className='text-[14px] md:text-[17px] lg:text-[20px]'>Location : {location}</p>
                        <p className='text-[14px] md:text-[17px] lg:text-[20px]'>Descriptions : {description}</p>
                        <p className='text-[14px] md:text-[17px] lg:text-[20px]'>Room Type : {roomtype}</p>
                        <p className='text-[14px] md:text-[17px] lg:text-[20px]'>Amount : {amount}$</p>
                        <p className='text-[14px] md:text-[17px] lg:text-[20px]'>Preferences : {preferences}</p>
                        <div>
                            <p>People Interested In : {likeCount}</p>
                        </div>
                        <div className="card-actions justify-start">
                            <button onClick={handleLikeCount} className="btn btn-primary">Like</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RoommateDetails;