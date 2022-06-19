import test from "../../models/user";
import dbConnect from "../../lib/dbConnect";
import React from "react";

export default function Home({user}) {

    return (
        <>
            <div className="min-h-screen flex items-center">
                <div className="max-w-4xl items-center mx-auto w-full rounded-md mb-32">
                    <div className="max-w-md mx-auto w-full items-center">
                        <div className="w-full space-y-3">
                            <div className="justify-center text-center flex pb-4">
                                <h1 className="text-4xl font-medium w-full">Your Information:</h1>
                            </div>
                            <table className="table table-zebra table-compact mx-auto overflow-x-auto w-full">
                                <tbody>
                                <tr>
                                    <td className="font-medium">First Name</td>
                                    <td className="whitespace-normal">{user.first_name}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Middle Name</td>
                                    <td className="whitespace-normal">{user.middle_name}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Last Name</td>
                                    <td className="whitespace-normal">{user.last_name}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Email</td>
                                    <td className="whitespace-normal">{user.email}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Username</td>
                                    <td className="whitespace-normal">{user.username}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">DOB</td>
                                    <td className="whitespace-normal">{user.dob}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Password</td>
                                    <td className="whitespace-normal">{user.password}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Facebook username</td>
                                    <td className="whitespace-normal">{user.f_username}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Twitter username</td>
                                    <td className="whitespace-normal">{user.t_username}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Instagram username</td>
                                    <td className="whitespace-normal">{user.i_username}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Phone #</td>
                                    <td className="whitespace-normal">{user.phone}</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps({params}) {
    await dbConnect();

    const user = await test.findById(params.id).lean();
    user._id = user._id.toString();

    return {
        props: {
            user
        }
    }
}