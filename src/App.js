import './App.css';
import ClickedCounter from './component/ClickedCounter';
import HoverCounter from './component/HoverCounter';
//import Welcome from './component/Welcome';

function App() {

  return (
    <div className="App">
      <h1>Render Props in React Js</h1>
      {/* <Welcome /> */}

      <ClickedCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
