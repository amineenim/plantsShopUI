import {plantList} from '../datas/plantList'
import '../style/shoppinglist.css'
import CareScale from './CareScale'
import PlantItem from './PlantItem'

function ShoppingList({cart,updateCart,myCategory,updateMyCategory})
{
	const categories = plantList.reduce(
		(acc,plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),[])
	function addToCart(name,price){
		const currentPlantSaved = cart.find((plant) => (plant.name === name))
	
		if (currentPlantSaved){
			const cartFiltredCurrentPlant = cart.filter(
				(plant) => plant.name!== name
				)
			console.log(cartFiltredCurrentPlant)
			updateCart([...cartFiltredCurrentPlant,{name,price,amount: currentPlantSaved.amount+1}])
		} 
		else{
			updateCart([...cart,{name,price,amount : 1}])
		}
	}




	return (
		<div className="shopping-list">
		<ul className="plants-list">
		{   (myCategory !=="default") ?
			plantList.map(
				({id,cover,name,water,light,price,category}) => 
				(
					(category === myCategory) ?
					(<div key={id}>
					<PlantItem key={id} id={id} cover={cover} name ={name}  water ={water} light = {light} price ={price}/>
					<button onClick={() => addToCart(name,price) }>Ajouter au Panier</button>
					</div>) : '') 
				) : plantList.map(({id,cover,name,water,light,price,category}) =>
				(<div key={id}>
					<PlantItem key={id} id={id} cover={cover} name ={name}  water ={water} light = {light} price ={price}/>
					<button onClick={() => addToCart(name,price) }>Ajouter au Panier</button>
					</div>)
				)
			}
		</ul>
		</div>
		)
}
export default ShoppingList 