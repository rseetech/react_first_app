import './App.css';
//import NameList from './NameList';
import Welcome from './component/Welcome';

function App() {

  //const nameList = ["Ramesh", "Rakesh", "Suresh", "Bhavesh"];
  return (
    <div className="App">
      <h1>Conditional Rending in React</h1>

      {/* <NameList nameList={nameList}/> */}
      <Welcome />
    </div>
  );
}

export default App;
