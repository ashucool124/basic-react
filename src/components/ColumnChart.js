import Chart from "react-apexcharts";

const ColumnChart = () => {
  const chartOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "5",
        "9",
        "11",
        "13",
        "15",
        "17",
        "19",
        "21",
        "23",
        "25",
        "27",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `$ ${val} thousands`,
      },
    },
  };
  const chartSeries = [
    {
      name: "Revenue",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 72, 75],
    },
    {
      name: "Profit",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 50, 49],
    },
    {
      name: "Expenses",
      data: [30, 39, 50, 41, 42, 47, 52, 54, 48, 55, 50],
    },
  ];
  return (
    <div className=" h-64">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height="100%"
      />
    </div>
  );
};
export default ColumnChart;
