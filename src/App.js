import './App.css';
import Comments from "./Componants/Comments/Comments.jsx";
import RequestInfo from './Componants/RequestInfo/RequestInfo';
import SideNav from './Componants/SideNav/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as Unicons from '@iconscout/react-unicons';
import Header from './Componants/Header/Header';
import Footer from './Componants/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div className='app-container'>

        <Header/>
        <SideNav/>
        <RequestInfo />
        <Comments />
        {/* <Footer /> */}
        

        {/* <div className='MAin-Comments'>
          <Comments />
        </div>
        <div className='MAin-Footer'>
          <Footer/>
        </div> */}

        
      </div>

      
    </div>  /** end App */
  );
}

export default App;
