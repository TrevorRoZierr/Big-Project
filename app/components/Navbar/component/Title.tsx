import Link from "next/link";

const Title = () => {
  return (
    <Link
      href="/"
      className="border-t-2 border-b-2 border-white rounded-full flex justify-center items-center w-min h-min mt-12 bg-black"
    >
      <h1 className="text-center text-white mt-1 sm:mt-2 text-4xl md:text-6xl sm:text-8xl uppercase font-bold tracking-wider md:tracking-widest px-4 bg-black">
        <span className="text-6xl sm:text-[6rem] md:text-[6rem] text-indigo-600 bg-black">
          B
        </span>
        urak<br></br>
        <span className="text-6xl sm:text-[6rem] md:text-[6rem] text-indigo-600 bg-black">
          S
        </span>
        olutions
      </h1>
    </Link>
  );
};

export default Title;
