// import {exhibition} from "/public/pictures/IBArtworks/pictures.js";
import * as icons from "/public/icons/icons.js"
import * as IB from "/public/pictures/IBArtworks/pictures.js"
import * as travel from "/public/pictures/Travel_Artworks/pictures.js"
// import Image from "next/image"
import Link from 'next/link'

import {NavBar2} from "../components/navBar/navBar.js"
import {Footer} from "../components/footer/footer.js"
// import {Albums} from "../components/artAlbums/albums.js"
import style1 from '../about/page.css'
import style2 from './page.css'

export default function Artworks() {
    return(
    <div>
        <NavBar2 />
        <Albums />
        <MyJourney />
        <MediaStyle />
        <Footer />
    </div>
    )
}

/*********************************** Albums ***********************************/

export function Albums() {
    return(
    <div className="albums-box">
    <div className="albums">
        <p className="title">ALBUMS</p>
        <div className="albums-innerbox">
            <Link href="/artwork/IB">
                <img className="cover" src={IB.exhibition.imageURL} alt="IB Art exhibition"></img>
            </Link>
            <Link href="/artworks/Travel">
                <img className="cover" src={travel.Evening_in_Suzhou.imageURL}></img>
            </Link>
        </div>
        <div className="navigation">
            <img className="arrow" src={icons.Left}></img>
            <img className="arrow" src={icons.Right}></img>
        </div>
    </div>
    </div>
    )
}

/*********************************** My Journey ***********************************/

function MyJourney() {
    return (
        <div className="myJourney">
            <div className="mainBlock">
                <p className='title'>MY JOURNEY</p>
                <p className="body">
                I started my journey as an artist when I was 3 years old. 
                Interestingly enough, it was one of the very few hobbies 
                I stuck with from the many extracurricular classes my mom 
                planned for me. I progressed from simple arts and crafts to 
                honing my foundations with still-life sketching. After going 
                abroad, I began exploring acrylic painting and other more 
                colorful media during my art lessons. In high school, I started 
                experimenting with mixed media, but I have mostly stayed within 
                my comfort zone of hyper-realism.
                <br/> <br/>
                Currently, I am trying out digital media and more abstract art, 
                such as pixel art, and I also have a strong desire to learn 3D 
                art using Blender.
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
                I have had the most experience with acrylics, graphic art 
                (pencil, charcoal), and pastels. Funnily enough, I am not great with water 
                colour, but I can make-do. Currently, I am venturing 
                into digital art, primarily using Procreate for freehand 
                drawing and painting, as well as Aseprite for pixel art and animation.
                <br /> <br />
                Additionally, I am a newbie in photography, experimenting with cyanotype, 
                a chemical process that produces a beautiful blue color, and, of course, 
                I use my phone for photography as well.
                </p> 
            </div>
            <div className='block'>
                <p className='title'>STYLE</p>
                <p className='body'>
                    I mainly concern myself with realism, because I think it's the easiest 
                    to pick up (just copy what you see!). I've tried the cartoonish styles 
                    commonly seen in anime, but using oil pastels is what really pushed me out 
                    of my realism bubble. As mentioned before, I want to explore the lesser 
                    traditional styles, including pixel art and 3D art.
                </p> 
            </div>
            </div>
        </div>
    )
}

// function draft() {
//     return(
//         <div>
//             <p>
//                 Here is my art instagram account: @artisanjelica
//             </p>
            
//             {/* IB artworks */}
//             <section>
//             <h2><Link href="/artworks/IB">IB Diploma exhibition</Link></h2>
//             <Image
//                 src={exhibition.imageURL}
//                 alt={exhibition.name}
//                 width={exhibition.width/5}
//                 height={exhibition.height/5}
//                 // layout="responsive"
//             />
//             </section>
    
//             {/* Travel artworks */}
//             <section>
//             <h2><Link href="/artworks/Travel">Travel artworks</Link></h2>
//             </section>
//         </div>
//         )
// }