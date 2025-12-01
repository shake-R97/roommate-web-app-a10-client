import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './pages/Footer';

const Mainlayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className='mt-12'>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Mainlayout;