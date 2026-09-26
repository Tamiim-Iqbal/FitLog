import Image from "next/image";


const Banner = () => {
  return (
    <div className="container mx-auto w-10/12 py-7">
      <div className="flex min-h-[270px] items-center overflow-hidden rounded-xl border border-[#24272d] bg-[#15171d] px-8 py-7">

        {/* Content */}
        <div className="z-10 w-full lg:w-3/5 lg:ml-10">

          {/* Small Heading */}
          <p className="mb-3 text-[12px] uppercase tracking-wide text-[#c2f800]">
            Workout Library
          </p>

          {/* Main Heading */}
          <h1 className="max-w-xl text-4xl uppercase leading-[0.9] tracking-tight text-white sm:text-5xl font-[family-name:var(--font-oswald)]">
            Train with intent. Log
            <br />
            <span className="mt-4 inline-block">every set.</span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-md text-sm leading-5 text-[#9ca3af]">
            Fitlog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Button */}
          <a
            href="#workouts"
            className="mt-5 inline-block cursor-pointer rounded-md bg-[#c2f800] px-5 py-2.5 text-[12px] font-bold uppercase text-black transition-colors hover:bg-[#d4ff38]"
          >
            Browse Workouts
          </a>
        </div>

        {/* Workout Image */}
        <div className="hidden flex-1 items-center justify-end lg:flex">
          <Image
            src="/fitlog-resources/assets/banner.png"
            alt="Workout"
            width={500}
            height={400}
            priority
            className="h-[400px] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;