import {About} from "./about"
import {NavBar} from "./components/navBar/navBar.js"

import Link from 'next/link';

export default function Page() {
    return(
        <div>
          <NavBar />
          <About />
        </div>
    )
}