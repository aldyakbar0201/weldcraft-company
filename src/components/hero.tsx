export default function HeroSection() {
    return (
      <section className="relative flex h-screen items-center bg-[url('/Hero-Image.png')] bg-cover bg-center bg-no-repeat py-12 text-white">
        <div className="absolute h-full w-full bg-black opacity-45"></div>
        <div className="relative mt-12 flex min-h-screen w-full flex-col items-center justify-center px-6 text-center md:px-12 md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
            Top-Quality Engineering, Accurate Machinery
          </h1>
          <p className="mt-5 w-full md:w-1/2 text-lg md:text-base font-light text-center md:text-left">
            Revolutionizing Custom Fabrication into Advanced Automation, We Lead the Path to Future Success with Unmatched Quality, Superior Expertise, and an Unwavering Commitment to Excellence
          </p>
        </div>
      </section>
    );
  }
  