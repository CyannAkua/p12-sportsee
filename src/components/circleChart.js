import { RadialBarChart, RadialBar,PolarGrid } from "recharts";
import basicData from "../data/basicData.json";

const data = [
  {
    name: "max",
    value: 1,
    fill: "none",
  },
  {
    name: "user",
    value: basicData[0].data.todayScore,
    fill: "#FF0101",
  },
];

export default function CircleC() {
  return (
    <RadialBarChart
      className="circleChart" width={260} height={260} cx={130} cy={130} barGap={0}
      innerRadius={70} outerRadius={70} barSize={10} data={data} startAngle={75} endAngle={435}>
      <circle className='whitecircle' cx={130} cy={130} r={65} fill='white'></circle>
      <text
      fill='#282D30'
        x={130} y={120} textAnchor="middle" dominantBaseline="middle" className="progress-label percentage">
        {basicData[0].data.todayScore * 100}%
      </text>
      <text
      fill='#74798C'
        x={130}
        y={140}
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-label objectif"
      >
        de votre objectif
      </text>
      <text fill='#20253A'
        x={30} y={30} textAnchor="middle" dominantBaseline="middle" className="progress-label score">
        Score
      </text>
      
      <RadialBar minAngle={0} cornerRadius={50 / 2} clockWise dataKey="value"/>
    </RadialBarChart>
  );
}
