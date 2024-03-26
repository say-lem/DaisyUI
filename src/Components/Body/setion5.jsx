import { teamArray } from "./teamArray";

export const Section5 = () => {
  return (
    <div className=" flex flex-col items-center pb-32">
      <div className="h-[50px] w-[50px] absolute mt-[70px] rounded-full rotate-45 bg-gradient-to-b from-[#4361EE99] to-[#4361EE00]"></div>
      <div className="flex flex-col items-center mt-[200px] w-[1100px] pb-40">
        <div className="w-[100%]">
          <p className="text-[19.4px] text-[#4361EE]">AREAS ACROSS THE TOWN</p>
          <p className="text-[39.8px] text-[#2B2B2B]">
            Neighborhood Properties
          </p>
        </div>
        <div className="flex flex-wrap mt-20 gap-6">
          <div className="h-[320px] rounded-[30px] w-[300px] overflow-hidden">
            <div className="flex flex-col mt-[180px] ml-16 absolute text-[white] bg-transparent">
              <p className="text-[57.3px]">216</p>
              <p className="text-[19.4]">New York City, NY</p>
            </div>
            <img
              className="h-[320px] object-fill flex items-center justify-center"
              src="/frame2.png"
              alt=""
            />
          </div>

          <div className="h-[320px] rounded-[30px] w-[300px] overflow-hidden">
            <div className="flex flex-col mt-[180px] ml-16 absolute text-[white] bg-transparent">
              <p className="text-[57.3px]">141</p>
              <p className="text-[19.4]">Houston, TX</p>
            </div>
            <img
              className="h-[380px] object-fill flex items-center justify-center"
              src="/public/frame1.png"
              alt=""
            />
          </div>
          <div className="h-[320px] rounded-[30px] w-[420px] overflow-hidden">
            <div className="flex flex-col mt-[180px] ml-16 absolute text-[white] bg-transparent">
              <p className="text-[57.3px]">212</p>
              <p className="text-[19.4]">NHouston, TX</p>
            </div>
            <img
              className="h-[320px] w-[420px] flex items-center justify-center"
              src="/frame3.png"
              alt=""
            />
          </div>
          <div className="h-[320px] rounded-[30px] w-[412px] overflow-hidden">
            <div className="flex flex-col mt-[180px] ml-16 absolute text-[white] bg-transparent">
              <p className="text-[57.3px]">183</p>
              <p className="text-[19.4]">Philadelphia, PA</p>
            </div>
            <img
              className=" object-fill flex items-center justify-center h-[320px] w-[412px]"
              src="/public/frame5.png"
              alt=""
            />
          </div>
          <div className="h-[320px] rounded-[30px] w-[658px] overflow-hidden">
            <div className="flex flex-col mt-[180px] ml-16 absolute text-[white] bg-transparent">
              <p className="text-[57.3px]">112</p>
              <p className="text-[19.4]">San Francisco, CA</p>
            </div>
            <img
              className="w-[685px] object-fill flex items-center justify-center"
              src="/public/frame4.png"
              alt=""
            />
          </div>
          <div className="h-[100px] w-[100px] absolute mt-[700px] ml-[65%] rounded-full -rotate-45 bg-gradient-to-b from-[#4361EE99] to-[#4361EE00]"></div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center mt-7">
          <p className="text-[19.4] text-[#4361EE]">INTRODUCE YOURSELF TO</p>
          <p className="text-[39.8px] text-[#2B2B2B]">Our Team of Experts</p>
        </div>
        <div className="flex gap-11 items-center justify-center mt-10">
            {teamArray.map((item, i)=>(
                <div>
                    <img className="w-[200px] h-[280px] rounded-tl-[120px] rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px]" key={i} src={item.imgsrc} />
                    <p className="text-[27.6px] text-[#0B090A] mt-6">{item.Username}</p>
                    <p className="text-[#4361EE] text-[16px]">{item.position}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
