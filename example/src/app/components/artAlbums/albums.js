import * as IB from "/public/pictures/IBArtworks/pictures.js"
import * as travel from "/public/pictures/Travel_Artworks/pictures.js"
import * as icons from "/public/icons/icons.js"
import style1 from '/src/app/about/page.css'
import styles2 from "./albums.css"
import Link from 'next/link'

export function Albums() {
    return(
    <div className="albums-box">
    <div className="albums">
        <p className="title">ALBUMS</p>
        <div className="albums-innerbox">
            <Link href="/artwork">
                <img className="cover" src={IB.exhibition.imageURL} alt="IB Art exhibition"></img>
            </Link>
            <img className="cover" src={travel.Evening_in_Suzhou.imageURL}></img>
        </div>
        <div className="navigation">
            <img className="arrow" src={icons.Left}></img>
            <img className="arrow" src={icons.Right}></img>
        </div>
    </div>
    </div>
    )
}