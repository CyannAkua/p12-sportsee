import { Tooltip, LineChart, Line, XAxis, YAxis,ResponsiveContainer } from 'recharts';

function CustomTooltip({ active, payload}){
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
  return null;
}
let i = 0
function CustomTick(){
  if (i === 0){ i++
    return('L')
  }
  if (i === 1 || i === 2){ i++
    return('M')
    }
  if (i === 3){ i++
    return('J')
  }
  if (i === 4){ i++
    return('V')
  }
  if (i === 5){ i++
    return('S')
  }
  if (i === 6){ i = 0
    return('D')
  }
  else{
    return(
      'x'
    )
  }
    i++ 
}

export default function LineC(props){
return(
  <ResponsiveContainer className='lineChartContainer'>
  <LineChart className='lineChart' data={props.sessionsData.sessions} >
  <XAxis dataKey="day" padding={{ left: 20, right: 20 }} axisLine={false} tickLine={false} tickFormatter={CustomTick} stroke='rgba(255,255,255,0.5)' />
  <YAxis type="number" domain={['dataMin - 30', 'dataMax + 90']} hide />
  <Tooltip content={<CustomTooltip/>}/>
  <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
      </linearGradient>
  </defs>
  <text x={20} y={40} textAnchor="left" dominantBaseline="middle" fill='rgba(255,255,255,0.5)'>Durée moyenne des sessions</text>
  <Line type='natural' dataKey="sessionLength" stroke='url(#colorUv)' dot={{r:0}} activeDot={{ r: 4 }} />
  </LineChart>
</ResponsiveContainer>
)}
