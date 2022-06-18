import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import axios from "axios"

const Register = ({registerForm}) => {
    const router = useRouter();
    const contentType = 'application/json';
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            first_name: registerForm.first_name,
            last_name: registerForm.last_name,
            yoe: registerForm.yoe,
            yog: registerForm.yog,
            fam_teacher: registerForm.fam_teacher,
            result: registerForm.result,
            occup: registerForm.occup,
            address: registerForm.address,
            email: registerForm.email,
            phone: registerForm.phone,
        }
    });
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const postData = async (data) => {
        axios
            .post('/api/register', data)
            .then(function (res) {
                router.push('/members', {
                    scroll: true,
                });
                // console.log("OK");
            })
            .catch(function (error) {
                // console.log(error.message);
            })
    }

    return (
        <div className="hero-content flex-col lg:flex-row-reverse justify-center mx-auto items-center mb-8  ">
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
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first_name"
                                               className="input-group input-group-sm input-group-vertical">
                                            <span>First name:</span>
                                            <input type="text" className="input input-sm border-neutral" {...register("first_name", {
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
                                        <span className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.first_name?.message}</span>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last_name"
                                               className="input-group input-group-sm input-group-vertical">
                                            <span>Last name:</span>
                                            <input type="text" className="input input-sm border-neutral" {...register("last_name", {
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
                                        <span className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.last_name?.message}</span>
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="yoe"
                                               className="input-group input-group-sm input-group-vertical">
                                            <span>Year of Enrollment:</span>
                                            <input type="month" className="input input-sm border-neutral" {...register("yoe", {
                                                required: 'Year of enrollment is required',
                                            })}/>
                                        </label>
                                        <span className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.yoe?.message}</span>
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="yog"
                                               className="input-group input-group-sm input-group-vertical">
                                            <span>Year of Graduation:</span>
                                            <input type="month" className="input input-sm border-neutral" {...register("yog", {
                                                required: 'Year of graduation is required'
                                            })} />
                                        </label>
                                        <span className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.yog?.message}</span>
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="username"
                                               className="input-group input-group-sm input-group-vertical">
                                            <span>Famous teacher:</span>
                                            <input type="text" className="input input-sm border-neutral" {...register("fam_teacher", {
                                                required: 'Input is required',
                                                maxLength: {
                                                    value: 30,
                                                    message: 'Name cannot exceed 30 characters'
                                                }
                                            })} />
                                        </label>
                                        <span className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.fam_teacher?.message}</span>
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">
                                        <label htmlFor="dob"
                                               className="input-group input-group-sm input-group-vertical">
                                            <span>Summary of Results (DIV):</span>
                                            <select {...register("result", {
                                                required: 'Select your results'
                                            })} className="select select-bordered border-neutral">
                                                <option disabled selected value="">Select your div</option>
                                                <option value="I">I</option>
                                                <option value="II">II</option>
                                                <option value="III">III</option>
                                                <option value="IV">IV</option>
                                                <option value="0">0</option>
                                            </select>
                                        </label>
                                        <span className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.result?.message}</span>
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">
                                        <label htmlFor="c_job"
                                               className="input-group input-group-sm input-group-vertical">
                                            <span>Current occupation:</span>
                                            <input type="text" className="input input-sm border-neutral" {...register("occup", {
                                                required: 'Please input your occupation',
                                                maxLength: {
                                                    value: 20,
                                                    message: 'Occupation cannot exceed 20 characters'
                                                },
                                            })} />
                                        </label>
                                        <span className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.occup?.message}</span>
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="address"
                                               className="input-group input-group-sm input-group-vertical">
                                            <span>Address:</span>
                                            <input type="text" className="input input-sm border-neutral" {...register("address", {
                                                required: 'Please input your address',
                                                maxLength: {
                                                    value: 30,
                                                    message: 'Address cannot exceed 30 characters'
                                                }
                                            })}/>
                                        </label>
                                        <span className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.address?.message}</span>
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="email"
                                               className="input-group input-group-sm input-group-vertical">
                                            <span>Email:</span>
                                            <input type="email" className="input input-sm border-neutral" {...register("email", {
                                                required: 'E-mail is required',
                                                pattern: {
                                                    value: emailRegex,
                                                    message: 'Please input a correct email'
                                                },
                                            })}/>
                                        </label>
                                        <span className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.email?.message}</span>
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="telephone"
                                               className="input-group input-group-sm input-group-vertical">
                                            <span>Mobile number:</span>
                                            <input type="tel" className="input input-sm border-neutral" {...register("phone", {
                                                required: 'Phone number is required',
                                                pattern: {
                                                    value: /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                                                    message: 'Enter correct phone number'
                                                }
                                            })}/>
                                        </label>
                                        <span className="block text-sm text-red-400 font-medium ml-2 py-1">{errors.phone?.message}</span>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <button type="submit" className="btn btn-md">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;