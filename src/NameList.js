import './App.css';

function NameList({nameList}) {

  return (
    <div className="App">

      <ul>
        {
          nameList.map((name, index) => (
            <li key={index}> {name}</li>
          ))
        }
      </ul>

    </div>
  );
}

export default NameList;
