import React from "react";

export default function About() {

    return (
        <>
            <div id="top_about" className="min-h-screen flex">
                <article
                    className="prose md:prose-lg mx-auto h-full w-full max-w-4xl shadow-md rounded-md items-center p-20 space-y-16 mt-6 mb-16">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-normal tracking-tight font-serif">Welcome to Loyola High
                            School</h1>
                        <p className="tracking-tight">Loyola High School is a Jesuit Secondary School offering quality
                            education. It is a Catholic
                            School
                            open to both boys and girls of all religious persuasions.</p>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-normal tracking-tight font-serif">School Vision</h1>
                        <p className="tracking-tight">Loyola stands for excellence in both academics and human
                            formation. The goal held out to all
                            students at Loyola High School is integrated personal development as individuals and as
                            members
                            of the larger society. Each student therefore is challenged to develop fully with a vibrant
                            desire to work for the development of the neighbor and of the nation, and that each student
                            progressively becomes a better person and therefore a person for others.</p>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-normal tracking-tight font-serif">School Mission</h1>
                        <p className="tracking-tight">Inspired by Jesuit intellectual tradition, Loyola High School
                            educates young people to become
                            morally responsible men and women for others who think critically, act wisely, and work
                            skillfully to advance the common good.</p>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-normal tracking-tight font-serif">School Location</h1>
                        <p className="tracking-tight">Loyola High school is in Dar Es Salaam at Mabibo Farasi,
                            approximately 10.6 km west of the
                            Dar Es Salaam city Centre. The school lies between Mandela and Morogoro Roads. The entrance
                            to
                            the school is located on Old Kigogo Road</p>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-normal tracking-tight font-serif">School Working Hours</h1>
                        <p className="tracking-tight">From 8:00am - 4:00pm, Monday to Friday.</p>
                    </div>
                </article>
            </div>
        </>
    )
}

export async function getStaticProps(context) {
    return {
        props: {}
    }
}