import {
  SearchIcon,
  MailIcon,
  CogIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className=" md:w-full w-[100%]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="md:w-12 md:h-12 w-8 h-8 text-blue-500 ml-3 md:mt-3 mt-6 absolute"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>

      <div className="p-5 bg-gray-800 flex justify-between">
        <div className="relative flex md:w-full  items-center md:ml-[6%] ml-[10%]">
          <SearchIcon className="absolute w-4 h-4 text-white ml-3" />
          <input
            className=" bg-gray-700 md:w-[40%] w-[60%] p-2 px-9 rounded-md placeholder-white border-2 border-solid border-gray-500"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-3">
          <div className="flex bg-white bg-opacity-20 rounded-full items-center p-3 hover:bg-gray-500 cursor-pointer">
            <MailIcon className=" w-6 h-6 text-white " />
          </div>
          <div className="flex bg-white bg-opacity-20 rounded-full items-center p-3 hover:bg-gray-500 cursor-pointer">
            <CogIcon className=" w-6 h-6 text-white " />
          </div>
          <div className="flex bg-white bg-opacity-20 rounded-full items-center p-3 hover:bg-gray-500 cursor-pointer">
            <BellIcon className=" w-6 h-6 text-white " />
          </div>
          <div className="flex bg-white bg-opacity-20 rounded-full items-center p-3 hover:bg-gray-500 cursor-pointer">
            <UserCircleIcon className=" w-6 h-6 text-white " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
