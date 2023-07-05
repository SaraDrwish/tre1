import './App.css';
import Comments from "./Componants/Comments/Comments.jsx";
import RequestInfo from './Componants/RequestInfo/RequestInfo';
import SideNav from './Componants/SideNav/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as Unicons from '@iconscout/react-unicons';
import Header from './Componants/Header/Header';
import Footer from './Componants/Footer/Footer';
import Comments2 from './Componants2/Comments2/Comments2';
import RequestMentor2 from './Componants2/RequestMentor2/RequestMentor2';


function App() {
  return (
    <div className="App">
      <div className='app-container'>

        <Header/>
        <SideNav />
        <div className='App-Container-2'>
          <RequestInfo />
        </div>

        <div className="Footer-container">
              
            <Footer/>

        </div> {/**end Comments-container */ }
        
        {/* <Footer /> */}
        

        {/* <div className='MAin-Comments'>
          <Comments />
        </div>
        <div className='MAin-Footer'>
          <Footer/>
        </div> */}

        
      </div> {/** end app-container */}



       <div className='app2-container2'>

       

        
      </div> {/** end app2-container 2 */}




      
    </div>  /** end App */
  );
}

export default App;
