import {plantList} from '../datas/plantList'
import '../style/shoppinglist.css'
import CareScale from './CareScale'
import PlantItem from './PlantItem'

function ShoppingList()
{
	const categories = plantList.reduce(
		(acc,plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),[])
	
	return (
		<div className="shopping-list">
		<ul className="plants-category">
		{
			categories.map(
			  (category) =>  (<li key={category}>{category}</li>)) }
		</ul>
		<ul className="plants-list">
		{
			plantList.map(
				({id,cover,name,water,light,price}) => 
				(<PlantItem key={id}
					id   ={id}
				    cover={cover}
				    name ={name}
				    water ={water}
				    light = {light}
				    price ={price}/>) )

			}
		</ul>
		</div>

		)
}
export default ShoppingList 