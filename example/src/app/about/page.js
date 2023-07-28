'use client'

import Link from 'next/link'
import {NavBar2} from "../components/navBar/navBar.js"
import {Footer} from "../components/footer/footer.js"
import * as icons from '/public/icons/icons.js'
import * as about from '/public/pictures/About/pictures.js'
// import Pdf from "./Anjelica's_Resume.pdf"

import styles from './page.css'

export default function About() {
    return(
        <div className='content'>
            <NavBar2/>
            <Intro />
            <Countries />
            <Description />
            <Footer />
        </div>
    )
}

function Intro() {
    return (
        <div className='Intro'> 
            <p className="name_about">Anjelica Bian</p>
            <p className="profession_about">Engineer - Artist - Cornell Sophomore</p>
            <p className="links_about">
                <Resume />
                <Github />
                <Email />
            </p>
        
            <img className="profile_about" src={about.profileURL} alt="Profile"/>
        </div>
    )
}

function Resume() {
    return (
        <Link href="" className='link'>RESUME</Link>
    )
}

function Github() {
    return (
        <Link href="https://github.com/AnjelicaB" className='link'>GITHUB</Link>
    )
}

function Email() {
    return (
        <Link href= "mailto:yb265@cornell.edu" className='link'>EMAIL</Link>
    )
}

function Countries() {
    return (
        <div className='countries'>
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

function Description() {
    return(
    <div className='description'>
        <div className='mainBlockRow'>
            <div className='block'>
                <p className='title'>ACADEMICS</p>
                <p className='body'>
                    I am a sophomore at Cornell University, planning on studying 
                    Electrical and Computer Engineering with a minor in Computer Science and
                    either maths or data science.
                </p> 
            </div>
            <div className='block'>
                <p className='title'>CURRENTLY</p>
                <p className='body'>
                    I am in our school's EmPRISE Robotics Lab, the Phi Chi Theta 
                    professional business fraternity and a member of the Development in 
                    Games Association on the business subteam. That said, 
                    my career interests lie at the intersection between technology and 
                    business, namely engineering and consulting.
                </p> 
            </div>
            <div className='block'>
                <p className='title'>HOBBIES</p>
                <p className='body'>
                    I am an avid artist, mainly working with traditional media such as graphite and acrylic, but 
                    I've been experimenting with digital art and animation. I've explored the Cornell 
                    Rowing Club, Origami Club, some naturalist clubs and I'm looking to 
                    exploring more! 
                </p> 
            </div>
        </div>
    </div>
    )
}

function blah() {
    <>
    <p>
    I am a rising sophomore at Cornell University, and I plan on studying 
    Electrical and Computer Engineering with a minor in Computer Science and
    either maths or data science.
    </p> 

    <p>
    I am in our school's robotics lab called the EmPRISE Robotics Lab, and 
    I am in a professional business fraternity called Phi Chi Theta. That said, 
    my professional interests lie at the intersection between technology and 
    business. Beyond software engineering, I am also interested in consulting.
    </p> 

    <p>
            Outside of my academic and professional careers, I am an avid artist and 
            I love trying out new things. I've explored the Cornell 
            Rowing Club, Origami Club, some naturalist clubs and I'm looking to 
            exploring more!
            </p>
    </>
}