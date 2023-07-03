import './App.css';
import Comments from "./Componants/Comments/Comments.jsx";
import RequestInfo from './Componants/RequestInfo/RequestInfo';
import SideNav from './Componants/SideNav/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as Unicons from '@iconscout/react-unicons';


function App() {
  return (
    <div className="App">
        <SideNav/>
        <RequestInfo/>
        <Comments />
    </div>  /** end App */
  );
}

export default App;
