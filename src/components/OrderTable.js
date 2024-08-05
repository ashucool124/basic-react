const OrderTable = () => {
  const data = [
    {
      id: 1,
      customer: "Alice Johnson",
      orderNo: "A123",
      amount: "$120.00",
      status: "Shipped",
    },
    {
      id: 2,
      customer: "Bob Smith",
      orderNo: "B456",
      amount: "$85.00",
      status: "Pending",
    },
    {
      id: 3,
      customer: "Carol Davis",
      orderNo: "C789",
      amount: "$200.00",
      status: "Delivered",
    },
    {
      id: 4,
      customer: "David Wilson",
      orderNo: "D012",
      amount: "$60.00",
      status: "Shipped",
    },
    {
      id: 5,
      customer: "Eva Green",
      orderNo: "E345",
      amount: "$150.00",
      status: "Cancelled",
    },
    {
      id: 6,
      customer: "Frank Miller",
      orderNo: "F678",
      amount: "$95.00",
      status: "Pending",
    },
  ];

  return (
    <div className="md:w-[70%] w-full">
      {/* Desktop Table */}
      <table className="hidden md:table md:min-w-full min-w-[40%] divide-y divide-gray-700 rounded-sm">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Order No.
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="p-4 rounded-sm bg-gray-800 divide-y divide-gray-700">
          {data.map((row) => (
            <tr key={row.id}>
              <td className="px-6 py-4 text-gray-300 whitespace-nowrap">
                {row.customer}
              </td>
              <td className="px-6 py-4 text-gray-300 whitespace-nowrap">
                {row.orderNo}
              </td>
              <td className="px-6 py-4 text-gray-300 whitespace-nowrap">
                {row.amount}
              </td>
              <td className="px-6 py-4 text-gray-300 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor(
                    row.status
                  )}`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile View */}
      <div className="p-4 block md:hidden bg-gray-800">
        <p className="text-white text-2xl font-semibold">Customer's feedback</p>
        {data.map((row) => (
          <div key={row.id} className="border-t border-gray-700 py-4">
            <div className="flex justify-between px-2">
              <span className="text-white font-semibold">Customer:</span>
              <span className="text-gray-300">{row.customer}</span>
            </div>
            <div className="flex justify-between px-2">
              <span className="text-white font-semibold">Order No:</span>
              <span className="text-gray-300">{row.orderNo}</span>
            </div>
            <div className="flex justify-between px-2">
              <span className="text-white font-semibold">Amount:</span>
              <span className="text-gray-300">{row.amount}</span>
            </div>
            <div className="flex justify-between px-2">
              <span className="text-white font-semibold">Status:</span>
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor(
                  row.status
                )}`}
              >
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Utility function to determine status color
const statusColor = (status) => {
  switch (status) {
    case "Shipped":
      return "bg-green-100 text-green-800";
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    case "Delivered":
      return "bg-blue-100 text-blue-800";
    case "Cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default OrderTable;
