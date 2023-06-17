import Link from 'next/link';

export default function NavBar() {
    return (
    <nav className="nav">
        <Link href="/" className="site-title">Anjelica's Website</Link>
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