'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showInfo, setShowInfo] = useState<boolean>(false)
  
  return (
    <div className="w-80 lg:w-[33rem] xl:w-50 flex flex-col items-center justify-center">
      <div className="w-80 lg:w-[33rem] xl:w-50 h-52 lg:h-[22rem] xl:h-[33rem] relative overflow-hidden">
        <div className="absolute w-80 lg:w-[33rem] xl:w-50 h-52 lg:h-[22rem] xl:h-[33rem] top-0">
          {project.link ? (
            <Link href={project.link}>
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
                width={800}
                height={600}
                priority
              />
            </Link>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain"
              width={800}
              height={600}
              priority
            />
          )}
        </div>
        <div 
          className={`bg-cambridge opacity-95 absolute w-full lg:w-1/2 h-full top-0 right-0 z-10 
            transition-all duration-500 ease-in-out ${showInfo ? 'block' : 'hidden'}`}
        >
          <div className="w-full h-full flex flex-col text-xs lg:text-sm xl:text-lg p-5 lg:p-8 justify-evenly text-smoke">
            <p className="text-justify">{project.description}</p>
            <div className="w-3/4 h-auto inline-flex justify-between">
              <p className="font-semibold font-ogg">
                Dev Stack <br />
                <span className="italic text-10px lg:text-sm opacity-80 font-normal">
                  {project.stack}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto inline-flex justify-between text-xs lg:text-lg text-wolf">
        <div>
          <h3 className="text-cambridge lg:text-lg">{project.title}</h3>
          <p>{project.role}</p>
        </div>
        <div>
          <button 
            className="hover:text-cambridge lg:text-lg"
            onClick={() => setShowInfo(!showInfo)}
          >
            Info
          </button>
          {project.link && (
            <p>
              <Link href={project.link}>View</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}