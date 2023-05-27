import Image from 'next/image'
import AboutPage from './sections.js'

export default function Home() {
  return (
    <main>
    <div>
      <h1>
        Welcome to my website!
      </h1>
    </div>

    <div>
      <AboutPage />
    </div>
    </main>
  )
}
