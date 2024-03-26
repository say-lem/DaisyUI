const LowerLeft = () => {
  return (
    <div className="flex flex-col">
      <p className="text-[19.4px] text-[#4361EE]">WHO ARE WE</p>
      <p className="text-[39.8px] pt-2 text-[#2B2B2B] w-[500px]">
        Assisting individuals in locating the appropriate real estate.
      </p>
      <p className="text-[#64748B] text-[16px] w-[500px]">
        Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim
        purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo
        volutpat.
      </p>
      <div className="flex flex-col float-start justify-between h-[280px] mt-4">
        <div className="w-[400px] h-[131px] shadow-2xl rounded-[30px] flex items-center justify-center gap-4">
          <img className="h-[39.68px] w-[40px]" src="/Group (1).svg" alt="" />
          <div>
            <p className="text-[19.4px] text-[#4361EE] w-[274px]">
              Donec porttitor euismod
            </p>
            <p className="text-[16px] text-[#64748B] w-[274px]">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </div>
        </div>
        <div className="w-[400px] h-[131px] shadow-2xl rounded-[30px] flex items-center justify-center gap-4">
          <img
            className="h-[44.3px] w-[40px]"
            src="/🦆 icon _user octagon_.svg"
            alt=""
          />
          <div>
            <p className="text-[19.4px] text-[#4361EE] w-[274px]">
              Donec porttitor euismod
            </p>
            <p className="text-[16px] text-[#64748B] w-[274px]">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerLeft;
