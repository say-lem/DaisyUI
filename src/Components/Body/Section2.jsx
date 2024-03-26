import LowerRight from "./LowerRight";
import LowerLeft from "./LowerLeft";

const Section2 = () => {
  return (
    <div className="h-[1200px] flex flex-col items-center">
      <div className="h-[100px] w-[100px] absolute -ml-[65%] mt-[120px] rounded-full -rotate-45 bg-gradient-to-b from-[#4361EE90] to-[#4361EE00]"></div>
      <div className=" bg-white w-[100%] flex flex-col items-center ">
        <p className="text-16px mt-48 text-[#64748B]">Trusted by 100+ Companies across the globe!</p>
        <div className="flex h-[100px] justify-between items-center w-[77%] mt-2">
          <img
            className="mix-blend-luminosity w-[120px] h-[41px]"
            src="/image 1.svg"
            alt=""
          />
          <img
            className="mix-blend-luminosity w-[120px] h-[41px]"
            src="/image 2.svg"
            alt=""
          />
          <img
            className="mix-blend-luminosity w-[120px] h-[41px]"
            src="/image 3.svg"
            alt=""
          />
          <img
            className="mix-blend-luminosity w-[120px] h-[41px]"
            src="/image 4.svg"
            alt=""
          />
          <img
            className="mix-blend-luminosity w-[120px] h-[41px]"
            src="/image 5.svg"
            alt=""
          />
          <img
            className="mix-blend-luminosity w-[120px] h-[41px]"
            src="/image 6.svg"
            alt=""
          />
        </div>
      </div>
      <div className=" flex mt-[150px] w-[80%] justify-between">
        <LowerLeft/>
        <LowerRight/>
      </div>
    </div>
  );
};
export default Section2;
