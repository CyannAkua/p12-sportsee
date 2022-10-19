import React,{useState,useEffect} from 'react';
import axios from 'axios';

let userId = 18


export default function useFetch(url){
    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(null)
    useEffect(()=> {
        setLoading(true)
        axios.get(url)
        .then(function(response){
            setData(response.data.data)}
            )
        .catch((err)=>{setError(err)})
        .finally(setLoading(false));
    },[url]);
    return data
}

// export default class FetchData extends React.Component{
//     state = {
//         loaded:0 ,
//     }
//     async componentDidMount(){
//         const data = []
//         async function fetchData(url){
//         axios.get(url).then(res => {res.json()}).then(
//             json =>{
//                 data.push(json.data);
//                 this.loaded ++
//             }
//         )}
//         await fetchData(`//localhost:3000/user/${userId}`)
//         await fetchData(`//localhost:3000/user/${userId}/activity`)
//         console.log(data)
//         console.log(this.loaded)
//     }
//     render(){
//         return(
//             <div>
//                 {this.loaded < 4 ? <div>loading</div> : <div>loaded yaaay</div> }
//             </div>
//         )
// }}

// export default function parseData(){
//     let data = []
//     const [loaded, setLoaded] = useState(false)
//     data.push(useFetch(`//localhost:3000/user/${userId}`))
//     data.push(useFetch(`//localhost:3000/user/${userId}/activity`))
//     data.push(useFetch(`//localhost:3000/user/${userId}/average-sessions`))
//     data.push(useFetch(`//localhost:3000/user/${userId}/performance`))
//     console.log(data)
// }
// parseData()
// export function useFetch(url){
//     const [data, setData] = useState({})
//     useEffect(()=> {
//         async function fetch(){
//         await axios.get(url)
//         .then(
//         function (response){
//             setData(response.data.data)
//         }
//             ).catch(
//                 function(error){
//                     console.log(error)
//                 }
//             )
//         }
//         fetch()
//     },[])
//     return data
// }