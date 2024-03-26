const RightBody = () => {
  return (
    <div className="w-[420px] h-[582px] flex flex-col items-center mt-5 ml-5 rounded-[25px] bg-white shadow-2xl">
      <div className="flex justify-center gap-[30%] items-center w-[100%] h-[14%] border-b-[0.125rem] text-[64748B]">
        <p className="border-b-[white] text-[#64748B]  h-[100%] w-[33%] flex justify-center items-center cursor-pointer hover:text-[#03AEFD] border-b-[3px] hover:border-b-[#03AEFD]">
          For Sale
        </p>
        <p className="text-[#64748B] border-b-[white] h-[100%] w-[33%] flex justify-center items-center cursor-pointer hover:text-[#03AEFD] border-b-[3px] hover:border-b-[#03AEFD]">
          For Rent
        </p>
      </div>
      <div className="h-[70%] w-[340px] mt-11 flex flex-col justify-between">
        <input type="text" className="h-[60px] rounded-[25px] flex items-center justify-center text-center bg-[#D4D4D420]" placeholder="New York, San Francisco, etc" />
        <form className="h-[60px] text-[#64748B] rounded-[25px] flex items-center justify-center text-center bg-[#D4D4D420]">
          <select id="property" name="property" className="text-[6D6A7550] w-[100%] h-[60px] rounded-[25px] flex items-center justify-center text-center bg-[#D4D4D420]">
            <option className="text-[#64748B]" value="" disabled selected >
              Select Property Type
            </option>
            <option value="volvo">Select 1</option>
            <option value="mercedes">Select 2</option>
            <option value="audi">Select 3</option>
          </select>
        </form>
        <div>
          <form className="text-[#64748B] h-[60px] rounded-[25px] flex items-center justify-center text-center bg-[#D4D4D420]">
            <select id="cars" name="cars" className=" h-[60px] w-[100%] rounded-[25px] flex items-center justify-center text-center bg-[#D4D4D420]">
              <option className="text-[#64748B]" value="" disabled selected>
                Select Rooms
              </option>
              <option value="volvo">Rooms 1</option>
              <option value="mercedes">Room 2</option>
              <option value="audi">Room 3</option>
            </select>
          </form>
          <div className="flex gap-1 mt-4">
            <img src="/🦆 icon _setting 5_.svg" alt="" />
            <p className="text-[#03AEFD]">Advanced Search</p>
          </div>
        </div>
        <button className="mt- flex gap-2 justify-center items-center bg-[#03AEFD] w-[340px] h-[60px] rounded-[30px] text-white">
          <img src="/🦆 icon _search normal 1_.svg" alt="" />
          <p>Search</p>
        </button>
      </div>
    </div>
  );
};

export default RightBody;
