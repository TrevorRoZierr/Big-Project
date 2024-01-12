import { FaArrowUp } from "react-icons/fa";

const GoUp = () => {
  return (
    <div className="border-2 border-black rounded-md sm:p-2 p-1 bg-transparent">
      <a href="#head" className="text-black sm:text-4xl text-2xl bg-transparent">
        <FaArrowUp />
      </a>
    </div>
  );
};

export default GoUp;
