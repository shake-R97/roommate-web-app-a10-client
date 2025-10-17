import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {

    const { signInUser, googleSignIn } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);


    const handelSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const oldUserData = Object.fromEntries(formData.entries());
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email, password, oldUserData);

        // sign in existing user 

        signInUser(email, password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'You have successfully signed in. ',
                    showConfirmButton: false,
                    timer: 3000
                });
                navigate(location?.state || '/');

            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                Swal.fire({
                    icon: "error",
                    title: "Oops... Something went wrong",
                    text: errorMessage,
                    timer: 4000
                });
            })
    }

    //  google sign in

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((res) => {
                console.log(res.user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'You have successfully signed in. ',
                    showConfirmButton: false,
                    timer: 3000
                });
                navigate(location?.state || '/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                Swal.fire({
                    icon: "error",
                    title: "Oops... Something went wrong",
                    text: errorMessage,
                    timer: 4000
                });
            })
    }

    return (
        <div
            className="hero min-h-screen bg-linear-to-t from-[#3338A0] to-zinc-300"
            style={{
                backgroundImage:
                    "linear-gradient(to top, rgba(51,56,160,0.2)),url('/sliderImg/a-chosen-soul-FnGZcsmeD2U-unsplash.jpg')",
            }}
        >
            {/* <div className="hero-overlay"></div> */}
            <div className="hero w-11/12 mx-auto h-[80vh] flex flex-col md:flex-row-reverse shadow-2xl/80">
                <div className="hidden md:block rounded-r-[12px] md:w-[62%] lg:w-[74%] h-full bg-cover bg-center lg:text-left"
                    style={
                        {
                            backgroundImage: "url('/sliderImg/a-chosen-soul-FnGZcsmeD2U-unsplash.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }
                    }
                >
                    <div className='h-full flex flex-col justify-center items-center text-center'>
                        <h1 className="md:text-4xl lg:text-7xl text-white font-bold">Welcome Back!.</h1>
                        <p className="py-6 lg:text-[19px] md:text-[13px] text-white">
                            Sign in now and get ready to find new acquaintances!
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-[38%] lg:w-[26%] flex h-full justify-center bg-white rounded-xl md:rounded-l-[12px] md:rounded-r-none scroll-smooth overflow-y-auto  items-center'>
                    <div className="card w-full ">
                        <div className="card-body">
                            <div className='mb-5 md:mt-16'>
                                <h1 className='text-center font-bold text-2xl md:text-3xl '>SignIn Here!</h1>
                            </div>
                            <form onSubmit={handelSignIn} className="fieldset">

                                <label className="label">Email</label>
                                <input type="email"
                                    name='email'
                                    className="input w-full" placeholder="Email" />

                                <label className="label">Password</label>
                                <input type="password"
                                    name='password'
                                    className="input w-full" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type='submit' className="btn btn-primary mt-4">SignIn</button>

                                {/* Google */}
                                <button type='button' onClick={handleGoogleSignIn} className="btn bg-white text-black mt-1.5 border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Sign In with Google
                                </button>
                                <p>Don't have an account? Click here to <span className='text-blue-800 text-[14px]'> <Link to={'/signup'}>Sign Up.</Link></span> </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;