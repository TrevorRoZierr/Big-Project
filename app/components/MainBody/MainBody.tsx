import SubBody from "./component/SubBody";

const MainBody = () => {
  return (
    <div className="w-full sm:w-full h-min sm:h-min flex justify-center item-center flex-col sm:mt-[140px] mt-[100px]">
      <SubBody
        firstCap=""
        firstWord=""
        secondCap="V"
        secondWord="ision"
        image="/pledge2.jpg"
        alt="Our Vision"
        details="Our vision is clear - to become your trusted partner in finding the IT expertise you require. We aim to build a reputation for excellence and reliability in IT resource procurement."
      />
      <SubBody
        firstCap="O"
        firstWord="ur"
        secondCap="P"
        secondWord="ledge"
        image="/vision.jpg"
        alt="Our Pledge"
        details="We are comitted to delivering the right talent that exceeds your expectations. Our focus is on sourcing IT professionals who can seamlessly integrate into your projects, enhancing capabilities and efficiency of your team."
      />
      <SubBody
        firstCap="C"
        firstWord="lient-"
        secondCap="C"
        secondWord="entric"
        image="/cc.jpg"
        alt="Our Vision"
        details="At Burak Solutions, we understand that every client is unique. We take the time to understand your specific needs and challenges, ensuring that our solutions align perfectly with your objectives. Your success is our priority."
      />
      <SubBody
        firstCap="A"
        firstWord="daptability & "
        secondCap="I"
        secondWord="nnovations"
        image="/inn.jpeg"
        alt="Our Vision"
        details="In the fast paced world of technology, adaptability is crucial. We stay at the forefront of industry developments, embracing the latest trends and technologies to provide you with forward-thinking solutions."
      />
    </div>
  );
};

export default MainBody;
