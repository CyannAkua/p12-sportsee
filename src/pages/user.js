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
let userId = 12;
export default function User(){
    const userData = useFetch(`//localhost:3000/user/${userId}`);
    const activityData = useFetch(`//localhost:3000/user/${userId}/activity`);
    const sessionsData = useFetch(`//localhost:3000/user/${userId}/average-sessions`)
    const performanceData = useFetch(`//localhost:3000/user/${userId}/performance`)
    console.log(userData)
    if ((userData,activityData,sessionsData,performanceData) == null){
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
        <UserData userData={userData} sessionsData={sessionsData}/>
        <BarC activityData={activityData}/>
        <LineC sessionsData={sessionsData}/>
        <RadarC performanceData={performanceData}/>
        <CircleC userData={userData}/>
        <CountData userData={userData}/>
    </div>
    </div>
    )
}
}