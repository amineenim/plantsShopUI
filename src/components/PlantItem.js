import '../style/plantItem.css'
import CareScale from './CareScale'
import { useState } from 'react'
function PlantItem({id, cover, name, water, light,price}){
	return (
		<li key={id} className="plant-item">
		<img src ={cover} alt={'${name} cover'} className="plant-item-cover"/>
		{name}
		<div>
		<CareScale scaleValue={light} careType='light'/>
		<CareScale scaleValue={water} careType='water'/>
		</div>
		<button onClick={() => handleClick(price)}>Ajouter</button>
		</li>
		)
}
export default PlantItem
let total = 0
function handleClick(price){
	alert('ajouté au panier !:') ;
	total+=price;
	console.log(total)
}


