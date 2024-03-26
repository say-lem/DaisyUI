import { House } from "../house";

const Section3 = () => {
  return (
    <div className="flex flex-col h-[900px] items-center">
      <div className="flex items-center justify-between w-[80%]">
        <div className="flex flex-col justify-between h-[139px]">
          <p className="text-[#4361EE] text-[19.4px]">CHECKOUT OUR NEW</p>
          <p className="text-[#2B2B2B] text-[39.8px]">
            Latest Listed Properties
          </p>
          <p className="text-[16px] text-[#64748B] w-[500px] h-[37px]">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="rounded-full hover:bg-[#03AEFD] text-[#03AEFD] hover:text-[white] flex justify-center items-center h-[49px] w-[80px] border-[1px] border-[#03AEFD]">
            Buy
          </div>
          <div className="rounded-full hover:bg-[#03AEFD] text-[#03AEFD] hover:text-[white] flex justify-center items-center h-[49px] w-[80px] border-[1px] border-[#03AEFD]">
            Sell
          </div>
          <div className="rounded-full hover:bg-[#03AEFD] text-[#03AEFD] hover:text-[white] flex justify-center items-center h-[49px] w-[80px] border-[1px] border-[#03AEFD]">
            Rent
          </div>
        </div>
      </div>
      <div className="carousel carousel-center w-[100%] mt-20 ">
        <div className="carousel-item pl-20">
          {House.map((item, i) => (
            <div className="ml-11">
              <img
                className="rounded-[30px] w-[340px]"
                key={i}
                src={item.imgSrc}
              />
              <p className="mt-4 text-[27.6px] text-[#2B2B2B]">{item.amount}</p>
              <p className="mt-2 text-[20px] text-[#2B2B2B]">{item.discription}</p>
              <p className="mt-2 text-[16px] text-[#64748B]">{item.address}</p>
              <div className="flex mt-2">
                <img className="w-[30px] h-[22px]" src="/🦆 icon _bed_.svg" alt="" />
                <p className="ml-1 text-[16px] text-[#2B2B2B]">{item.beds}Beds</p>
                <img className="w-[30px] h-[22px] ml-4" src="/🦆 icon _bathroom_.svg" alt="" />
                <p className="ml-1 text-[16px] text-[#2B2B2B]">{item.baths}Baths</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
