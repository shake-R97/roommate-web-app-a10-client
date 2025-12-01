import React, { use } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';


const MyListing = () => {
    const { user } = use(AuthContext);
    console.log(user)
    const allPost = useLoaderData();
    console.log(allPost);
    const myPosts = allPost.filter((post) => post.email == user?.email);


    const handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

            fetch(`https://roommate-web-a10-server.vercel.app/deletePost/${id}`,{
                method:'DELETE',
            })
            .then(res=> res.json())
            .then(data=> {
                if(data.deletedCount) {
                     Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                }
            })
               
            }
        });
    }


    return (
        <div className="overflow-x-auto min-h-screen">
            <table className="table mt-3">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th></th>
                        <th>Email</th>
                        <th>Rent Amount</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        myPosts.map((post) =>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-16 w-16 md:h-44 md:w-44 rounded-full">
                                                <img
                                                    src={post.PhotoURL}
                                                    alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-extrabold  text-[14px] md:text-2xl">{post.name}</div>
                                            <div className="text-sm opacity-50">{post.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-[12px] md:text-[15px]'>
                                    {post.email}
                                </td>
                                <td className='text-[12px] md:text-[15px]'>{post.amount}$</td>
                                <td>
                                    <Link to={`/update-post/${post._id}`} className="btn btn-ghost btn-xs text-[12px] md:text-[15px]">Update</Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(post._id)} className="btn btn-ghost btn-xs text-[12px] md:text-[15px]">Delete</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
            <hr className='text-gray-200' />
        </div>
    );
};

export default MyListing;