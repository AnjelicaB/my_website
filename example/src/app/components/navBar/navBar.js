//import {useRouter} from 'next/navigation'
import Link from 'next/link'
import {Logo1} from '../icons/icons.js'

export default function NavBar() {
    return (
        <nav className="navBar">
            <Logo1 />
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