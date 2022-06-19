import React from "react";
import SignUp from "../components/register_user";

export default function Register() {
    return (
        <>
            <SignUp />
        </>
    )
}

export async function getStaticProps(context) {
    return {
        props: {}
    }
}