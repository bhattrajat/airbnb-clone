import Image from "next/image";
const TryHosting = () => {
  return (
    <div className="mx-4 mt-8 mb-48 bg-gray-800 rounded-md lg:bg-transparent lg:relative lg:flex lg:justify-center lg:mx-12 lg:h-96">
      <div className="z-50 justify-center h-full p-4 text-white lg:absolute lg:flex lg:justify-center lg:flex-col lg:w-1/4 lg:left-20">
        <h2 className="text-3xl font-bold text-white lg:text-5xl">
          Try Hosting
        </h2>
        <h3 className="my-4 text-base lg:text-lg">
          Earn extra income and unlock new opportunities by sharing your space.
        </h3>
        <button className="w-40 px-4 py-2 text-lg font-semibold text-black bg-white rounded-md lg:px-6 lg:py-3">
          Learn More
        </button>
      </div>
      <div className="relative h-48 lg:static lg:h-full">
        <Image
          src="/try-hosting.webp"
          className="rounded-lg"
          layout="fill"
          alt=""
          aria-hidden="true"
          objectFit="cover"
          objectPosition="80% 50%"
        />
      </div>
    </div>
  );
};

export default TryHosting;
