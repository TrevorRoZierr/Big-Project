type Props = {
  image: string;
  title: string;
  details: string;
  image2: string;
  title2: string;
  details2: string;
};

const ApartHome = ({
  image,
  image2,
  title,
  title2,
  details,
  details2,
}: Props) => {
  return (
    <div className="w-full sm:mt-[10px] mt-[180px]">
      <div className="w-full flex justify-center items-center sm:flex-row flex-col">
        <div className="w-[80%] flex justify-center items-center flex-col">
          <h3 className="sm:w-[40%] text-center sm:mt-10 mt-5 uppercase font-semibold text-md sm:text-2xl sm:mb-10 mb-6">
            {title}
          </h3>
          <img
            src={image}
            alt=""
            className="sm:w-[70%] sm:rounded-full rounded"
          />
          <p className="sm:mt-8 sm:w-[40%] w-[100%] text-center mt-8 text-sm sm:text-md p-10 border-b-2 border-t-2 border-indigo-700 font-semibold">
            {details}
          </p>
        </div>
        <div className="w-[80%] flex justify-center items-center flex-col">
          <h3 className="sm:w-[40%] text-center sm:mt-10 mt-5 uppercase font-semibold text-md sm:text-2xl sm:mb-10 mb-6">
            {title2}
          </h3>
          <img
            src={image2}
            alt=""
            className="sm:w-[70%] sm:rounded-full rounded"
          />
          <p className="sm:mt-8 sm:w-[40%] w-[100%] text-center mt-8 text-sm sm:text-md p-10 border-b-2 border-t-2 border-indigo-700 font-semibold">
            {details2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApartHome;
