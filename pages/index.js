import React from "react";
import style from "../components/index.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Home() {

    return (
        <div className="snap-y snap-mandatory">
            <div
                className={`${style.container} min-h-screen snap-always snap-start hero bg-gradient-to-b from-gray-700 to-red-200 `}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="font-bold text-5xl mb-5">Welcome</h1>
                        <p className="mb-5 ">
                            Our school educates young people to become men and women for others in the society. Our focus
                            is not only in academics but also train your child to achieve human excellence.
                        </p>
                        <p className="mb-5 text-2xl text-red-600 italic">
                            "In all things to love and serve"
                        </p>
                        <Link href="/#details">
                        <button className="btn">
                            Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="snap-always snap-start">
                <div id="details" className="min-h-screen container space-x-4 px-20 mx-auto sm:items-stretch">
                    <div className="md:grid md:grid-cols-3 items-center place-items-center py-8 mt-10">
                        <div
                            className="card image-full max-w-sm h-96 mt-4 md:w-full flex flex-col shadow-lg border-gray-700 dark:bg-gray-800 justify-between">
                            <figure>
                                <Image src="/images/9.png" layout="fill"/>
                            </figure>
                            <div className="card-body">
                                <h1 className="font-bold mb-3 card-title text-3xl">Staff</h1>
                                <p className="text-sm ">
                                    Loyola High School consists of very well trained staffs that make sure the school
                                    consists
                                    of a very good learning environment and enable students not only excel in academics
                                    but
                                    also in extra-curricular activities and being men and women for others.
                                </p>
                                <div className="card-actions justify-end">
                                    <Link href="/staff">
                                    <a>
                                        <button className="btn btn-ghost p-2">
                                            See our Staffs
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                            </svg>
                                        </button>
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card image-full max-w-sm h-96 mt-4 md:w-full flex flex-col shadow-lg border-gray-700 dark:bg-gray-800 justify-between">
                            <figure>
                                <Image src="/images/13.jpg" layout="fill"/>
                            </figure>
                            <div className="card-body">
                                <h1 className="font-bold mb-3 card-title text-3xl">Alumni</h1>
                                <p className="text-sm">
                                    The Alumni Association consists of those who studied at Loyola High School.
                                    Get to know the members of the Alumni Association
                                </p>
                                <div className="card-actions justify-end">
                                    <Link href="/members">
                                    <a>
                                        <button className="btn btn-ghost p-2">
                                            Know our Alumni
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                            </svg>
                                        </button>
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card image-full max-w-sm h-96 mt-4 md:w-full flex flex-col shadow-lg border-gray-700 dark:bg-gray-800 justify-between">
                            <figure>
                                <Image src="/images/11.png" layout="fill"/>
                            </figure>
                            <div className="card-body">
                                <h1 className="font-bold mb-3 card-title text-3xl">About</h1>
                                <p className="text-sm">
                                    Loyola High School is a Jesuit Secondary School offering quality education. It is a
                                    Catholic School open to both boys and girls of all religious persuasions.
                                    Loyola stands for excellence in both academics and human formation. The goal held
                                    out to all students at Loyola High School is integrated personal development as
                                    individuals and as members of the larger society.
                                </p>
                                <div className="card-actions justify-end">
                                    <Link href="/about">
                                    <a>
                                        <button className="btn btn-ghost p-2">
                                            Read More
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                            </svg>
                                        </button>
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-3 mt-28 mb-8 items-center flex mx-auto justify-center">
                            <div className="stats shadow">
                                <div className="stat self-center text-center">
                                    <div className="stat-title">Graduates</div>
                                    <div className="stat-value">25,596+</div>
                                    <div className="stat-desc">and counting...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="min-h-screen snap-always snap-start">
                <div className="p-12 w-full">
                    <div className="md:grid md:grid-cols-3 md:gap-6 md:space-x-72 place-items-center space-y-2 ">
                        <h1 className="text-5xl md:col-span-3 font-light text-center mb-4">Contact Us</h1>
                        <div className="md:max-w-md md:w-full px-4 justify-center md:col-span-1 w-full space-y-8 mb-8">
                            <div className="container space-y-2">
                                <h1 className="text-5xl ">Where can you find us?</h1>
                                <p className="text-xl text-slate-400">Physical address:</p>
                            </div>
                            <div className="container space-y-8">
                                <div className="grid grid-cols-3">
                                    <div className="md:col-span-1 items-center justify-center self-center mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                        </svg>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-md">Loyola High School</p>
                                        <p className="text-md">P.O. Box 9533</p>
                                        <p className="text-md">Mabibo Farasi</p>
                                        <p className="text-md">Dar es Salaam, Tanzania</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3">
                                    <div className="md:col-span-1 items-center justify-center self-center mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-md">+255769844812</p>
                                        <p className="text-md">+255785805115</p>
                                        <p className="text-md">+255658233088</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3">
                                    <div className="md:col-span-1 items-center justify-center self-center mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                                        </svg>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-md">loyoladar@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="md:col-span-2 items-center">
                            <form method="" action="">
                                <div className="container py-4 space-y-8">
                                    <input type="text"
                                           className="input input-md rounded-md border border-neutral w-full"
                                           placeholder="Full name"/>
                                    <input type="text"
                                           className="input input-md rounded-md border border-neutral w-full"
                                           placeholder="Phone"/>
                                    <input type="text"
                                           className="input input-md rounded-md border border-neutral w-full"
                                           placeholder="Email"/>
                                    <textarea className="textarea border border-neutral h-48 w-full"
                                              placeholder="Message"></textarea>
                                    <button className="btn btn-active w-32 ">Send</button>
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