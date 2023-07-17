import {exhibition} from "/public/pictures/IBArtworks/pictures.js";
import * as icons from "/public/icons/icons.js"
//import {exhibition} from "/public/Travel_Artworks/pictures/pictures.js";
import Image from "next/image"
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion" 
import { useState, useEffect, createContext } from 'react';

import {NavBar2} from "../components/navBar/navBar.js"
import {Footer} from "../components/footer/footer.js"
import style1 from '../about/page.css'
import style2 from './page.css'

export default function Artworks() {
    return(
    <div>
        <NavBar2 />
        <AlbumSection />
        <MyJourney />
        <MediaStyle />
        <Footer />
    </div>
    )
}

/*********************************** Albums ***********************************/

function AlbumSection() {
    return (
    <div className="albums">
        <div className="mainBlock">
            <p className='title'>ALBUMS</p>
            <Albums>
                <img
                src={exhibition.imageURL}
                alt={exhibition.name}
                width={exhibition.width}
                height={exhibition.height}
                // layout="responsive"
                />
            </Albums>
        </div>
    </div>
    )
}

function Albums( { children } ) {
    const [album, setAlbum] = useState(0) // Depends on how many albums there are
    return (
    <div>
        <motion.div 
            className="albumView"
            variants={sideScroll}>
            { children }
        </ motion.div>
        <button 
            className="button-left"
            onClick={() => setCount(min(2, max(album-1, 0)))}>
            <img 
                className="button" 
                src={icons.Left} 
                alt="Left"/>
        </button>
        <button 
            className="button-right" 
            onClick={() => setCount(min(2, max(album+1, 0)))}>
            <img 
                className="button" 
                src={icons.Right} 
                alt="Right"/>
        </button>
    </div>
    )
}

const sideScroll = {
    left: {
        left: "100px",
        top: "60px",
        transition: {
            duration: 0.4,
            type: "spring",
            damping: 100,
            stiffness: 500
        }
    },
    right: {
        right: "100px",
        top: "60px",
        transition: {
            duration: 0.4,
            type: "spring",
            damping: 100,
            stiffness: 500
        }
    },
    center: {
        left: "100%",
        top: "60px",
        transition: {
            duration: 0.4,
            type: "spring",
            damping: 100,
            stiffness: 500
        }
    },
}

/*********************************** My Journey ***********************************/

function MyJourney() {
    return (
        <div className="myJourney">
            <div className="mainBlock">
                <p className='title'>MY JOURNEY</p>
                <p className="body">
                    I've always loved art BLAH BLAH BLAH...
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. 
                    Sagittis purus sit amet volutpat consequat mauris nunc congue. 
                    Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. 
                    Risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt 
                    lobortis feugiat vivamus at. Risus at ultrices mi tempus. 
                    Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. 
                    Risus at ultrices mi tempus.
                </p>
            </div>
        </div>
        )
}

/*********************************** Media and Style ***********************************/

function MediaStyle() {
    return (
        <div className="mediastyle">
            <div className="mainBlockRow">
            <div className='block'>
                <p className='title'>MEDIA</p>
                <p className='body'>
                    I use acrylic and traditional media blah blah blah
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. 
                    Sagittis purus sit amet volutpat consequat mauris nunc congue. 
                </p> 
            </div>
            <div className='block'>
                <p className='title'>STYLE</p>
                <p className='body'>
                    I use realism blah blah blah
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. 
                    Sagittis purus sit amet volutpat consequat mauris nunc congue. 
                </p> 
            </div>
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