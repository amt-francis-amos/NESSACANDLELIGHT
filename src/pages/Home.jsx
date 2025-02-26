import React from 'react'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import CallToAction from '../components/CallToAction'
import ProjectsOverview from '../components/ProjectsOverview'
import ScrollToTopButton from '../components/ScrollToTopButton'

const Home = () => {
  return (
    <div>
       <Hero />
       <Mission />
       <CallToAction />
       <ProjectsOverview />
       <ScrollToTopButton />
    </div>
  )
}

export default Home