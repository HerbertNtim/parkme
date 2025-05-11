import Image from "next/image";

export default function Home() {
  return (
    <main className="sm:container">
      {/* Search Form */}
      <h1>Search Form</h1>

      <h3 className="text-2xl font-bold text-slate-500 lg:text-4xl text-center uppercase py-16 tracking-wide">
        There is always a spot available.
      </h3>

      {/* Steps Section */}
      <section className="hidden lg:block pt-16 pb-32">
        <div className="grid grid-cols-3 place-items center">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col relative bg-blue-500 text-white rounded-full w-12 h-12 items-center justify-center">
              <p className="text-2xl font-bold after:content=[''] after:absolute after:-left-2 after:-top-2 after:w-16 after:h-16 after:-z-[1] after:rounded-full after:bg-gray-100">1</p>
            </div>
            <p className="text-lg pt-2 tracking-wide text-slate-500">Enter your destination.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col relative bg-blue-500 text-white rounded-full w-12 h-12 items-center justify-center">
              <p className="text-2xl font-bold after:content=[''] after:absolute after:-left-2 after:-top-2 after:w-16 after:h-16 after:-z-[1] after:rounded-full after:bg-gray-100">2</p>
            </div>
            <p className="text-lg pt-2 tracking-wide text-slate-500">Pick date and time.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col relative bg-blue-500 text-white rounded-full w-12 h-12 items-center justify-center">
              <p className="text-2xl font-bold before:content=[''] before:absolute before:w-[1000px] before:h-[2px] before:bg-blue-500 before:top-1/2 before:-left-[1000px] before:-z-10 after:content=[''] after:absolute after:-left-2 after:-top-2 after:w-16 after:h-16 after:-z-[1] after:rounded-full after:bg-gray-100">3</p>
            </div>
            <p className="text-lg pt-2 tracking-wide text-slate-500">Pick a spot.</p>
          </div>
        </div>
      </section>

      <h2 className="text-2xl sm:text-4xl  text-slate-500 lg:text-4xl text-center pb-32 tracking-wide">
        No more running around looking for a parking spot.
      </h2>

      {/* Image Section */}
      <section className="pb-4">
        <div className="sm:bg-[url(/images/map-bg.png)] pt-16 w-full absolute left-0 bg-cover bg-no-repeat bg-center bg-blue-600 bg-opacity-25 
        bg-blend-overlay">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center sm:place-items-start container items-center px-8 pb-16">
            <div className="flex flex-col items-center text-slate-700">
              <p className="text-3xl sm:text-4xl font-bold">Fully Responsive</p>
              <p className="text-md sm:text-lg pt-2 tracking-tight">It feels just like a mobile app.</p>
            </div>
            <div>
              <Image src={'/images/gateless-parking-mobile.png'} alt="mobile picture" width={320} height={400} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
