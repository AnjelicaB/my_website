//import {useRouter} from 'next/navigation'
import Link from 'next/link'
import {Logo1, Logo2} from '../icons/icons.js'

import styles from './navBar.css'

export function NavBar1() {
    return (
        <nav1>
            <Logo1 />
            <ul className='navItems'>
                <li>
                    <Link href="/about" className='header1'>ABOUT</Link>
                </li>
                <li>
                    <Link href="/artworks" className='header1'>ARTWORKS</Link>
                </li>
                <li>
                    <Link href="/projects" className='header1'>PROJECTS</Link>
                </li>
                <li>
                    <Link href="/photos" className='header1'>PHOTOS</Link>
                </li>
            </ul>
        </nav1>
    )
}

export function NavBar2() {
    return (
        <nav2>
            <nav2inner className= "sticky">
            <Logo2 />
            <ul className='navItems'>
                <li>
                    <Link href="/about" className='header2'>ABOUT</Link>
                </li>
                <li>
                    <Link href="/artworks" className='header2'>ARTWORKS</Link>
                </li>
                <li>
                    <Link href="/projects" className='header2'>PROJECTS</Link>
                </li>
                <li>
                    <Link href="/photos" className='header2'>PHOTOS</Link>
                </li>
            </ul>
            </nav2inner>
        </nav2>
    )
}