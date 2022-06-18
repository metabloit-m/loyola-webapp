import Metabloit from "../models/form";
import dbConnect from "../lib/dbConnect";
import React from "react";
import Table from "../components/table";
import router from "next/router"

export async function getServerSideProps({params}) {
    await dbConnect();

    const result = await Metabloit.find({})
    const members = result.map((doc) => {
        const member = doc.toObject()
        member._id = member._id.toString()
        return member
    })

    const registerForm = {
        first_name: '',
        last_name: '',
        yoe: '',
        yog: '',
        fam_teacher: '',
        result: '',
        occup: '',
        address: '',
        email: '',
        phone: ''
    }

    return {
        props: {
            members: members,
            registerForm: registerForm
        }
    }
}

export default function Members({members, registerForm}) {

    return (
        <>
            <div id="top_members" className="min-h-screen">
                {/*<div className={`${blur ? "blur-sm" : ""}`}></div>*/}
                <div className="hero space-x-4 items-center">
                    <div className="flex-col hero-content overflow-x-auto w-full">
                        <div className={`max-w-7xl w-full`}>
                            <div className="divider">Our Alumni</div>
                            <Table data={members} rowsPerPage={5}/>
                        </div>
                        <div className="mockup-code flex flex-col space-y-2 max-w-sm mx-auto p-4">
                            <code className="text-warning">If you are an alumnus/alumnae, and you are not registered,
                                click the button below to sign up!</code>
                            <label htmlFor="my-modal-3"
                                   className={`btn modal-button mx-auto`}
                                   onClick={() => {
                                       router.push("/alumni_reg")
                                   }}>Register!</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
