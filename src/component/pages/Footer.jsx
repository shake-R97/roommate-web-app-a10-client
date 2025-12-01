import React from 'react';
import { Link, NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 md:p-20">
            <aside>
                <label>
                    <Link to={'/'} className="btn btn-ghost text-[24px] md:text-3xl font-extrabold text-[#6F00FF]">Homies</Link>
                </label>
                <p>
                    Homies Associates.
                    <br />
                    Providing reliable Services since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <li><NavLink className='text-[17px]' to={'/'}>Home</NavLink></li>
                        <li><NavLink className='text-[17px]' to={'/addtofindroommate'}>Add to Find Roommate</NavLink></li>
                        <li><NavLink className='text-[17px]' to={'/browse-listing'}>Browse Listing</NavLink></li>
                        <li><NavLink className='text-[17px]' to={'/mylistings'}>My Listing</NavLink></li>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;