const LowerRight = () => {
  return (
    <div>
      <img
        className="absolute ml-[200px] object-fill"
        src="/Group.svg"
        alt=""
      />
      <div className="flex object-fill mt-20 ">
        <div className="h-[500px] w-[280px]">
          <img
            className="h-[500px] w-[280px] object-fill"
            src="/public/Rectangle 14.jpg"
            alt=""
          />
        </div>
        <div className="w-[277px] object-fill -p-4 -ml-6 ">
          <img
            className="h-[280px] w-[277px] object-fill "
            src="/public/Rectangle 15.svg"
            alt=""
          />
          <img
            className="h-[180px] w-[277px] object-fill"
            src="/public/Rectangle 16.svg"
            alt=""
          />
          <div className="h-[60px] w-[60px] absolute ml-[50px] -mt-11 rounded-full rotate-45 bg-gradient-to-b from-[#4361EE] to-[#4361EE00]"></div>
        </div>
      </div>
    </div>
  );
};

export default LowerRight;
