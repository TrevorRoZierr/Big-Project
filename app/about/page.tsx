import GoUp from "../components/GoUp";
import SubBody from "../components/MainBody/component/SubBody";

const page = () => {
  return (
    <div className="w-full sm:w-full h-min sm:h-min flex justify-center item-center flex-col sm:mt-[140px] mt-[100px]">
      <SubBody
        firstCap="A"
        firstWord="bout"
        secondCap=" U"
        secondWord="s"
        image="/about.jpg"
        alt="About"
        details="Burak Solutions is a dynamic and multifacted IT consulting and services company. With a broad spectrum of services, we are your one-stop solution for all things IT-related. Our mission is to empower businesses with tailored, high-quality solutions to meet their diverse needs."
      />
      <div className="absolute sm:top-[93rem] top-[65rem] right-5 sm:right-8 w-min scroll-smooth">
        <GoUp />
      </div>
    </div>
  );
};

export default page;
