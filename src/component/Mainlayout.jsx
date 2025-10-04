import React from 'react';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div>
            <nav>

            </nav>
            <div>
                <header></header>
            </div>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                
            </footer>

        </div>
    );
};

export default Mainlayout;