import {Delivery} from "./components/Delivery";
import Featured from "./components/Featured";
import NavBar from "./components/NavBar";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal"
import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
