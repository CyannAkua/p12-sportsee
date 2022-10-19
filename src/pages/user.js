import LineC from "../components/lineChart";
import RadarC from "../components/radarChart";
import CircleC from "../components/circleChart";
import CountData from "../components/countData";
import UserData from "../components/userData";
import BarC from "../components/barChart";
import Header from "../components/header";
import {SideBar} from "../components/header"
import '../style/data.css'
import useFetch from "../components/dataParser";

export default function User(){
    const userData = useFetch(`//localhost:3000/user/18`);
    const activityData = useFetch(`//localhost:3000/user/18/activity`);
    const sessionsData = useFetch(`//localhost:3000/user/18/average-sessions`)
    const performanceData = useFetch(`//localhost:3000/user/18/performance`)
    if ((userData,activityData,sessionsData,performanceData) == null){
        console.log(userData,activityData,sessionsData,performanceData, (userData,activityData,sessionsData,performanceData) == null);
        return(
            <div>
                <Header/>
                <SideBar/>
                <div className='data'>
                    loading
                </div>
            </div>
        )
    }
else{
return(
    <div>
    <Header/>
    <SideBar/>
    <div className='data'>
        <UserData userData={userData} sessionData={sessionsData}/>
        <BarC/>
        <LineC/>
        <RadarC/>
        <CircleC/>
        <CountData/>
    </div>
    </div>
    )
}
}