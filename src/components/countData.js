import faticon from '../icons/fat-icon.svg'
import carbsicon from '../icons/carbs-icon.svg'
import caloriesicon from '../icons/calories-icon.svg'
import proteinicon from '../icons/protein-icon.svg'

    /**
 * @description this is the function that create the four display, using a react component
 */
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

export default function CountData(props){
    let keyData = props.userData.keyData 
    return(
    <div className='countData'>
        <SoloCount class='calories' keyData={keyData.calorieCount} name='Calories' value='kCal' icon={caloriesicon}/>
        <SoloCount class='proteines' keyData={keyData.proteinCount} name='Proteines' value='g' icon={proteinicon}/>
        <SoloCount class='glucides' keyData={keyData.carbohydrateCount} name='Glucides' value='g' icon={carbsicon}/>
        <SoloCount class='lipides' keyData={keyData.lipidCount} name='Lipides' value='g' icon={faticon}/>
    </div>
    )
}