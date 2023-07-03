 import './App.css';
import Comments from "./Componants/Comments/Comments.jsx";
import RequestInfo from './Componants/RequestInfo/RequestInfo';
import SideNav from './Componants/SideNav/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as Unicons from '@iconscout/react-unicons';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>App</h1> */}
        {/* <button className='buttonDefault'>Primary</button> */}
        <SideNav/>
        <RequestInfo/>
        <Comments />
      </header>
    </div>
  );
}

export default App;
