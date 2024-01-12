type Props = {
  image: string;
  alt: string;
  details: string;
};

const Contents = ({ image, alt, details }: Props) => {
  return (
    <div className="flex justify-center items-center mt-10 sm:mt-12 flex-col sm:flex-col">
      <div className="flex justify-center items-center w-[100%] sm:w-[80%]">
        <img
          src={image}
          alt={alt}
          className="sm:w-[550px] sm:h-[350px] w-[550px] h-[250px] rounded-lg"
        />
      </div>
      <div className="flex justify-center items-center sm:w-[45%] mt-10 w-[100%] sm:mb-48 mb-28 ">
        <h3 className="sm:w-full w-[80%] sm:text-xl text-sm font-semibold text-center">
          {details}
        </h3>
      </div>
    </div>
  );
};

export default Contents;
