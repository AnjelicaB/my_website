'use client'
import Link from 'next/link'
import * as icons from "/public/icons/icons.js"

import styles from "./icons.css"

/////////////////////////////////////// Nav Bar ///////////////////////////////////////

// logo
export function Logo1() {
    //router = useRouter();
    return (
    <Link href="/">
        <img className="Logo" src={icons.Logo1URL} alt="Logo"/>
    </Link>

    // <NavLink href="/" className="site-title">Anjelica's Website</NavLink>

    // <button type="button" onClick={() => router.push('/')}>
    //     <img className="Logo" src={icons.Logo1URL} alt="Logo"/>
    // </button>
    )
}

export function Logo2() {
    return (
    // <Link to="/" className="Logo">
    //     <a href="" className="Logo">
    //         <img className="Logo" src={Logo2URL} alt="Logo"/>
    //     </a>
    // </Link>

    <Link href="/">
        <img className="Logo" src={icons.Logo2URL} alt="Logo"/>
    </Link>

    // <button type="button" onClick={() => router.push('/')} className="Logo">
    //     <img className="Logo" src={icons.Logo2URL} alt="Logo"/>
    // </button>
    )
}

///////////////////////////////////////  Footer ///////////////////////////////////////

export function Sign1() {
    return (
        <Link href="/">
            <img className='Signiture' src={icons.Sign3} alt="Signiture"/>
        </Link>
    )
}

export function Email() {
    return (
        <Link href= "mailto:yb265@cornell.edu" className="social_media">
            <img className="Social_medium" src={icons.Gmail} alt="Email"/>
        </Link>
    )
}

export function Github() {
    return (
        <Link href="https://github.com/AnjelicaB" className="social_media">
            <img className="Social_medium" src={icons.Github} alt="Email"/>
        </Link>
    )
}

export function Insta() {
    return (
        <Link href="https://instagram.com/artisanjelica?igshid=MmIzYWVlNDQ5Yg==" className="social_media">
            <img className="Social_medium" src={icons.Insta} alt="Instagram"/>
        </Link>
    )
}