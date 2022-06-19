import React from "react";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import axios from "axios";
import Link from "next/link";

const postData = async (data) => {
    axios
        .post('/api/register_user/', data)
        .then(function (res) {
            router.push('/login', {
                scroll: true,
            });
            // console.log("OK");
        })
        .catch(function (error) {
            // console.log(error.message);
        })
}

export default function SignUp() {

    const [file, setFile] = React.useState("");
    const router = useRouter();
    const contentType = 'application/json';
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    const password = watch('password');
    const c_password = watch('c_password');

    return (
        <div className="min-h-screen">
            <div className="hero">
                <div className="hero-content">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1 self-center">
                            <div className="px-4 mt-10 sm:px-0">
                                <h1 className="leading-6 text-lg font-medium text-gray-900 text-center">User
                                    Information</h1>
                                <p className="mt-1 text-sm text-gray-600 text-center">Provide valid information</p>
                            </div>
                        </div>

                        <div className="card flex-shrink-0 mt-5 md:mt-0 md:col-span-2 shadow-lg">
                            <form onSubmit={handleSubmit(data => {
                                postData(data)
                                console.log(data);
                            })}>
                                <div className="divider lg:divider-horizontal"></div>
                                <div className="card-body shadow-md overflow-hidden rounded-md ">
                                    <div className="px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-4">
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="first_name"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>First name:</span>
                                                    <input type="text"
                                                           className="input input-sm border-neutral" {...register("first_name", {
                                                        required: 'Please input your first name',
                                                        pattern: {
                                                            value: /^[A-Za-z]+$/i,
                                                            message: 'Alphabetical characters only'
                                                        },
                                                        maxLength: {
                                                            value: 30,
                                                            message: 'Name cannot exceed 30 characters'
                                                        },
                                                    })}/>
                                                </label>
                                                <span
                                                    className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.first_name?.message}</span>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="middle_name"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Middle name:</span>
                                                    <input type="text"
                                                           className="input input-sm border-neutral" {...register("middle_name", {
                                                        required: 'Please input your middle name',
                                                        pattern: {
                                                            value: /^[A-Za-z]+$/i,
                                                            message: 'Alphabetical characters only'
                                                        },
                                                        maxLength: {
                                                            value: 30,
                                                            message: 'Name cannot exceed 30 characters'
                                                        },
                                                    })}/>
                                                </label>
                                                <span
                                                    className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.middle_name?.message}</span>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="last_name"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Last name:</span>
                                                    <input type="text"
                                                           className="input input-sm border-neutral" {...register("last_name", {
                                                        required: 'Please input your last name',
                                                        pattern: {
                                                            value: /^[A-Za-z]+$/i,
                                                            message: 'Alphabetical characters only'
                                                        },
                                                        maxLength: {
                                                            value: 30,
                                                            message: 'Name cannot exceed 30 characters'
                                                        },
                                                    })}/>
                                                </label>
                                                <span
                                                    className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.last_name?.message}</span>
                                            </div>
                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="email"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Email:</span>
                                                    <input type="email"
                                                           className="input input-sm border-neutral" {...register("email", {
                                                        required: 'E-mail is required',
                                                        pattern: {
                                                            value: emailRegex,
                                                            message: 'Please input a correct email'
                                                        },
                                                    })}/>
                                                </label>
                                                <span
                                                    className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.email?.message}</span>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="username"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Username:</span>
                                                    <input type="text"
                                                           className="input input-sm border-neutral" {...register("username", {
                                                        required: 'Please input your username',
                                                        maxLength: {
                                                            value: 20,
                                                            message: 'Username cannot exceed 20 characters'
                                                        },
                                                        pattern: {
                                                            value: /^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/,
                                                            message: 'Enter a valid username'
                                                        }
                                                    })}/>
                                                </label>
                                                <span
                                                    className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.username?.message}</span>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="dob"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Date of Birth:</span>
                                                    <input type="date"
                                                           className="input input-sm border-neutral" {...register("dob", {
                                                        required: 'Date of birth is required'
                                                    })}/>
                                                </label>
                                                <span
                                                    className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.dob?.message}</span>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="password"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Password:</span>
                                                    <input type="password"
                                                           className="input input-sm border-neutral" {...register("password", {
                                                        pattern: {
                                                            value: /^[ A-Za-z0-9_@./#&+-]*$/,
                                                            message: 'Password must contain alphanumeric and special characters'
                                                        },
                                                        minLength: {
                                                            value: 8,
                                                            message: 'Password should exceed 8 characters'
                                                        },
                                                        required: 'Password is required'
                                                    })} />
                                                </label>
                                                <span
                                                    className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.password?.message}</span>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="c_password"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Confirm password:</span>
                                                    <input type="password"
                                                           className="input input-sm border-neutral" {...register("c_password")} />
                                                </label>
                                                <span
                                                    className="block text-sm text-red-400 font-medium ml-2 py-1">{password !== c_password ? 'Passwords must match' : ''}</span>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="f_username"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Facebook username:</span>
                                                    <input type="text"
                                                           className="input input-sm border-neutral" {...register("f_uname", {
                                                        pattern: {
                                                            value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/igm,
                                                            message: 'Valid username required'
                                                        },
                                                        required: 'Username is required'
                                                    })}/>
                                                </label>
                                                <span
                                                    className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.f_uname?.message}</span>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="t_username"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Twitter username:</span>
                                                    <input type="text"
                                                           className="input input-sm border-neutral" {...register("t_uname", {
                                                        pattern: {
                                                            value: /^[A-Za-z0-9_]{4,15}$/,
                                                            message: 'Valid username is required'
                                                        },
                                                        required: 'Username is required'
                                                    })} />
                                                </label>
                                                <span
                                                    className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.t_uname?.message}</span>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="i_username"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Instagram username:</span>
                                                    <input type="text"
                                                           className="input input-sm border-neutral" {...register("i_uname", {
                                                        pattern: {
                                                            value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/igm,
                                                            message: 'Valid username required'
                                                        },
                                                        required: 'Username is required'
                                                    })} />
                                                </label>
                                                <span
                                                    className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.i_uname?.message}</span>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="file-upload"
                                                       className="btn modal-button input-group h-full input-group-sm input-group-vertical">
                                                    {file ? file.split(/\\/)[file.split(/\\/).length - 1] : "Upload your CV"}
                                                    <input type="file" id="file-upload"
                                                           className="border-neutral hidden h-full"
                                                           onChange={(event => {
                                                               setFile(event.target.value);
                                                           })}/>
                                                </label>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="telephone"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Mobile number:</span>
                                                    <input type="tel"
                                                           className="input input-sm border-neutral" {...register("phone", {
                                                        required: 'Phone number is required',
                                                        pattern: {
                                                            value: /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                                                            message: 'Enter correct phone number'
                                                        }
                                                    })}/>
                                                </label>
                                                <span
                                                    className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.phone?.message}</span>
                                            </div>
                                            <div
                                                className="space-y-1 col-span-6 sm:col-span-6 items-center flex flex-col justify-center">
                                                <button type="submit" className="btn btn-info btn-wide btn-md">
                                                    Sign Up
                                                </button>
                                                <p>OR</p>
                                                <Link href="/login">
                                                    <a className="text-info">
                                                        Click here to login
                                                    </a>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}