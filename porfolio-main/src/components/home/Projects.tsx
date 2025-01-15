import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects' 

export default function Projects() {
  return (
    <>
      <section className="w-auto h-80 lg:h-40rem">
        <div className="w-full h-full flex items-center justify-center">
          <p className="w-1/2 lg:w-3/4 text-s lg:text-2xl xl:text-4xl text-center text-cambridge">
            A selection of my creative Frontend Development work.
          </p>
        </div>
      </section>
      <section className="w-4/5 h-70 lg:h-120 xl:h-200 grid grid-cols-1 grid-rows-4 place-items-center mx-auto gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </>
  )
}