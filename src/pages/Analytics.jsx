import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const Analytics = () => {

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Patient Visits",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Revenue ($)",
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Performance",
      },
    },
  };

  return (
    <div >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Analytics</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Bar data={chartData} options={options} />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
          {/* Add more detailed metrics here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Top Performing Doctors</h3>
          {/* Add a list or table of top performing doctors */}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
