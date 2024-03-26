import RightBody from "./RightBody";
import LeftBody from "./LeftBody";
import Section2 from "./Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./section4";
import { Section5 } from "./setion5";
import { Section6 } from "./section6";
import { Section7 } from "./section7";

const Body = () => {
  return (
    <div>
      <div className="h-[902px] flex  flex-col justify-center  items-center bg-gradient-to-b from-[#4361EE00] to-[#4361EE60]">
        <div className=" flex h-[902px] w-[80%] justify-between items-center">
          <LeftBody />
          <RightBody />
        </div>
        <div className=" w-[710px] h-[100px] mt-[886px] absolute flex justify-between">
          <div className="h-[100px] w-[360px] bg-white rounded-[55px] shadow-2xl"></div>
          <div className="h-[100px] w-[320px] rounded-[55px] bg-white shadow-2xl"></div>
        </div>
      </div>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      < Section7/>
    </div>
  );
};

export default Body;
