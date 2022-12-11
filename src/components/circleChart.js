import { RadialBarChart, RadialBar,ResponsiveContainer} from "recharts";

  /**
 * @description this is the circle chart component
 */
export default function CircleC(props) {



  /**
 * @description this constant takes cares of the formating the data correctly
 */
  const data = [
    {
      name: "max",
      value: 1,
      fill: "none",
    },
    {
      name: "user",
      value: props.userData.score == undefined ?  props.userData.todayScore : props.userData.score,
      fill: "#FF0101",
    },
  ];
  return (
    <ResponsiveContainer className='circleChartContainer'>
    <RadialBarChart
      className="circleChart" cx="50%" cy="50%" barGap={0}
      innerRadius="20%" outerRadius="100%" barSize={10} data={data} startAngle={75} endAngle={435}>
      <circle className='whitecircle' cx="50%" cy="50%" r='25%' fill='white'></circle>
      <text
      fill='#282D30'
        x="50%" y="47%" textAnchor="middle" dominantBaseline="middle" className="progress-label percentage">
        {props.userData.score == undefined ?  props.userData.todayScore * 100 : props.userData.score * 100}%
      </text>
      <text
      fill='#74798C'
        x="50%"
        y="53%"
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
    </ResponsiveContainer>
  );
}
