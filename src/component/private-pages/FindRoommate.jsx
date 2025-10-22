import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const FindRoommate = () => {

    const { user } = use(AuthContext);

    const handelAddToFindMate = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newPostedData = Object.fromEntries(formData.entries());
        console.log(newPostedData); 
    }
    return (
        <div
            className="hero min-h-screen bg-linear-to-t from-[#3338A0] to-zinc-300"
            style={{
                backgroundImage:
                    "linear-gradient(to top, rgba(51,56,160,0.2)),url('/sliderImg/sl_021821_40880_04.jpg')",
            }}
        >
            {/* <div className="hero-overlay"></div> */}
            <div className="hero w-11/12 mx-auto my-6 md:my-10  lg:my-18 h-[75vh] md:h-[75vh] lg:min-h-screen flex flex-col md:flex-row-reverse justify-center items-center shadow-2xl/80
            [@media(max-height:700px)]:overflow-y-auto
                [@media(max-height:700px)]:scroll-smooth
                [@media(max-height:700px)]:h-[120vh]
            ">
                <div className='w-full md:w-[60%] lg:w-[65%] flex  justify-center rounded-xl  md:rounded-l-none scroll-smooth overflow-y-auto pb-2.5 md:pb-4 lg:pb-8
                '
                >
                    <div className="card w-full">
                        <div className="card-body">
                            <div className='mb-5 md:mt-4'>
                                <h1 className='text-center text-white font-bold text-xl md:text-2xl '>To post, fill out the form.</h1>
                            </div>
                            <form onSubmit={handelAddToFindMate} >

                                <div className="grid grid-cols-1 gap-2 md:gap-5 md:grid-cols-2 p-3 md:p-4 lg:p-8">
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Title</legend>
                                        <input name='title' type="text" className="input w-full" placeholder="(e.g., 'Looking for a roommate in NYC')" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Location</legend>
                                        <input name='location' type="text" className="input w-full" placeholder="Location" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend  text-white text-[18px]">Rent Amount</legend>
                                        <input name='amount' type="number" className="input w-full" placeholder="Rent Amount" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Room Type</legend>
                                        <input name='room' type="text" className="input w-full" placeholder="(Single, Shared, etc.)" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]"> Preferences</legend>
                                        <input name='preference' type="text" className="input w-full " placeholder="(Pets, Smoking, Night Owl, etc.)" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Description</legend>
                                        <input name='description' type="text" className="input w-full" placeholder="Description" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Contact Info</legend>
                                        <input name='contact' type="number" className="input w-full" placeholder="Contact Info" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Availability </legend>
                                        <input name='availability' type="text" className="input w-full" placeholder=" (available or not)" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">User Email</legend>
                                        <input name='email' type="text" value={user.email} readOnly className="input w-full bg-gray-200 cursor-not-allowed" placeholder="email" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">User Name</legend>
                                        <input name='name' type="text" value={user.displayName} readOnly  className="input w-full bg-gray-200 cursor-not-allowed" placeholder="Your Name" />
                                    </fieldset>
                                </div>
                                <div className='mt-1.5 px-2 md:px-4 lg:px-8 md:mt-2'>
                                    <input className='w-full btn bg-[#F6F5F2] text-blue-700' type="submit" value="Post" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block rounded-l-[12px]  md:w-[40%] lg:w-[35%] h-full bg-cover bg-center lg:text-left"
                >
                    <div className='h-full flex flex-col justify-center items-center text-center'>
                        <div><h1 className='md:text-2xl lg:text-4xl text-white text-center mb-4 font-bold'>Make a post.</h1></div>
                        <div>
                            <img src={'/sliderImg/3d-female-character-working-desk-with-laptop.png'} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindRoommate;