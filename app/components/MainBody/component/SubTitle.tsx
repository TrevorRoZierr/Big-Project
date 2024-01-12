const SubTitle = (props: any) => {
  return (
    <h1 className="text-4xl sm:text-6xl text-black uppercase font-semibold text-center">
      <span className="text-6xl sm:text-8xl text-indigo-700">
        {props.firstCap}
      </span>
      {props.firstWord}
      <span className="text-6xl sm:text-8xl text-indigo-700">
        {" "}
        {props.secondCap}
      </span>
      {props.secondWord}
    </h1>
  );
};

export default SubTitle;
