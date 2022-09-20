import data from '../data/basicData.json'
import sportData from '../data/currentdata.json'
let userData = data[0].data.userInfos
let sessionData = sportData[0].data.sessions
let ReportText = function(){
    if(sessionData[6].sessionLength >= sessionData[5].sessionLength){
        return(<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>)
    }
}

export default function UserData(){
    return(
        <div className='userData'>
            <h1>Bonjour <b>{userData.firstName}</b></h1>
            <ReportText/>
        </div>
    )
}