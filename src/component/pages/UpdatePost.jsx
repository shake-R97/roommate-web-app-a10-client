import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const UpdatePost = () => {

    const { user } = use(AuthContext);

    const { title, location, amount, description, contact, PhotoURL, _id } = useLoaderData();

    const handleUpdatePost = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedPost = Object.fromEntries(formData.entries());
        console.log(updatedPost);


        // send updatedPost to the db

        fetch(`http://localhost:3000/update-post/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPost)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Post Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div
            className="hero min-h-screen bg-linear-to-t from-[#3338A0] to-zinc-300"
            style={{
                backgroundImage:
                    "linear-gradient(to top, rgba(51,56,160,0.2)),url('/sliderImg/Gradient.jpeg')",
            }}
        >
            {/* <div className="hero-overlay"></div> */}
            <div className="hero w-11/12 mx-auto my-6 md:my-10  lg:my-18 h-[75vh] md:h-[78vh] lg:min-h-screen flex flex-col md:flex-row-reverse justify-center items-center shadow-2xl/80
            [@media(max-height:700px)]:overflow-y-auto
                [@media(max-height:700px)]:scroll-smooth
                [@media(max-height:700px)]:h-[130vh]
            ">
                <div className='w-full md:w-[60%] lg:w-[65%] flex  justify-center rounded-xl  md:rounded-l-none scroll-smooth overflow-y-auto pb-2.5 md:pb-4 lg:pb-8
                '
                >
                    <div className="card w-full">
                        <div className="card-body">
                            <div className='mb-5 md:mt-4'>
                                <h1 className='text-center text-white font-bold text-xl md:text-2xl '> Fill out your Update Info.</h1>
                            </div>
                            <form onSubmit={handleUpdatePost} >

                                <div className="grid grid-cols-1 gap-2 md:gap-5 md:grid-cols-2 p-3 md:p-4 lg:p-8">
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Title</legend>
                                        <input name='title' type="text"
                                            defaultValue={title}
                                            className="input w-full" placeholder="(e.g., 'Looking for a roommate in NYC')" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Location</legend>
                                        <input name='location' type="text"
                                            defaultValue={location}
                                            className="input w-full" placeholder="Location" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend  text-white text-[18px]">Rent Amount</legend>
                                        <input name='amount'
                                            defaultValue={amount}
                                            type="number" className="input w-full" placeholder="Rent Amount" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Room Type</legend>
                                        <select name='roomType' defaultValue="Pick your Room Type" className="select w-full">
                                            <option disabled={true}>Pick Your Room Type</option>
                                            <option>Single.</option>
                                            <option>Shared.</option>
                                            <option>Double</option>
                                        </select>
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Preferences</legend>
                                        <select name='preferences' defaultValue="Pick your preferences" className="select w-full">
                                            <option disabled={true}>Pick Your Preferences</option>
                                            <option>Pets.</option>
                                            <option>Smoking.</option>
                                            <option>Pets and Smoking.</option>
                                            <option>No Pets and Smoking.</option>
                                        </select>
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Description</legend>
                                        <input name='description'
                                            defaultValue={description}
                                            type="text" className="input w-full" placeholder="Description" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Contact Info</legend>
                                        <input name='contact'
                                            defaultValue={contact}
                                            type="number" className="input w-full" placeholder="Contact Info" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">Availability</legend>
                                        <select name='availability' defaultValue="Pick your Status" className="select w-full">
                                            <option disabled={true}>Availability</option>
                                            <option>Available.</option>
                                            <option>Not Available.</option>
                                        </select>
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">User Email</legend>
                                        <input name='email' type="text" value={user?.email} readOnly className="input w-full bg-gray-200 cursor-not-allowed" placeholder="email" />
                                    </fieldset>
                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend text-white text-[18px]">User Name</legend>
                                        <input name='name' type="text" value={user?.displayName} readOnly className="input w-full bg-gray-200 cursor-not-allowed" placeholder="Your Name" />
                                    </fieldset>
                                </div>
                                <div className='px-2 md:px-4 lg:px-8 pb-1.5 md:pb-2'>
                                    <legend className="fieldset-legend text-white text-[18px]">Photo URL</legend>
                                    <input name='PhotoURL' type="text"
                                        defaultValue={PhotoURL}
                                        className="input w-full" placeholder=" (PhotoURL)" />
                                </div>
                                <div className='mt-3 px-2 md:px-4 lg:px-8 md:mt-3'>
                                    <input className='w-full btn bg-[#F6F5F2] text-blue-700' type="submit" value="Add" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block rounded-l-[12px]  md:w-[40%] lg:w-[35%] h-full bg-cover bg-center lg:text-left"
                >
                    <div className='h-full flex flex-col justify-center items-center text-center'>
                        <div><h1 className='md:text-2xl lg:text-4xl text-white text-center mb-4 font-bold'>Update Your Post.</h1></div>
                        <div>
                            <img src={'/sliderImg/freepik__background__2019.png'} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePost;