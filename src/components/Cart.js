import '../style/cart.css'
import { useState } from 'react'
import '../style/cart.css' 

function Cart(){
	const monsteraPrice = 10
	const [isOpen,setIsOpen] = useState(false)
	const [cart,updateCart] = useState(0)


	return isOpen ? (
		<div className="cart">
		<h1>Mon panier</h1>
		<div>Monstera : {monsteraPrice}€</div>
		<button onClick={() => updateCart(cart+1)} className="cart-add-button">Ajouter</button>
		<h3>Total : { cart*monsteraPrice }€</h3>
		<button onClick={() => setIsOpen(false)}>Cacher le Panier</button>
		<button onClick={() => updateCart(0)}>Vider le Panier</button>
		</div>
		)
		 :
	    <div className="cart-closed">
	    <button onClick={() => setIsOpen(true)}>Open</button>
	    </div>

	;
}
export default Cart;
