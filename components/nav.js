import React, {useState} from "react";
import Link from "next/link";
import {Disclosure} from "@headlessui/react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar({name, handleTheme, path}) {
    let navigation = [
        {index: 0, name: 'Home', href: '/', current: name === ''},
        {index: 1, name: 'Register', href: '/register', current: name === 'register'},
        {index: 2, name: 'Alumni', href: '/members', current: name === 'members'},
        {index: 3, name: 'Staff', href: '/staff', current: name === 'staff'},
        {index: 4, name: 'About', href: '/about', current: name === 'about'},
    ]

    const [show, setShow] = useState(false);
    const [nav, setNav] = React.useState(navigation);


    React.useEffect(() => {
        // console.log("Change")
    }, [nav]);

    return (
        <Disclosure as="nav" className="bg-light-700">
            {({open}) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-6">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="inset-y-0 left-0 flex absolute items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md
                                text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2
                                focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link href="/">
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                                                 fill="currentColor"
                                                 className="bi bi-github" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                        </a>
                                    </Link>
                                    <p className="ml-4">Metabloit</p>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map(item => (
                                            <Link key={item.name} href={item.href}>
                                                <a className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                                                    , 'px-3 py-2 rounded-md text-sm font-medium'
                                                )} onClick={() => {
                                                    setNav(nav.map(element => {
                                                        if (element.index !== item.index) element.current = false;
                                                        else if (element.index === item.index) element.current = true;
                                                        return element;
                                                    }));
                                                }}>
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden sm:block sm:flex space-x-8 max-w-xs mt-2 justify-end">
                                <div className="space-x-4">
                                    <Link href="/#contact">
                                        <button
                                            className={`btn btn-outline btn-error self-justify-end mb-2 ${path === '/' ? '' : 'sr-only'}`}>
                                            Contact
                                        </button>
                                    </Link>
                                </div>

                                <label htmlFor="theme" className="swap swap-rotate mb-2">
                                    <input id="theme" className="hidden input" type="checkbox"
                                           onChange={event => {
                                               handleTheme(event.target.checked);
                                           }}/>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="swap-on h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="swap-off h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 items-center mx-auto ">
                            {navigation.map(item => (
                                <Link key={item.name} href={item.href}>
                                    <a className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                                        , 'px-3 py-2 rounded-md text-sm font-medium w-full flex justify-center'
                                    )} onClick={() => {
                                        setNav(nav.map(element => {
                                            if (element.index !== item.index) element.current = false;
                                            else if (element.index === item.index) element.current = true;
                                            return element;
                                        }));
                                    }}>
                                        {item.name}
                                    </a>
                                </Link>
                            ))}

                            <div className="space-x-4">
                                <Link href="/#contact">
                                    <button
                                        className={`btn btn-wide btn-outline w-full btn-error self-justify-end mb-2 ${path === '/' ? '' : 'sr-only'}`}>
                                        Contact
                                    </button>
                                </Link>
                            </div>

                            <label htmlFor="theme" className="swap swap-rotate mb-2 flex justify-center">
                                <input id="theme" className="hidden input" type="checkbox"
                                       onChange={event => {
                                           handleTheme(event.target.checked);
                                       }}/>
                                <svg xmlns="http://www.w3.org/2000/svg" className="swap-on h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="swap-off h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                                </svg>
                            </label>
                        </div>

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}