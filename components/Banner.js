import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="my-3 text-3xl font-semibold text-center text-[#ff5a5f] md:text-4xl md:text-[#ff5a5f]">
          Olympian and Paralympian Experiences.
        </p>
        <button className="text-purple-500 bg-white px-12 py-4 shadow-lg rounded-full font-bold my-12 hover:shadow-xl active:scale-90 transition duration-150">
          Explore Now!
        </button>
      </div>
    </div>
  );
}

export default Banner;
