import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-black w-full sm:h-[250px] h-[120px] border-t-4 border-indigo-700 sm:p-10 p-5">
      <div className="flex justify-center items-center flex-row w-full bg-black">
        <div className="border-r-2 border-white bg-black text-white w-[50%] sm:h-[180px] h-[80px] flex justify-center items-center flex-col p-10 sm:p-0">
          <Link
            href=""
            className="bg-black text-white py-2 sm:py-4 px-1 sm:px-6 sm:font-semibold text-sm sm:text-xl"
          >
            burak@gmail.com
          </Link>
          <Link
            href=""
            className="bg-black text-white py-2 sm:py-4 px-1 sm:px-6 sm:font-thin text-[6px] sm:text-xs w-full sm:w-auto"
          >
            Web Dev: Sayyed Saad ©
          </Link>
        </div>
        <div className="bg-black text-white w-[50%] sm:h-[180px] h-[80px] flex justify-center items-center flex-col">
          <Link
            href=""
            className="bg-indigo-600 text-white py-2 sm:py-4 px-4 sm:px-6 sm:font-medium sm:uppercase mb-5 text-sm sm:text-lg sm:tracking-wider"
            style={{
              borderTopLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            Training
          </Link>
          <Link
            href=""
            className="bg-indigo-600 text-white py-2 sm:py-4 px-4 sm:px-2 sm:font-medium sm:uppercase text-sm sm:text-lg sm:tracking-wider"
            style={{
              borderTopLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            Seeking Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
