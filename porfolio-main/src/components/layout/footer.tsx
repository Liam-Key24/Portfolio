import SocialLink from '../ui/SocialLink'

export default function Footer() {
  return (
    <footer className="w-auto h-auto relative">
      <div className="w-auto h-35 xl:h-50 flex flex-col justify-between text-cambridge">
        <div className="w-1/2 m-auto">
          <h1 className="text-4xl font-Ogg text-center leading-10">
            Thank you for stopping by!
          </h1>
        </div>
        <div className="w-auto h-auto flex justify-end">
          <div className="inline-flex w-auto h-auto">
            <div className="inline-flex w-auto h-auto items-center justify-center text-xs xl:text-lg text-cambridge">
              <SocialLink 
                href="https://www.linkedin.com/in/gabriel-khidyer-89862b122"
                text="LinkedIn"
              />
              <SocialLink 
                href="mailto:liamgkhidyer@gmail.com"
                text="Contact"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}