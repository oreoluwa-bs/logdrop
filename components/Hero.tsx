import Link from "next/link";
import { HiMiniArrowSmallRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className="flex items-center flex-col bg-gradient-to-b from-transparent via-purple-500/20 to-transparent h-[80vh]">
      <h1 className="mt-16 mx-6 w-[60%] font-extrabold text-5xl lg:text-7xl h-40 text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black dark:from-white dark:to-[#AAAAAA]">
        Open-source analytics for Express APIs
      </h1>
      <p className="text-2xl text-gray-300">
        Depper insights into Express API usage with robust analytics.
      </p>
      <div className="flex gap-4 items-center mt-10">
        <Link
          href="/docs"
          className="flex items-center group font-semibold gap-1 bg-transparent backdrop-blur-md hover:bg-gradient-to-r from-transparent to-purple-500/40 text-white transition-colors px-5 py-3 rounded-full"
        >
          Documentation
          <HiMiniArrowSmallRight className="group-hover:translate-x-1 transition-all" />
        </Link>
        <Link
          href="/signup"
          className="flex items-center group font-semibold gap-1 backdrop-blur-md bg-white hover:text-purple-800 text-black transition-colors px-5 py-3 rounded-full"
        >
          Get started
          <HiMiniArrowSmallRight className="group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;