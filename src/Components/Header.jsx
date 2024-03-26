const NavBar = () => {
  return (
    <div className="navbar bg-white flex justify-center sticky top-0  z-50">
      <div className="flex justify-between w-[90%]">
        <div className="flex-none text-black">
          <ul className="menu menu-horizontal px-1 hover:">
            <li className="rounded-full hover:bg-[#4361EE70]">
              <a className="text-[16px]">Home</a>
            </li>
            <li className="rounded-full hover:bg-[#4361EE70]">
              <a className="text-[16px]">About</a>
            </li>
            <li className="rounded-full hover:bg-[#4361EE70]">
              <a className="text-[16px]">Listings</a>
            </li>
            <li className="rounded-full hover:bg-[#4361EE70]">
              <a className="text-[16px]">Services</a>
            </li>
            <li className="rounded-full hover:bg-[#4361EE70]">
              <a className="text-[16px]">Blogs</a>
            </li>
          </ul>
        </div>
        <div>
          <img src="/public/Group 1.svg" alt="" />
        </div>
        <div className="flex justify-between items-center gap-8">
        <div className="flex gap-2 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <p>Login/Register</p>
        </div>
        <div className="flex gap-1 bg-[#03AEFD] p-[5px] w-[169px] h-[50px] justify-center rounded-[30px] text-white items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
            <p>Add listing</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
