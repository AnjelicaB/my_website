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
                    <Link href="/about" className='Header'>ABOUT</Link>
                </li>
                <li>
                    <Link href="/artworks" className='Header'>ARTWORKS</Link>
                </li>
                <li>
                    <Link href="/projects" className='Header'>PROJECTS</Link>
                </li>
                <li>
                    <Link href="/photos" className='Header'>PHOTOS</Link>
                </li>
            </ul>
        </nav>
    )
}