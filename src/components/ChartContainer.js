import { useState } from "react";
import ColumnChart from "./ColumnChart";
import GoalDishContainer from "./GoalDishContainer";

const ChartContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Selected, setSelected] = useState("Weekly");
  const optionData = ["Weekly", "Monthly", "Yearly"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    console.log(`Selected: ${option}`);
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <div className="md:flex-row flex flex-col gap-5 w-full">
      <div className="bg-gray-800 p-2 rounded-sm md:w-[70%] w-full">
        <div className="flex justify-between">
          <p className="text-white text-2xl font-semibold">Activity</p>
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              className="inline-flex justify-center w-full rounded-md border  border-gray-300 shadow-sm px-4 py-2 text-white text-sm font-medium bg-gray-700 hover:bg-gray-500 focus:outline-none"
            >
              {Selected}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.293-3.294a1 1 0 111.414 1.415l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.415z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="origin-top-right z-20 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {optionData.map((option) => (
                  <div key={option} className="py-1 bg-gray-800">
                    <button
                      onClick={() => handleOptionClick(option)}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800"
                    >
                      {option}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <ColumnChart />
      </div>
      <GoalDishContainer />
    </div>
  );
};
export default ChartContainer;
