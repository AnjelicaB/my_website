'use client'

//import {useRouter} from 'next/navigation'
import {NavLink, Link} from 'react'
import * as icons from '../icons/icons.js'

export function NavBar() {
    return (
        <nav className="navBar">
            <icons.Logo1 />
            <ul>
                <li>
                    <Link href="/">About</Link>
                </li>
                <li>
                    <Link href="/artworks">Artworks</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/photos">Photos</Link>
                </li>
            </ul>
        </nav>
    )
}