import Image from 'next/image'
import AboutPage from './sections.js'
import MyButton from './sections.js'

export default function Home() {
  return (
    <main>
    <div>
      <h1>
        Welcome to my website!
      </h1>
    </div>

    <MyButton 
      name= 'About'
      state={0}
        />
    <MyButton 
      name= 'Artworks'
      state={1}
    />

    <div>
      <AboutPage />
    </div>
    </main>
  )
}
