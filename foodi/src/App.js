import { Delivery } from "./components/Delivery";
import Featured from "./components/Featured";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Featured/>
      <Delivery/>
    </div>
  );
}

export default App;
