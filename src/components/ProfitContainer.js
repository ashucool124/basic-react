import {
  ChevronUpIcon,
  ChevronDownIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import CircularProgress from "./CircularProgress";

const ProfitContainer = () => {
  const data = [
    {
      name: "Total Orders",
      count: "75",
      icon: <ChevronUpIcon className="text-green-700 w-4 h-4" />,
      percentage: "3%",
      cart: <ShoppingBagIcon className="text-blue-800 w-4 h-4" />,
      className:
        "flex bg-blue-800 bg-opacity-20 rounded-full items-center p-3  w-fit",
      textClass: "text-green-700 text-xs",
    },
    {
      name: "Total Delivered",
      count: "70",
      icon: <ChevronDownIcon className="text-red-700 w-4 h-4" />,
      percentage: "3%",
      cart: <ShoppingCartIcon className="text-green-700 w-4 h-4" />,
      className:
        "flex bg-green-700 bg-opacity-20 rounded-full items-center p-3  w-fit",
      textClass: "text-red-700 text-xs",
    },
    {
      name: "Total Cancelled",
      count: "04",
      icon: <ChevronUpIcon className="text-green-700 w-4 h-4" />,
      percentage: "3%",
      cart: <ShoppingCartIcon className="text-red-700 w-4 h-4" />,
      className:
        "flex bg-red-700 bg-opacity-20 rounded-full items-center p-3  w-fit",
      textClass: "text-green-700 text-xs",
    },
    {
      name: "Total Revenue",
      count: "$12K",
      icon: <ChevronDownIcon className="text-red-700 w-4 h-4" />,
      percentage: "3%",
      cart: <ShoppingCartIcon className="text-purple-800 w-4 h-4" />,
      className:
        "flex bg-purple-800 bg-opacity-20 rounded-full items-center p-3 w-fit",
      textClass: "text-red-700 text-xs",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-5 ">
      <div className="flex flex-col md:flex-row gap-3  md:w-[70%] w-full">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex flex-col bg-gray-800 p-2 rounded-sm  md:w-[25%] w-full"
          >
            <div className="flex flex-col gap-1">
              <div className={item.className}>{item.cart}</div>
              <p className="text-white text-xs">{item.name}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-2xl text-white font-semibold">{item.count}</p>
              <div className="flex">
                {item.icon}
                <p className={item.textClass}>{item.percentage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-800 p-2 rounded-sm justify-between flex md:w-[30%] w-full">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-white">Net Profit</p>
          <p className="text-3xl font-bold text-white">$ 6759.25</p>
          <div className="flex">
            <ChevronUpIcon className="text-green-700 w-4 h-4" />
            <p className="text-green-700 text-xs">3%</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <CircularProgress progress={70} size={90} strokeWidth={10} />
          <p className="text-[6px] text-white">
            * The values here has been rounded off.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfitContainer;
