import React from "react";
import SignUp from "../components/register_user";

export default function Register({registerForm}) {
    return (
        <>
            <SignUp registerForm={registerForm}/>
        </>
    )
}

export async function getStaticProps(context) {

    const registerForm = {
        first_name: '',
        last_name: '',
        middle_name: '',
        email: '',
        username: '',
        dob: '',
        password: '',
        c_password: '',
        f_username: '',
        t_username: '',
        i_username: '',
        phone: '',
    }
    return {
        props: {
            registerForm
        }
    }
}