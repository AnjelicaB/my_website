//import {useRouter} from 'next/navigation'
import Link from 'next/link'
import {Logo1} from '../icons/icons.js'

import styles from './navBar.css'

export default function NavBar() {
    return (
        <nav>
            <Logo1 />
            <ul>
                <li>
                    <Link href="/">ABOUT</Link>
                </li>
                <li>
                    <Link href="/artworks">ARTWORKS</Link>
                </li>
                <li>
                    <Link href="/projects">PROJECTS</Link>
                </li>
                <li>
                    <Link href="/photos">PHOTOS</Link>
                </li>
            </ul>
        </nav>
    )
}