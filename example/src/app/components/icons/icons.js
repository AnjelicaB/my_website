'use client'
import Link from 'react'
import useRouter from 'next/navigation'
import * as icons from "/public/icons/icons.js"

import styles from "./icons.css"

/////////////////////////////////////// Nav Bar ///////////////////////////////////////

// logo
export function Logo1() {
    return (
    // <Link to="/" className="Logo">
    //     <a href="" className="Logo">
    //         <img className="Logo" src={Logo1URL} alt="Logo"/>
    //     </a>
    // </Link>

    // <NavLink href="/" className="site-title">Anjelica's Website</NavLink>

    <button type="button" onClick={() => router.push('/')}>
        <img className="Logo" src={icons.Logo1URL} alt="Logo"/>
    </button>
    )
}

export function Logo2() {
    return (
    // <Link to="/" className="Logo">
    //     <a href="" className="Logo">
    //         <img className="Logo" src={Logo2URL} alt="Logo"/>
    //     </a>
    // </Link>

    <button type="button" onClick={() => router.push('/')} className="Logo">
        <img src={icons.Logo2URL} alt="Logo"/>
    </button>
    )
}

///////////////////////////////////////  Footer ///////////////////////////////////////