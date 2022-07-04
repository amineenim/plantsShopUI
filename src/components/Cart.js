import '../style/cart.css'
import { useState } from 'react'
import '../style/cart.css' 

function Cart({cart,updateCart}){

	
	const [isOpen,setIsOpen] = useState(true)

	const total = cart.reduce(
		(acc,plantType) => acc + plantType.amount*plantType.price,
		0
		)

	return isOpen ? (
		<div className="cart">
		<button onClick={() => setIsOpen(false)}>Cacher le Panier</button>
		<h2>Panier</h2>
		<ul>
		  {cart.map(({name,price,amount},index) =>(
		  	<div key ={'${name}-'}>
		  	{name} {price} * {amount}
		  	</div>
		  	))}
		</ul>
		<h3>Total :{total}$</h3>
		<button onClick={() => updateCart([])}>Vider le Panier</button>
		</div>
		)
		 :
	    <div className="cart-closed">
	    <button onClick={() => setIsOpen(true)}>Open</button>
	    </div>

	;
}
export default Cart;
