import {Delivery} from "./components/Delivery";
import Featured from "./components/Featured";
import NavBar from "./components/NavBar";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
    </div>
  );
}

export default App;
