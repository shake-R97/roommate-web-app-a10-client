import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

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
            <footer>

            </footer>

        </div>
    );
};

export default Mainlayout;