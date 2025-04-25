import ProjectShowCase from "./ProjectShowcase"
import {projects} from "@/config/resume"
import ProjectsSection from './components/ProjectsSection'
import Link from 'next/link'


export default function WorkPage() {
  return (
      <main className="mx-auto grid">
      <h1 className='mt-16 text-8xl font-medium'>Works</h1>
       <ProjectsSection/>
          {/* <ProjectShowcase/> */}
    </main>
  )
}


