import '../style/App.css';
import { useState } from 'react'
import Banner from './Banner';
import Cart from './Cart';
import CareScale from './CareScale';
import Footer from './Footer'
import QuestionForm from './QuestionForm';
import'../style/banner.css';
import'../style/inner.css';

import Categories from './Categories'
import ShoppingList from './ShoppingList'


function App() {
  const [cart,updateCart] = useState([])
  const [myCategory,updateMyCategory] =useState("")
  return (
    <div className="App">
      <Banner/>
      <div className="inner-layout">
      <Cart cart={cart} updateCart={updateCart}/>
      
      <Categories myCategory={myCategory} updateMyCategory={updateMyCategory}/>
      <ShoppingList 
         cart={cart} updateCart={updateCart}
         myCategory={myCategory} updateMyCategory={updateMyCategory}
      />
    
      </div>
      <Footer/>
    </div>
  );
}

export default App;

