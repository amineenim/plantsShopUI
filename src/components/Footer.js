import { useState } from 'react'
import '../style/footer.css'


function Footer(){
	const [inputValue,setInputValue]= useState('')

	function handleInput(e){
	setInputValue(e.target.value)}

	function handleBlur(){
	if (! inputValue.includes('@'))
	{
		alert("il n y'a pas d'@ dans votre adresse !")
	}
}

	return(
		<footer className="footer">
		<div className="footer-element">Pour les passionnés de plantes</div>
		<div className="footer-element">Laissez nous votre email :</div>
		<input placeholder='tapez votre adresse mail' type="text"
		onChange={handleInput} onBlur={handleBlur}/>
		</footer>

		)
}
export default Footer