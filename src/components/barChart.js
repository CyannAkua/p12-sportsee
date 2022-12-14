import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
let activityData = [];
let lowestWeight = 9999;
let lowestCal = 9999;

/**
 * @description this takes cares of the formating the data for the bar chart so they're both "equal" on the chart
 */
function crunchingNumbers() {
  activityData.forEach((_data) => {
    if (lowestCal >= _data.calories) {
      lowestCal = _data.calories;
    }
    if (lowestWeight >= _data.kilogram) {
      lowestWeight = _data.kilogram;
    }
  });
  activityData.forEach((_data) => {
    _data.crunchedCalories =
      (_data.calories - lowestCal) / 80 + (lowestWeight - 2);
    return _data;
  });
}
/**
 * @description this is the bar chart
 */
export default function BarC(props) {
  activityData = props.activityData.sessions;
  crunchingNumbers();
  return (
    <ResponsiveContainer
      className="barChartContainer"
      width="100%"
      height="100%"
    >
      <BarChart
        className="barChart"
        data={activityData}
        barSize={8}
        barGap={8}
        margin={{ left: -20, right: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          tickFormatter={CustomTick}
          tickLine={false}
          height={20}
          stroke="#9B9EAC"
        />
        <YAxis
          dataKey="kilogram"
          domain={["dataMin-3", "dataMax+3"]}
          axisLine={false}
          tickLine={false}
          stroke="#9B9EAC"
        />
        <YAxis dataKey="calories" orientation="right" />
        <Tooltip content={<CustomTooltip />} />
        <text
          fill="#9B9EAC"
          x={30}
          y={20}
          textAnchor="left"
          dominantBaseline="middle"
        >
          Activité quotidienne
        </text>
        <Legend
          align="right"
          verticalAlign="top"
          iconType="circle"
          wrapperStyle={{ paddingBottom: 16, marginTop: 6 }}
          iconSize={8}
          stroke="#74798C"
        />
        <Bar
          name="Poids (kg)"
          dataKey="kilogram"
          fill="#282D30"
          radius={[8, 8, 0, 0]}
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey="crunchedCalories"
          fill="#E60000"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({ active, payload }) => {
  /**
   * @description this is the custom tooltip for the bar chart, it also recalculate the data
   */

  if (active && payload && payload.length) {
    let restoredCal = Math.floor(
      (payload[1].value - (lowestWeight - 2)) * 80 + lowestCal
    );
    return (
      <div className="custom-tooltip">
        <p className="label kilogram">{`${payload[0].value}kg`}</p>
        <p className="label calories">{`${restoredCal}Kcal`}</p>
      </div>
    );
  }

  return null;
};
function CustomTick(active, tick) {
  if (active && tick) {
    return tick + 1;
  }
  return 1;
}
