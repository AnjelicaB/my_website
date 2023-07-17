"use client"

import { motion, AnimatePresence } from "framer-motion" 
import { useState, useEffect, createContext } from 'react';

export function AlbumSection() {
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