import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Navbar from '../components/Navbar'
import Badges from '../components/Badges'
import Experiences from '../components/experiences/Experiences'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wei | Developer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar/>
      <Main />
      <About />
      <Experiences />
      <Skills />
      <Badges />
      <Projects />
      <Contact />
    </div>
  )
}
