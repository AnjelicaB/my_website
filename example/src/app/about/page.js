"use client"

import Link from 'next/link'
import {NavBar2} from "../components/navBar/navBar.js"
import * as icons from '/public/icons/icons.js'
import * as about from '/public/pictures/About/pictures.js'
// import Pdf from "./Anjelica's_Resume.pdf"

import styles from './page.css'

export default function About() {
    return(
        <div>
        <NavBar2 />
        <section className="intro">
            <Intro/>
        </section>
        <section className="countries">
            <Countries />
        </section>
        <section className="description">
            
        </section>
        </div>
    )
}

function Intro() {
    return (
        <div>
        <text>
            <p className="name">Anjelica Bian</p>
            <p className="profession">Engineer - Artist - Cornell Sophomore</p>
            <p className="links">
                <Link href="" className='link'>RESUME</Link>
                <Link href="https://github.com/AnjelicaB" className='link'>GITHUB</Link>
                <Link href= "mailto:yb265@cornell.edu" className='link'>EMAIL</Link>
            </p>
        </text>
        <picture>
            <img className="profile" src={about.profileURL} alt="Profile"/>
        </picture>
        </div>
    )
}

function Countries() {
    return (
        <div>
        <ul className="flags">
            <li>
                <img className="flag" src={icons.ChineseFlag} alt="Chinese Flag"/>
            </li>
            <li>
                <img className="flag" src={icons.PanamaFlag} alt="Panama Flag"/>
            </li>
            <li>
                <img className="flag" src={icons.GermanFlag} alt="German Flag"/>
            </li>
            <li>
                <img className="flag" src={icons.AmericanFlag} alt="American Flag"/>
            </li>
        </ul>
        </div>
    )
}

function draft() {
    <>
        <p>
        Hello! My name is Anjelica. 
        <br />
        <br />
        I am a rising sophomore at Cornell University, and I plan on studying 
        Electrical and Computer Engineering with a minor in Computer Science and
        either maths or data science. 
        <br />
        <br />
        I am in our school's robotics lab called the EmPRISE Robotics Lab, and 
        I am in a professional business fraternity called Phi Chi Theta. That said, 
        my professional interests lie at the intersection between technology and 
        business. Beyond software engineering, I am also interested in consulting.
        <br />
        <br />
        Outside of my academic and professional careers, I am an avid artist and 
        I love trying out new things. I've explored the Cornell 
        Rowing Club, Origami Club, some naturalist clubs and I'm looking to 
        exploring more!
        <br />
        I created this website to document my interests outside of school. Feel free
        to reach out at yb265@cornell.edu.
        </p>
        </>
}