import LineC from "../components/lineChart";
import RadarC from "../components/radarChart";
import CircleC from "../components/circleChart";
import CountData from "../components/countData";
import UserData from "../components/userData";
import BarC from "../components/barChart";
import Header from "../components/header";
import {SideBar} from "../components/header"
import '../style/data.css'

export default function User(){
return(
    <div>
    <Header/>
    <SideBar/>
    <div className='data'>
        <UserData/>
        <BarC/>
        <LineC/>
        <RadarC/>
        <CircleC/>
        <CountData/>
    </div>
    </div>
    )
}