'use client'
import Link from 'react'
import useRouter from 'next/navigation'
import * as icons from "/public/icons/icons.js"

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

    <button type="button" onClick={() => router.push('/')} className="Logo">
        <img src={icons.Logo1URL} alt="Logo"/>
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

// about
export function AboutB() {
    return (
        // <Link href="/about" className="HeaderB">ABOUT</Link>
    <button type="button" onClick={() => router.push('/about')} className="HeaderB">
        ABOUT
    </button>
    )
}

export function AboutW() {
    return (
    // <Link to="/about" className="HeaderW">
    //     ABOUT
    // </Link>
    <button type="button" onClick={() => router.push('/about')} className="HeaderW">
        ABOUT
    </button>
    )
}

// artworks
export function ArtworksB() {
    const router = useRouter()

    return (
    // <Link to="/artworks" className="HeaderB">
    //     ARTWORKS
    // </Link>
    <button type="button" onClick={() => router.push('/artworks')} className="HeaderB">
        ARTWORKS
    </button>
    )
}

export function ArtworksW() {
    return (
    // <Link to="/artworks" className="HeaderW">
    //     ARTWORKS
    // </Link>
    <button type="button" onClick={() => router.push('/artworks')} className="HeaderW">
        ARTWORKS
    </button>
    )
}

// projects
export function ProjectsB() {
    return (
    // <Link to="/projects" className="HeaderB">
    //     PROJECTS
    // </Link>
    <button type="button" onClick={() => router.push('/projects')} className="HeaderB">
        PROJECTS
    </button>
    )
}

export function ProjectsW() {
    return (
    // <Link to="/projects" className="HeaderW">
    //     PROJECTS
    // </Link>
    <button type="button" onClick={() => router.push('/projects')} className="HeaderW">
        PROJECTS
    </button>
    )
}

// photos
export function PhotosB() {
    return (
    // <Link to="/photos" className="HeaderW">
    //     PHOTOS
    // </Link>
    <button type="button" onClick={() => router.push('/photos')} className="HeaderB">
        PHOTOS
    </button>
    )
}

export function PhotosW() {
    return (
    // <Link to="/photos" className="HeaderW">
    //     PHOTOS
    // </Link>
    <button type="button" onClick={() => router.push('/photos')} className="HeaderW">
        PHOTOS
    </button>
    )
}

///////////////////////////////////////  Footer ///////////////////////////////////////