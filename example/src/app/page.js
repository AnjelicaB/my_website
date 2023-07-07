import styles from "./page.css" 

import {NavBar1} from "./components/navBar/navBar.js"

export default function Page() {
    return(
        <div>
          <NavBar1 />
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
