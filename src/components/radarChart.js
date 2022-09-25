import { Radar, RadarChart, PolarGrid, PolarAngleAxis,ResponsiveContainer} from 'recharts';
import radarData from '../data/radarData.json';


const data =[
    {
        kind:'Intensité',
        value: radarData[0].data.data[5].value,
    },
    {
        kind: 'Vitesse',
        value: radarData[0].data.data[4].value,
    },
    {
        kind: 'Force',
        value: radarData[0].data.data[3].value,
    },
    {
        kind: 'Endurance',
        value: radarData[0].data.data[2].value,
    },

    {
        kind: 'Energie',
        value: radarData[0].data.data[1].value,
    },
    {
        kind: 'Cardio',
        value: radarData[0].data.data[0].value,},   
]

/**
 * @description this is the radar chart
 * @returns 
 */

export default function RadarC() {
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
