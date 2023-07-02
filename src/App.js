 import './App.css';
import Comments from "./Componants/Comments/Comments.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App</h1>
        <button className='buttonDefault'>Primary</button>
        <Comments/>
      </header>
    </div>
  );
}

export default App;
