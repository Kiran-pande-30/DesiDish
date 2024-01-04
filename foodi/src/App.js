import {Delivery} from "./components/Delivery";
import Featured from "./components/Featured";
import NavBar from "./components/NavBar";
import TopPicks from "./components/TopPicks";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
    </div>
  );
}

export default App;
