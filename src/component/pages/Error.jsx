import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url('/sliderImg/wallpaperflare.com_wallpaper(2).jpg')",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Opps!404 
        ERORR. </h1>
      <p className="mb-5">
        Looks Like the page you are looking for is not available!
      </p>
      <button><Link to={'/'} className="btn btn-ghost text-[24px] md:text-3xl font-extrabold text-[#6F00FF]">Go Back Home</Link></button>
    </div>
  </div>
</div>
    );
};

export default Error;