import Link from "next/link";
import React from "react";

const Links = (props: any) => {
  return (
    <div className="flex justify-center items-center bg-black">
      <Link
        href={props.route}
        className="bg-white text-black border-2 capitalize sm:border-4 border-indigo-600 ml-2 sm:ml-8 mr-1 sm:mr-8 p-2 sm:p-5 text-xs sm:text-xl font-semibold sm:font-bold duration-300 hover:bg-indigo-800 hover:border-2 sm:hover:border-4 hover:border-white hover:text-white"
        style={{ borderTopLeftRadius: "1rem", borderBottomRightRadius: "1rem" }}
      >
        {props.name}
      </Link>
    </div>
  );
};

export default Links;
