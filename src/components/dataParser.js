const axios = require('axios');

let userId = 18

export default async function parseData(){
    let resp = await axios.get(`//localhost:3000/user/${userId}`)
    console.log('resp', resp.data)
    let respAct = await axios.get(`//localhost:3000/user/${userId}/activity`)
    let respAvS = await axios.get(`//localhost:3000/user/${userId}/average-sessions`)
    let respPer = await axios.get(`//localhost:3000/user/${userId}/performance`)
    let data = resp.data.data
    let parsedData = new dataParse(data.userInfos.firstName , data.todayScore ,data.keyData, respAct.data.data.sessions,respAvS.data.data.sessions,respPer.data.data.data)
    return(parsedData)
}
class dataParse {
   constructor(firstName,score,keyData,activity,sessions,performance){
       this.firstName = firstName
       this.score = score
       this.keyData = keyData
       this.activity = activity
       this.sessions = sessions
       this.performance = performance
   }
}