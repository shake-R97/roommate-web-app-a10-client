import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './pages/NavBar.css';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {

        signOutUser()
            .then(() => {
                Swal.fire({
                    title: "You are signed out",
                    icon: "success",
                    draggable: true,
                    timer: 2000
                });
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    timer:1500
                });
            })
    }

    return (
        <div className="p-2.5 min-h-[70px] bg-base-100 shadow-sm">
            <div className='flex justify-around md:w-11/12 mx-auto'>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink className='text-[17px]' to={'/'}>Home</NavLink></li>
                            <li><NavLink className='text-[17px]' to={'/findroommate'}>Find Roommate</NavLink></li>
                            <li><NavLink className='text-[17px]' to={'/listing'}>Browse Listing</NavLink></li>
                            <li><NavLink className='text-[17px]' to={'/mylistings'}>My Listing</NavLink></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-[24px] md:text-3xl font-extrabold text-[#6F00FF]">Homies</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className='text-[17px]' to={'/'}>Home</NavLink></li>
                        <li><NavLink className='text-[17px]' to={'/findroommate'}>Find Roommate</NavLink></li>
                        <li><NavLink className='text-[17px]' to={'/listing'}>Browse Listing</NavLink></li>
                        <li><NavLink className='text-[17px]' to={'/mylistings'}>My Listing</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <a onClick={handleSignOut} className="btn">Sign Out</a> : <Link to={'/signin'} className="btn">Sign In</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;