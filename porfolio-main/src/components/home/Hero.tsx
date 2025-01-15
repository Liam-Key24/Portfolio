export default function Hero() {
    return (
      <>
        <section className="w-full h-auto my-2 bg-cambridge text-smoke p-4 md:p-8">
          <div className="flex justify-center">
            <h1 className="text-4xl md:text-5xl font-Ogg my-5 text-center">
              GABRIEL L. KHIDYER
            </h1>
          </div>
        </section>
        <section className="relative w-full h-auto my-2">
          <img 
            src="/media/39C4B4F9-0555-4D2D-99AF-DA842D484E46_1_201_a.jpeg" 
            alt="Hero background"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-sm md:text-base text-smoke bg-black bg-opacity-50 p-4 md:justify-start">
            <div className="mb-4 md:mb-8 md:mt-80">
              <p>
                To see the world, things dangerous to come to, to see behind walls, to draw closer, 
                to find each other, and to feel, that is the purpose of 
                <span className="font-bold"> life.</span>
              </p>
            </div>
            <div>
              <p>
                - Life Magazine
              </p>
            </div>
          </div>
        </section>
      
      </>
    )
}