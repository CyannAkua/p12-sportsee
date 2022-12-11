import { Radar, RadarChart, PolarGrid, PolarAngleAxis,ResponsiveContainer} from 'recharts';


    /**
 * @description this is the radar chart component
 */
export default function RadarC(props) {
    /**
 * @description this formats the data
 */
const data =[
    {
        kind:'Intensité',
        value: props.performanceData.data[5].value,
    },
    {
        kind: 'Vitesse',
        value: props.performanceData.data[4].value,
    },
    {
        kind: 'Force',
        value: props.performanceData.data[3].value,
    },
    {
        kind: 'Endurance',
        value: props.performanceData.data[2].value,
    },

    {
        kind: 'Energie',
        value: props.performanceData.data[1].value,
    },
    {
        kind: 'Cardio',
        value: props.performanceData.data[0].value,},   
]

    return (
        <ResponsiveContainer className='radarChartContainer'>
    <RadarChart className='radarChart' outerRadius="60%" data={data} fill='white'>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" />
        <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
    </RadarChart>
    </ResponsiveContainer>
    );
  }
