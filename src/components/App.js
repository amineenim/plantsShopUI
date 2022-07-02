import '../style/App.css';
import Banner from './Banner';
import Cart from './Cart';
import CareScale from './CareScale';
import Footer from './Footer'
import QuestionForm from './QuestionForm';
import'../style/banner.css';
import ShoppingList from './ShoppingList'
import '../style/container.css'

function App() {
  return (
    <div className="App">
      <Banner/>
      <div className="container">
      <Cart/>
      <ShoppingList/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

