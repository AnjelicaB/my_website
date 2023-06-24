import {Evening_in_Suzhou} from "/public/pictures/Travel_Artworks/pictures.js"
import Image from "next/image"

export default function IBArtworks() {
    return(
    <div>
        {/* Evening_in_Suzhou */}
        <section>
            <h2>{Evening_in_Suzhou.name} ({Evening_in_Suzhou.time})</h2>
            <Image
                src={Evening_in_Suzhou.imageURL}
                alt={Evening_in_Suzhou.name}
                width={Evening_in_Suzhou.width/5}
                height={Evening_in_Suzhou.height/5}
                // layout="responsive"
            />
            <h3>Location</h3>
            <p>{Evening_in_Suzhou.location}</p>
            <h3>Medium</h3>
            <p>{Evening_in_Suzhou.medium}</p>
            <h3>Description</h3>
            <p>{Evening_in_Suzhou.description}</p>
        </section>
    </div>
    )
}