import data from '../data/basicData.json'

import faticon from '../icons/fat-icon.svg'
import carbsicon from '../icons/carbs-icon.svg'
import caloriesicon from '../icons/calories-icon.svg'
import proteinicon from '../icons/protein-icon.svg'


let keyData = data[0].data.keyData

function SoloCount(props){
    return(
        <div>
            <div className={props.class + ' container'}>
                <div className= 'image'><img src={props.icon}/></div>
                <p>{props.keyData}{props.value}</p>
                <i>{props.name}</i>
            </div>
        </div>
    )
}

export default function CountData(){
    return(
    <div className='countData'>
        <SoloCount class='calories' keyData={keyData.calorieCount} name='Calories' value='kCal' icon={caloriesicon}/>
        <SoloCount class='proteines' keyData={keyData.proteinCount} name='Proteines' value='g' icon={proteinicon}/>
        <SoloCount class='glucides' keyData={keyData.carbohydrateCount} name='Glucides' value='g' icon={carbsicon}/>
        <SoloCount class='lipides' keyData={keyData.lipidCount} name='Lipides' value='g' icon={faticon}/>
    </div>
    )
}