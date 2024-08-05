import FeedSection from "./FeedSection";
import OrderTable from "./OrderTable";

const FeedContainer = () => {
  return (
    <div className="md:flex-row flex flex-col gap-5 w-full">
      <OrderTable />
      <FeedSection />
    </div>
  );
};
export default FeedContainer;
