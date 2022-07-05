import {plantList} from '../datas/plantList'
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../style/categories.css'
function Categories({myCategory,updateMyCategory}){
	const categories = plantList.reduce((acc,plant) =>
		acc.includes(plant.category) ? acc : acc.concat(plant.category),[])

	function returnPlantsCategory(){
		var selectlist = document.getElementById('categories')
		let category = selectlist.value
		//console.log(category)
		updateMyCategory(myCategory=category)
		console.log(myCategory)
	}
	function reset(myCategory){
		updateMyCategory(myCategory="default")
		document.getElementById('categories').value="default"
		console.log(myCategory)
	}
	return(
		<div className="categories">
		   <label htmlFor="categories">Plant Categories :</label><br/>
		   <select name="categories" id="categories" onChange={() => returnPlantsCategory()}>
		     <option value="default" >All</option>
		     {categories.map(category => 
		     	  <option value={category} key={category}>{category}</option>
		     	)}
		   </select>
		   <button onClick={() => reset(myCategory)}>Reset</button>
		</div>
		)
}
export default Categories