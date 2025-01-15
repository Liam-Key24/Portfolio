import SocialLink from '../ui/SocialLink'
import Image from 'next/image'

export default function About() {
  return (
    <section className="w-auto h-auto my-2 bg-cambridge text-smoke">
      <div className="w-auto h-auto p-2 py-5 lg:py-8 lg:flex lg:items-center">
        <div className="w-full lg:w-1/2 h-auto flex justify-center items-center sm:mb-5">
          <Image 
            src="/media/IMG_2856-EDIT.jpg" 
            alt="Photo of Gabriel Khidyer"
            width={400}
            height={400}
            className="w-400 lg:h-full object-contain"
            priority
          />
        </div>

        <div className="w-full lg:w-1/2 lg:h-full">
          <h1 className="text-3xl lg:text-5xl font-Ogg my-5 text-center">Overview & Form</h1>
          
          <div className="w-full lg:w-3/4 h-auto lg:h-34 lg:flex lg:flex-col lg:justify-evenly my-2 lg:m-auto px-3 text-xs lg:text-sm">
            <div className="inline-flex mb-2">
              <h3 className="w-63/4">About</h3>
              <p className="w-17 opacity-75">
                I'm Gabriel, a tech enthusiast, art lover, and avid traveler.
                Starting as a graphic designer at Lalaland, I mastered design and storytelling,
                focusing on posters and social media. Venturing into fashion, I founded Static—a 
                zero-waste brand—and expanded into ceramics with Static Lemonade. My passion for 
                design led me to frontend development, where I merge creativity with technical skills 
                to craft visually stunning websites. Beyond work, I stay updated on tech and design 
                trends, eager to innovate in this dynamic field.
              </p>
            </div>
            
            <div className="inline-flex mb-2">
              <h3 className="w-63/4">Jobs</h3>
              <ul className="w-17 h-28 flex flex-col justify-evenly opacity-75">
                <li>Lnk.bio, <span className="text-10px italic font-light">J. Frontend Developer</span></li>
                <li>Static, <span className="text-10px italic font-light">Co-Founder</span></li>
                <li>Youthopia, <span className="text-10px italic font-light">Content Creator</span></li>
                <li>LaLaLand Art Studio, <span className="text-10px italic font-light">Freelancer, Event organiser</span></li>
              </ul>
            </div>
            
            <div className="inline-flex mb-4">
              <h3 className="w-63/4">Skills</h3>
              <p className="w-17 opacity-75">
                HTML, CSS, JavaScript, TailwindCSS, React, Git, Figma, WebFlow, SquareSpace, Wix, Adobe Studio
              </p>
            </div>
            
            <div className="w-full h-auto inline-flex justify-evenly items-center">
              <SocialLink href="mailto:liamgkhidyer@gmail.com" text="Email" />
              <SocialLink href="https://github.com/Liam-Key24" text="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/gabriel-khidyer-89862b122" text="LinkedIn" />
              <SocialLink href="https://www.behance.net/liamkhidyerr" text="Behance" />
              <SocialLink href="https://www.instagram.com/liamkhidyerr/" text="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}