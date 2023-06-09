import {exhibition} from "/public/pictures/IBArtworks/pictures.js";
//import {exhibition} from "/public/Travel_Artworks/pictures/pictures.js";
import Image from "next/image";
import Link from 'next/link';

import {NavBar2} from "../components/navBar/navBar.js"
import styles from '../about/page.css'

export default function Artworks() {
    return(
    <div>
        <NavBar2 />
        <Albums />
    </div>
    )
}

function Albums() {
    return (
    <div className="albums">
        <div className="mainBlock">
            <p className='title'>ACADEMICS</p>
        </div>
    </div>
    )
}

function draft() {
    return(
        <div>
            <p>
                Here is my art instagram account: @artisanjelica
            </p>
            
            {/* IB artworks */}
            <section>
            <h2><Link href="/artworks/IB">IB Diploma exhibition</Link></h2>
            <Image
                src={exhibition.imageURL}
                alt={exhibition.name}
                width={exhibition.width/5}
                height={exhibition.height/5}
                // layout="responsive"
            />
            </section>
    
            {/* Travel artworks */}
            <section>
            <h2><Link href="/artworks/Travel">Travel artworks</Link></h2>
            </section>
        </div>
        )
}