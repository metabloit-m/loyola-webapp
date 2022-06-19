import {useForm} from "react-hook-form";
import axios from "axios";
import React from "react";
import router from "next/router";


export default function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = React.useState(false);

    const validateData = (data) => {
        axios
            .post('/api/login/', data)
            .then(function (res) {
                setError(false);
                const user_id = res.data.data[0]._id;
                router.push(`/${user_id}/`)
            })
            .catch(function (err) {
                setError(true);
            })
    }

    return (
        <>
            <div className="min-h-screen flex items-center">
                <div className="max-w-4xl items-center mx-auto w-full rounded-md mb-32">
                    <div className={`${error ? '' : 'sr-only'} alert alert-error m-4 max-w-md mx-auto`}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6"
                                 fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span>Invalid email/password</span>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit( data => {
                        validateData(data);
                        console.log(data)
                    })}>
                        <div className="max-w-md mx-auto w-full items-center">
                            <div className="w-full space-y-3">
                                <div className="justify-center text-center flex pb-4">
                                    <h1 className="text-4xl font-medium w-full">Login</h1>
                                </div>
                                <div className="">
                                    <p className="text-sm font-medium">Email:</p>
                                </div>
                                <div className="">
                                    <input type="email" placeholder="Email" className="form-input rounded-md px-4 py-3 w-full" {...register("email", {
                                        required: 'Please input your email'
                                    })}/>
                                    <span
                                        className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.email?.message}</span>
                                </div>
                                <div className="">
                                    <p className="text-sm font-medium">Password:</p>
                                </div>
                                <div className="">
                                    <input type="password" placeholder="Password" className="form-input rounded-md px-4 py-3 w-full" {...register("password", {
                                        required: 'Please input your password'
                                    })}/>
                                    <span
                                        className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.password?.message}</span>
                                </div>
                                <div className="justify-center items-center flex">
                                    <input type="submit" className="cursor-pointer transition duration-700 ease-in-out rounded-lg border border-neutral hover:text-white hover:bg-neutral w-full  p-2 mt-4 w-48" value="Sign In"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}