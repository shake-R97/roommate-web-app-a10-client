import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="mySwiper"
            >
                {/* slider -1 */}
                <SwiperSlide>
                    <div
                        className="hero h-[500px] md:min-h-screen "
                        style={{
                            backgroundImage:
                                "url('/sliderImg/zero-take-WvHrrR1C5Po-unsplash.jpg')",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="">
                                <h1 className="mb-5 text-[25px] md:text-[55px] lg:text-[100px] font-bold">Find roommates and rooms - the finest and quickest way out with <span  className='text-[#6F00FF] '>Homies</span></h1>
                                <p className="mb-5 text-[12px] md:text-[22px]">
                                    Are you looking for a roommate, rooms or houses to rent, or are you trying to discover a new place to live?  Homies helps you do all of this in a free, fast and reliable way. Not just that, you can also list your place and post with us!
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* slider -2 */}
                <SwiperSlide>
                    <div
                        className="hero h-[500px] md:min-h-screen "
                        style={{
                            backgroundImage:
                                "url('/sliderImg/immo-wegmann-s_wwrOGmhKY-unsplash.jpg')",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="">
                                <h1 className="mb-5 text-[25px] md:text-[55px] lg:text-[100px] font-bold">Save Your Valuable Times<span className='text-red-500'>!</span></h1>
                                <p className="mb-5 text-[12px] md:text-[22px]">
                                   Identify your precise potential and suitable roommates and accommodations more efficiently than others. You can select your preferred option and eliminate it if it doesn't fit well.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slider -3 */}
                <SwiperSlide>
                    <div
                        className="hero h-[500px] md:min-h-screen "
                        style={{
                            backgroundImage:
                                "url('/sliderImg/bernard-hermant-OLLtavHHBKg-unsplash.jpg')",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="">
                                <h1 className="mb-5 text-[25px] md:text-[55px] lg:text-[100px] font-bold">We are completely Scam & Spam free!</h1>
                                <p className="mb-5 text-[12px] md:text-[22px]">
                                   We have established a strong reputation for trustworthiness in our work, having competed in the market for over a decade. We are recognized by government bodies and reputable companies alike. We meticulously verify every profile and post on your behalf, ensuring that you can remain stress-free.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;