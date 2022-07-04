import '../style/App.css';
import { useState } from 'react'
import Banner from './Banner';
import Cart from './Cart';
import CareScale from './CareScale';
import Footer from './Footer'
import QuestionForm from './QuestionForm';
import'../style/banner.css';
import'../style/inner.css'
import ShoppingList from './ShoppingList'


function App() {
  const [cart,updateCart] = useState([])
  return (
    <div className="App">
      <Banner/>
      <div className="inner-layout">
      <Cart cart={cart} updateCart={updateCart}/>
      <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

