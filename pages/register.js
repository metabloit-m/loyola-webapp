import React from "react";

export default function Register() {

    const [file, setFile] = React.useState("");

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
                            <form action="#" method="POST">
                                <div className="divider lg:divider-horizontal"></div>
                                <div className="card-body shadow-md overflow-hidden rounded-md ">
                                    <div className="px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-4">
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="first_name"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>First name:</span>
                                                    <input type="text" className="input input-sm border-neutral"/>
                                                </label>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="middle_name"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Middle name:</span>
                                                    <input type="text" className="input input-sm border-neutral"/>
                                                </label>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="last_name"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Surname:</span>
                                                    <input type="text" className="input input-sm border-neutral"/>
                                                </label>
                                            </div>
                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="email"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>E-mail:</span>
                                                    <input type="text" className="input input-sm border-neutral"/>
                                                </label>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="username"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Username:</span>
                                                    <input type="text" className="input input-sm border-neutral"/>
                                                </label>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="dob"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Date of Birth:</span>
                                                    <input type="date" className="input input-sm border-neutral"/>
                                                </label>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="password"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Password:</span>
                                                    <input type="password" className="input input-sm border-neutral"/>
                                                </label>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="c_password"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Confirm password:</span>
                                                    <input type="password" className="input input-sm border-neutral"/>
                                                </label>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="f_username"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Facebook username:</span>
                                                    <input type="text" className="input input-sm border-neutral"/>
                                                </label>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="t_username"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Twitter username:</span>
                                                    <input type="text" className="input input-sm border-neutral"/>
                                                </label>
                                            </div>
                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="i_username"
                                                       className="input-group input-group-sm input-group-vertical">
                                                    <span>Instagram username:</span>
                                                    <input type="text" className="input input-sm border-neutral"/>
                                                </label>
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
                                                    <span>Telephone no.</span>
                                                    <input type="text" className="input input-sm border-neutral"/>
                                                </label>
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

export async function getStaticProps(context) {
    return {
        props: {}
    }
}