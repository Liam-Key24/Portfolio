import SocialLink from '../ui/SocialLink'

export default function Navbar() {
  return (
    <nav className="w-auto h-6 flex justify-end items-center text-cambridge my-1">
      <ul className="inline-flex sm:w-40 lg:w-40 xl:w-56 h-full justify-around text-s xl:text-lg">
        <li>
          <SocialLink 
            href="https://www.linkedin.com/in/gabriel-khidyer-89862b122"
            text="LinkedIn"
          />
        </li>
        <li>
          <SocialLink 
            href="mailto:liamgkhidyer@gmail.com"
            text="Contact Me"
          />
        </li>
      </ul>
    </nav>
  )
}