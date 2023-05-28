'use client';
import Image from 'next/image'
import {AboutPage} from './sections.js'
import {Artworks} from './sections.js'
import {Projects} from './sections.js'
import {Photos} from './sections.js'
import { useState } from 'react';

export default function Home() {
  const [state, setState] = useState(0);
    
  function handleClick({newState}) {
    setState(newState);
  }
  
  function displayedSection() {
    switch (state) {
        case 0:
            return <AboutPage/>
        case 1:
            return <Artworks/>
        case 2:
            return <Projects/>
        case 3:
            return <Photos/>
        default:
            return <AboutPage/>
    }
  }

  return (
    <main>
    <div>
      <h1>
        Welcome to my website!
      </h1>
    </div>

    <MyButton name = "About" onClick={handleClick(0)} />
    <MyButton name = "Artworks" onClick={handleClick(1)} />
    <MyButton name = "Projects" onClick={handleClick(2)} />
    <MyButton name = "Photos" onClick={handleClick(3)} />

    <div>
      <displayedSection/>
    </div>
    </main>
  )
}

function MyButton({name, onClick}) {
  return (
      <button onClick={onClick}>
          {name}
      </button>
  );
}