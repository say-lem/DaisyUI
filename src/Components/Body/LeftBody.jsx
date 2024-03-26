const LeftBody = () => {
  return (
    <div className="w-[600px] h-[70%] flex flex-col">
      <div>
        <p className="text-[19.4] text-[#4361EE]">REAL ESTATE</p>
        <p className="text-bold text-[57.3px] text-black w-[580px]">
          Find a perfect home you love..!
        </p>
        <p className="text-[16px] text-[#64748B] h-[37px]">
          Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
          Integer a dolor eu sapien sodales vulputate ac in purus.
        </p>
      </div>
      <div>
        <div className="h-[60px] w-[60px] absolute ml-[510px] mt-2 rounded-full rotate-45 bg-gradient-to-b from-[#4361EE] to-[#4361EE00]"></div>
        <div className="carousel w-[540px] h-[351px] rounded-[20px] mt-11 ">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="/public/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.avif"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle bg-white">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-white">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full ">
            <img
              src="/istockphoto-1452529483-170667a.webp"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle bg-white">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-white">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="/public/360_F_294194023_disE35GtlVLDQx4caNDaWewZI8LbxWFQ.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle bg-white">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle bg-white">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle bg-white">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle bg-white">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBody;
