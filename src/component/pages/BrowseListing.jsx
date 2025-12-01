import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BrowseListing = () => {

    const allListings = useLoaderData();
    console.log(allListings);

    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table m-2.5">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Room Type</th>
                            <th>More Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allListings.map((singleListings) => {
                                return (
                                    <tr key={singleListings._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={singleListings.PhotoURL} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{singleListings.name}</div>
                                                    <div className="text-sm opacity-50">{singleListings.location}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {singleListings.description}
                                        </td>
                                        <td>{singleListings.roomType}</td>
                                        <th>
                                            <Link to={`/matedetails/${singleListings._id}`}  className="btn btn-primary btn-xs">Details</Link>
                                        </th>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default BrowseListing;