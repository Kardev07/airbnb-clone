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
        <p className="text-lg sm:text-3xl font-bold text-[#ff5a5f]">
          Not sure where to go? Perfect!
        </p>
        <button className="text-purple-500 bg-white px-12 py-4 shadow-lg rounded-full font-bold my-12 hover:shadow-xl hover:bg-[#ff5a5f] hover:text-gray-50 active:scale-90 transition duration-300">
          Explore Now!
        </button>
      </div>
    </div>
  );
}

export default Banner;
