import React, { useContext } from 'react'
import { CntContext } from '../../hooks/CntContext';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ filter }) => {
  const { cnt } = useContext(CntContext);

  if (!cnt || cnt.length === 0) {
    return <p className="text-white text-center">Loading chart...</p>;
  }

  const data = {
    labels: cnt.map(item => item.token),
    datasets: [
      {
        label: filter,
        data: cnt.map(item => item[filter]),
        backgroundColor: [
          "#e63946", 
          "#457b9d", 
          "#ffb703" 
        ],
        borderColor: "#1d3557",
        borderWidth: 3
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#fff",
          font: { size: 16 }
        }
      },
      tooltip: { enabled: true }
    }
  };

  return (
    <div className="w-[400px] h-[400px] bg-[#0f1e34] rounded-3xl p-4 flex items-center justify-center border-1 border-blue-200 ">
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
