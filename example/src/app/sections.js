// function handleSwitch() {
//     switch (globalState) {
//         case 0:
//             <AboutPage />
//         case 1:
//             Artworks();
//         case 2:
//             Projects();
//         case 3:
//             Photos();
//     }
// }

// export function Page() {
//     const [state, setState] = useState(0);
    
//     function handleClick({newState}) {
//         setState(newState);
//     }

//     return (
//         <>
//         <MyButton name = "About" onClick={handleClick(0)} />
//         <MyButton name = "Artworks" onClick={handleClick(1)} />
//         <MyButton name = "Projects" onClick={handleClick(2)} />
//         <MyButton name = "Photos" onClick={handleClick(3)} />

//         {displayedSection(state)}
//         </>
//     )
// }

// export function MyButton({name, onClick}) {
//     return (
//         <button onClick={onClick}>
//             {name}
//         </button>
//     );
// }

export function AboutPage() {
    return(
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
        </p>
        </>
    )
}

function Artworks() {
    // TODO
}

function Projects() {
    // TODO
}

function Photos() {
    // TODO
}