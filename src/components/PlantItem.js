import '../style/plantItem.css'
import CareScale from './CareScale'

function PlantItem({id, cover, name, water, light,price}){
	return (
		<li key={id} className="plant-item">
		<img src ={cover} alt={'${name} cover'} className="plant-item-cover"/>
		{name}
		<div>
		<CareScale scaleValue={light} careType='light'/>
		<CareScale scaleValue={water} careType='water'/>
		</div>
		</li>
		)
}
export default PlantItem



