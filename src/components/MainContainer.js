import ChartContainer from "./ChartContainer";
import FeedContainer from "./FeedContainer";
import ProfitContainer from "./ProfitContainer";
import {
  HomeIcon,
  ChartBarIcon,
  ClipboardIcon,
  CreditCardIcon,
  ShoppingBagIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import Navbar from "./NavBar";
const MainContainer = () => {
  const tabs = [
    <HomeIcon className="w-6 h-6 text-white" />,
    <ChartBarIcon className="w-6 h-6 text-white" />,
    <ClipboardIcon className="w-6 h-6 text-white" />,
    <CreditCardIcon className="w-6 h-6 text-white" />,
    <ShoppingBagIcon className="w-6 h-6 text-white" />,
  ];
  return (
    <div className="flex h-full">
      <div className="flex flex-col md:w-[5%] w-[15%] bg-gray-800 text-white">
        {tabs.map((icon, index) => (
          <div key={index}>
            <Navbar icon={icon} />
          </div>
        ))}
        <div className="flex items-center justify-center h-16 hover:bg-gray-700 cursor-pointer mt-auto">
          <LoginIcon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="bg-black h-fit md:w-full w-[85%] p-5  gap-5 flex flex-col">
        <p className="text-white text-2xl font-semibold">Dasboard</p>
        <ProfitContainer />
        <ChartContainer />
        <FeedContainer />
      </div>
    </div>
  );
};
export default MainContainer;
