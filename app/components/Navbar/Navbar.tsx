import DateComponent from "./component/Date";
import Links from "./component/Links";
import Title from "./component/Title";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full sm:w-full h-[50vh] sm:h-[80vh] flex justify-center item-center bg-black border-b-4 border-indigo-700">
      <Title />
      <div className="absolute top-[12rem] sm:top-[17rem] md:top-[17rem] mb-12">
        <DateComponent />
      </div>
      <div className="absolute top-[16rem] sm:top-[22rem]">
        <div className="flex justify-center items-center flex-row">
          <Links route="/" name="Home" />
          <Links route="/services" name="Services" />
          <Links route="/about" name="About" />
          <Links route="/contact" name="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
