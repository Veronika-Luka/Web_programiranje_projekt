import Navbar from "./Navbar";
import Header from "./Header";
import Cards from "./Cards";
import HomeCards from "./HomeCards";
import SearchCards from "./SearchCards";
import Karousel from "./Karousel";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BrandCards from "./BrandCards";
import Cart from "./Cart";
import Footer from "./Footer";
import Favorites from "./Favorites";




function App() {

  


  return (
    <Router>
    <div className="App">
      <Header/>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <HomeCards/>
        </Route>
        <Route path="/cards/:tag">
          <Cards/>
        </Route>
        <Route path="/search/:term">
          <SearchCards/>
        </Route>
        <Route path="/brands/:brand">
          <BrandCards/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>

        <Route path="/favorites">
         <Favorites/>
        </Route>
        
      </Switch>
      <Karousel></Karousel>
       <Footer/>   
    </div>
    </Router>
  );
}

export default App;