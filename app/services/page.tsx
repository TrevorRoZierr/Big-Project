import ApartHome from "../components/MainBody/component/ApartHome";
import SubBody from "../components/MainBody/component/SubBody";
import GoUp from "../components/GoUp";

const page = () => {
  return (
    <div>
      <div className="w-full sm:w-full h-min sm:h-min flex justify-center item-center flex-col sm:mt-[140px] mt-[100px]">
        <SubBody
          firstCap="S"
          firstWord="ervices"
          secondCap=" "
          secondWord=""
          image="/services.jpg"
          alt="Services"
          details="Burak Solutions is your comprehensive IT partner, offering a spectrum of services to drive your business forward. Our expertise spans software development, web and mobile app design, and secure cloud solutions. We specialize in robust database management, cybersecurity services, and efficient network infrastructure. With a commitment to excellence, we provide dedicated IT support, system integration, and cutting-edge data analytics. Elevate your business with our proficiency in business intelligence, UI/UX design, and tailored e-commerce solutions. Our portfolio extends to enterprise software, project management, and digital transformation. Trust us for IT training, quality assurance, and strategic consulting to navigate the ever-evolving IT landscape. Partner with Burak Solutions for a seamless blend of innovation and reliability in the IT realm."
        />
      </div>
      <div className="sm:mb-52 mb-32">
        <ApartHome
          title="IT Infrastructure"
          title2="Strategic Sourcing"
          image="/itinfra.jpg"
          image2="/strasource.jpg"
          details="Burak Solutions is your trusted partner for robust IT infrastructure solutions. We specialize in designing and implementing cutting-edge systems, ensuring seamless operations and scalability. From network architecture to cloud integration, our expertise ensures your business is equipped for the digital future."
          details2="Navigate the complex landscape of procurement with Burak Solutions' strategic sourcing expertise. We tailor sourcing strategies to align with your business goals, optimizing costs and maximizing value. Our approach ensures efficiency, transparency, and sustainable vendor relationships, empowering your organization for long-term success."
        />
        <ApartHome
          title="Certification Program"
          title2="Managed Services"
          image="/cp.jpg"
          image2="/ms.jpg"
          details="Invest in your team's professional development with Burak Solutions certification programs. Our training modules are designed to enhance skills, knowledge, and proficiency in the latest technologies and industry best practices. Equip your workforce with the certifications they need to stay ahead in today's competitive IT landscape."
          details2="Experience unparalleled support with Burak Solutions' managed services. Our proactive approach to IT management ensures your systems run smoothly, minimizing downtime and maximizing productivity. From routine maintenance to real-time monitoring, we provide comprehensive solutions tailored to your unique business needs."
        />
      </div>
      <div className="absolute sm:top-[235rem] top-[275rem] right-5 sm:right-8 w-min scroll-smooth">
        <GoUp />
      </div>
    </div>
  );
};

export default page;
