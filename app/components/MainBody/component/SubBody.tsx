import SubTitle from "./SubTitle";
import Contents from "./Contents";

type Props = {
  firstCap: string;
  secondCap: string;
  firstWord: string;
  secondWord: string;
  image: string;
  alt: string;
  details: string;
};

const SubBody = ({
  firstCap,
  secondCap,
  firstWord,
  secondWord,
  image,
  alt,
  details,
}: Props) => {
  return (
    <div className="sm:mt-10 mt-1">
      <SubTitle
        firstCap={firstCap}
        secondCap={secondCap}
        firstWord={firstWord}
        secondWord={secondWord}
      />
      <Contents image={image} alt={alt} details={details} />
    </div>
  );
};

export default SubBody;
