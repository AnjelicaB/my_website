import {exhibition, inspired, selfDirected, selfPortrait, box, lastPiece, collage1, collage2} from "/public/pictures/IBArtworks/pictures.js"
import Image from "next/image"

function IB() {
    <div ></div>
}

function Title() {
    return (
    <div className="title-box">

    </div>
    )
}

function Overview() {
    return (
    <div className="overview">

    </div>
    )
}

function ArtworksCollection() {
    return (
    <div className="artworks-collection">
    </div>
    )
}

function artwork() {
    return (
        <div className="artwork">
        </div>
    )
}

function IBArtworks() {
    return(
    <div>
        <section>
            <Image
                src={exhibition.imageURL}
                alt={exhibition.name}
                width={exhibition.width/5}
                height={exhibition.height/5}
                // layout="responsive"
            />
            <h3>Artist Rationale</h3>
            <p>{exhibition.description}</p>
        </section>
        
        {/* inspired */}
        <section>
            <h2>{inspired.name} ({inspired.time})</h2>
            <Image
                src={inspired.imageURL}
                alt={inspired.name}
                width={inspired.width/5}
                height={inspired.height/5}
                // layout="responsive"
            />
            <h3>Medium</h3>
            <p>{inspired.medium}</p>
            <h3>Description</h3>
            <p>{inspired.description}</p>
        </section>

        {/* selfDirected */}
        <section>
            <h2>{selfDirected.name} ({selfDirected.time})</h2>
            <Image
                src={selfDirected.imageURL}
                alt={selfDirected.name}
                width={selfDirected.width/5}
                height={selfDirected.height/5}
                // layout="responsive"
            />
            <h3>Medium</h3>
            <p>{selfDirected.medium}</p>
            <h3>Description</h3>
            <p>{selfDirected.description}</p>
        </section>

        {/* selfPortrait */}
        <section>
            <h2>{selfPortrait.name} ({selfPortrait.time})</h2>
            <Image
                src={selfPortrait.imageURL}
                alt={selfPortrait.name}
                width={selfPortrait.width/5}
                height={selfPortrait.height/5}
                // layout="responsive"
            />
            <h3>Medium</h3>
            <p>{selfPortrait.medium}</p>
            <h3>Description</h3>
            <p>{selfPortrait.description}</p>
        </section>

        {/* box */}
        <section>
            <h2>{box.name} ({box.time})</h2>
            <Image
                src={box.imageURL}
                alt={box.name}
                width={box.width/5}
                height={box.height/5}
                // layout="responsive"
            />
            <h3>Medium</h3>
            <p>{box.medium}</p>
            <h3>Description</h3>
            <p>{box.description}</p>
        </section>

        {/* lastPiece */}
        <section>
            <h2>{lastPiece.name} ({lastPiece.time})</h2>
            <Image
                src={lastPiece.imageURL}
                alt={lastPiece.name}
                width={lastPiece.width/5}
                height={lastPiece.height/5}
                // layout="responsive"
            />
            <h3>Medium</h3>
            <p>{lastPiece.medium}</p>
            <h3>Description</h3>
            <p>{lastPiece.description}</p>
        </section>

        {/* collage */}
        <section>
            <h2>left: {collage1.name} | right: {collage2.name} ({collage1.time})</h2>
            <Image
                src={collage1.imageURL}
                alt={collage1.name}
                width={collage1.width/5}
                height={collage1.height/5}
                // layout="responsive"
            />
            <Image
                src={collage2.imageURL}
                alt={collage2.name}
                width={(collage2.width*collage1.height/collage2.height)/5}
                height={collage1.height/5}
                // layout="responsive"
            />
            <h3>Medium</h3>
            <p>{collage1.medium}</p>
            <h3>Description</h3>
            <p>{collage1.description}</p>
        </section>
    </div>
    )
}