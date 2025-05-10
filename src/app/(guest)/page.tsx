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
    </main>
  );
}
