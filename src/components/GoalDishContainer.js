import { ChevronRightIcon, CakeIcon } from "@heroicons/react/outline";
const GoalDishContainer = () => {
  const data = [
    {
      name: "Goals",

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-orange-600"
        >
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
          <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" />
          <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
        </svg>
      ),

      rightIcon: <ChevronRightIcon className="text-white w-6 h-6" />,
      className:
        "flex bg-orange-600 bg-opacity-20 rounded-full items-center p-3",
      iconClass:
        "flex bg-white bg-opacity-20 rounded-full items-center p-5 hover:bg-gray-500 cursor-pointer",
    },
    {
      name: "Popular Dishes",

      icon: <CakeIcon className="h-10 w-10 text-blue-800" />,

      rightIcon: <ChevronRightIcon className="text-white w-6 h-6 " />,
      className: "flex bg-blue-800 bg-opacity-20 rounded-full items-center p-3",
      iconClass:
        "flex bg-white bg-opacity-20 rounded-full items-center p-5 hover:bg-gray-500 cursor-pointer",
    },
    {
      name: "Popular Dishes",

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-green-400"
        >
          <path d="M12 4a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4z" />
          <path d="M2 20h20" />
          <path d="M6 20v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
          <path d="M10 14h4" />
          <path d="M10 16h4" />
        </svg>
      ),

      rightIcon: <ChevronRightIcon className="text-white w-6 h-6" />,
      className:
        "flex bg-green-400 bg-opacity-20 rounded-full items-center p-3",
      iconClass:
        "flex bg-white bg-opacity-20 rounded-full items-center p-5 hover:bg-gray-500 cursor-pointer",
    },
  ];
  return (
    <div className="flex flex-col md:w-[30%] w-full p-4 rounded-sm bg-gray-800 gap-7">
      {data.map((item, index) => (
        <div key={index} className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className={item.className}>{item.icon}</div>
            <p className="text-white text-sm">{item.name}</p>
          </div>
          <div className={item.iconClass}>{item.rightIcon}</div>
        </div>
      ))}
    </div>
  );
};
export default GoalDishContainer;
