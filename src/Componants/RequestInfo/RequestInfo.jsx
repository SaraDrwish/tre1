import React from 'react'
import "./requestinfo.css"
import Mony from '@iconscout/react-unicons/icons/uil-money-bill'
import Location from '@iconscout/react-unicons/icons/uil-location-point'
import Time from '@iconscout/react-unicons/icons/uil-clock'
import Exp from '@iconscout/react-unicons/icons/uil-bag'
 

function RequestInfo() {

  return (
      <div className='RequestInfo'>
          
          <div className="reqTop">
         
            <div className="reqTitleLeft">
                <h3>Front End Development</h3>
                <div className="Title2">
                    <h3>khadija sef</h3>
                    <span>is looking for a mentor </span>
                </div> {/** end Title2 */}
            </div> {/** end reqTitleLeft */}

              <div className="reqTitleRight">
                  <div className="topRightTitle">Mentoring request</div>
                <button className='buttonDefault ReqBtn '>Mentor</button>
              </div> {/** end reqTitleRight */}
              
          </div> {/**end reqTop */}
          
          <div className="reqCon">
              <p>Lorem, ipsum dolor sit amet consectetur adi. Eius in labore nostrum inventore autem exercitationem.
                  Lorem, ipsum dolorin labore nostrum inventore autem exercitationem.
              </p>
              <div className="list">
                  <ul>
                      <div className="listLeft">
                          <li> <Mony className="icon" /> Paid :  <span>200 sdg/H</span></li>
                          <li> <Exp className="icon" /> Expirence: <span>none</span></li>
                      </div>
                      <div className="listRight">
                         <li> <Location className="icon" /> Location :  <span>remote</span></li>
                         <li> <Time className="icon"/> Duration :  <span>open duration</span></li> 
                      </div>
                      
                  </ul>
              </div>
          </div> {/** end reqCon */}

          <div className="contantList contantList1">
              <h4>I'm looking for help with </h4>
              <ul>
                  <li>Lorem ipsum dolor sit amet consectetur adip Obcaecati, aliquam labore.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing . Obcaecati, aliquam labore.</li>
                  <li>Lorem ipsum dolortetur adipisicing elit. Obcaecati, aliquam labore.</li>
                  <li>Lorem ipsum dolor sit amet cg elit. Obcaecati, aliquam hghgh hghgh hghghgh hghghghgh hghgh labore.</li>
              </ul>
          </div> {/**end contantList1 */}

           <div className="contantList contantList2">
              <h4>Requirments </h4>
              <ul>
                  <li>Lo it amet consectetur adip Obcaecati, aliquam labore.</li>
                  <li>Lorem i onsectetur adipisicing . Obcaecati, aliquam labore.</li>
                  <li>Lorem ipsum dolortetur adipisicing elit. Obcaecati, aliquam labore.</li>
               </ul>
          </div> {/**end contantList2 */}

          <div className="contantList contantList3">
              <h4>I have a background about </h4>
              <ul>
                  <li>Lo it amet consectetur adip Obcaecati, aliquam labore.</li>
                  <li>Lo it amet consectetur  hghg hghgh hghgh  adip Obcaecati, aliquam labore.</li>
                  <li>Lorem i onsectetur adipisicing . Obcaecati, aliquam labore.</li>
                  <li>Lorem ipsum dolortetur adipisicing elit. Obcaecati, aliquam labore.</li>
                  <li>Lorem ipsum dolortetur adipisighgh hyghg hghhgh hghghh cing elit. Obcaecati, aliquam labore.</li>
               </ul>
          </div> {/**end contantList3 */}

          <div className="aboutMentor">
              
              <h4>About Khadija sef</h4>
              <div className="aboutContainer">
                  <div className="aboutContLeft">
                      <div className="aboutContLeft-BigBox">
                          
                            <div className="aboutContLeft-right">
                                    <span>name</span>
                                    <p>Balqees Hamdi</p>

                                    <span>I'm a</span>
                                    <p>Fresh Graduate</p>

                                    <span>university</span>
                                    <p>intrnational islamic university </p>  
                            </div> {/** end aboutContLeft-right */}
                        
                            <div className="aboutContLeft-left">
                                    <span>phone number</span>
                                    <p>055 4554 4545 </p> 

                                    <span>email</span>
                                <p>email@gmail.com</p> 
                                
                          </div> {/** end aboutContLeft-left */}
                          
                      </div> {/** end aboutContLeft-BigBox */}
                      
                      <div className="aboutContLeft-btm">
                          <p>Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit. Laudantium, sed!
                          Laudantium, aut optio quibusdam
                          perspiciatis a ad vel doloremque
                          in reiciendis dolorem.</p>
                      </div> {/** end aboutContLeft-btm */}
                      


                  </div> {/** end aboutContLeft */}

                  <div className="aboutContRight">
                      
                      <span>Expirise</span>
                      <ul>
                          <li>Software Engneering</li>
                          <li>front end development </li>
                          <li>front end deve </li>
                      </ul>
                      <div className="aboutContRightImgBox">
                          {/* <img src="" alt="" /> */}
                          <p></p>
                          <button className='buttonDefault'>View Profile</button>
                      </div>
                      
                  </div> {/** end aboutContRight */}
                  
              </div> {/** end aboutContainer */}

          </div> {/** end aboutMentor */}




      </div> /** end RequestInfo */
      
  )
}

export default RequestInfo
