import styles from "./page.css" 

import About from "./about/page"
import NavBar from "./components/navBar/navBar.js"

import Link from 'next/link';

<link href="https://fonts.googleapis.com/css2?family=Grape+Nuts&display=swap" rel="stylesheet"></link>

export default function Page() {
    return(
        <div>
          <NavBar />
          <intro>
            <div className="greeting">Hello!
              <br/>
              I'm Anjelica
            </div>
            <div className='profession'>
              ENGINEER
              <br/>
              <span className="ampersand">&</span> ARTIST
            </div>
          </intro>
        </div>
    )
}
