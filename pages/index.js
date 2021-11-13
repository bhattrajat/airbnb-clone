import Head from "next/head";
import ExporeNearby from "../components/ExploreNearby";
import LiveAnywhere from "../components/LiveAnywhere";
import Image from "next/image";
import TryHosting from "../components/TryHosting";

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb Clone</title>
      </Head>
      <div className="relative w-full h-72 md:h-[70vh] lg:h-[80vh]">
        <Image src="/banner.webp" alt="" layout="fill" />
        <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full text-lg font-semibold">
          <h3 className="text-center font-2xl">
            Not sure where to go? perfect
          </h3>
          <button className="z-40 px-8 py-4 mt-4 font-bold text-transparent transition rounded-full shadow-md active:scale-90 bg-gray-50 hover:shadow-lg from-purple-700 to-red-600 bg-clip-text bg-gradient-to-r text-gradient">
            I'm flexible
          </button>
        </div>
      </div>
      <ExporeNearby />
      <LiveAnywhere />
      <TryHosting />
    </>
  );
}
