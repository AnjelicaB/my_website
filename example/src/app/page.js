import styles from "./page.css" 

import {NavBar1} from "./components/navBar/navBar.js"

export default function Page() {
    return(
        <div>
          <NavBar1 />
          <intro>
            <p className="greeting">
              Hello!
              <br/>
              I'm Anjelica
            </p>
            <p className='profession_home'>
              ENGINEER
              <br/>
              <span className="ampersand">&</span> ARTIST
            </p>
          </intro>
        </div>
    )
}
