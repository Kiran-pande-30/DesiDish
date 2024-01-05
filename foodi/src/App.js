import {Delivery} from "./components/Delivery";
import Featured from "./components/Featured";
import NavBar from "./components/NavBar";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal"
import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Categories/>
      <Newsletter/>
    </div>
  );
}

export default App;
