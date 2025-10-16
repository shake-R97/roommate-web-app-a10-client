import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
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
                            <li><Link className='text-[17px]' to={'/'}>Home</Link></li>
                            <li><Link className='text-[17px]' to={'/findmate'}>Find Roommate</Link></li>
                            <li><Link className='text-[17px]' to={'/listing'}>Browse Listing</Link></li>
                            <li><Link className='text-[17px]' to={'/mylisting'}>My Listing</Link></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-[24px] md:text-3xl font-extrabold text-[#6F00FF]">Homies</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className='text-[19px]' to={'/'}>Home</Link></li>
                        <li><Link className='text-[19px]' to={'/findmate'}>Find Roommate</Link></li>
                        <li><Link className='text-[19px]' to={'/listing'}>Browse Listing</Link></li>
                        <li><Link className='text-[19px]' to={'/mylisting'}>My Listing</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;