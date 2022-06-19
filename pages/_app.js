import "../styles/globals.css"
import React from "react";
import Navbar from "../components/nav";
import {useRouter} from "next/router";
import Footer from "../components/footer";
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import router from "next/router";

// NProgress.configure({showSpinner: false});
router.events.on('routeChangeStart', () => NProgress.start());
router.events.on('routeChangeComplete', () => NProgress.done());
router.events.on('routeChangeError', () => NProgress.done());

export default function App({Component, pageProps}) {
    const router = useRouter();
    const pathName = router.pathname.substring(1, router.pathname.length).toLowerCase();
    const path = router.pathname;
    const [theme, setTheme] = React.useState("light");

    const handleTheme = value => {
        value ? setTheme("dark") : setTheme("light")
    }

    return (
        <div data-theme={theme} className={`${theme}:bg-white`}>
            <div id="top" className="min-h-screen">
                <Navbar name={pathName} handleTheme={handleTheme} path={path}/>
                <Component {...pageProps}/>
            </div>
            <Footer/>
        </div>
    )
}
