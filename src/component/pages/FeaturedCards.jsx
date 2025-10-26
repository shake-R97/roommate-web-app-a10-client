import React from 'react';

const FeaturedCards = ({ mateProfile }) => {
    return (
        <div className="hero bg-base-200 py-3 md:py-8 lg:py-11 px-2.5 md:px-7 lg:px-8 overflow-hidden">
            <div className="group rounded-xl p-5 relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(38,31,179,0.40)] hover:scale-[1.02] cursor-pointer">

            <div className="hero-content flex-col md:flex-col flex-wrap items-center justify-center gap-6 lg:flex-row">
                <img
                    src={mateProfile.PhotoURL}
                    className="w-[300px] md:w-[275px] md:h-[275px] lg:w-[350px] lg:h-[350px] h-[300px]  object-cover rounded-full shadow-2xl
                   
                "
                />
                <div className=''>
                    <div className='flex justify-center items-center gap-2.5'>
                        <h1 className="text-xl md:text-2xl lg:text-[27px]">{mateProfile.name}</h1>
                        <hr className='border-1 h-9 border-gray-400' />
                    <p className="py-6 text-[16px] md:text-xl">
                        {mateProfile.availability}.
                    </p>
                    </div>
                    <button className="btn btn-primary w-full">See Details</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FeaturedCards;
