import React from 'react'
import "./requestmentor2.css"
import Comments2 from '../Comments2/Comments2'
import SidNav2 from '../SideNav2/SidaNav2'
import Mony from '@iconscout/react-unicons/icons/uil-money-bill'
import Location from '@iconscout/react-unicons/icons/uil-location-point'
import Time from '@iconscout/react-unicons/icons/uil-clock'
import Exp from '@iconscout/react-unicons/icons/uil-bag'


function RequestMentor2() {

  return (

    <div className='RequestMentor2'> 
      
      <div className="container-fluid">
        <div className="row">

            <div className="col col-lg-3">
               <div className="Left-Request d-sm-flex d-none">
                
                  <SidNav2/>
                  
                
                </div> {/** end Right-Request */}
            
               </div> {/** end col */}
             
               <div className="col-sm">

                  <div className="Right-Request my-2">
              
                        
                       
                  
                        <div className="Left-Request-Top m-2">
                          <div className="right-green-title-box d-flex justify-content-end ">
                            <div className="right-green-title text-white p-2 text-center ">  mentoring request </div>
                          </div> {/** end right-green-title-box */}
                            {/* <div className="Left-Request-Top-right w-25 d-flex align-items-center flex-row-reverse justify-content-between"> */}
                             <div className="Left-Request-Top-right d-flex w-25">
                                <button className='border-0 m-auto p-2 text-center '>Mentor</button>
                            </div> {/** end Left-Request-Top-right */}
                

                          <div className="Left-Request-Top-container d-flex justify-content-center ">

                          

                           <div className="Left-Request-Top-left d-flex flex-column m-4 ">
                                    <div className="Left-Request-Top-left-title-res1 d-sm-flex flex-sm-column d-none">
                                        <h3>Front End Development </h3>
                                        <span className='d-flex '> <h5  className='mr-3' > Khadija seif </h5> <small className='p-1' > is looking for a mentor </small>  </span>
                                    </div> {/** end Left-Request-Top-left-title */}
                                    <div className="Left-Request-Top-left-title-res2 d-flex flex-column d-sm-none">
                                        <h6 className='w-100 py-2'>website ui design implemntation </h6>
                                        <div className='d-flex'> <h6  className='pr-1' > get mentored by : </h6> <h6 className='nameh5span pl-1'> bilal mansor </h6> </div>
                                    </div> {/** end Left-Request-Top-left-title */}
                                    <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, illo fugit!
                                      Tempora quidem ducimus distinctio, odit quisquam optio at officia excepturi delectus!</p>
                                    <div className="Left-Request-Top-left-list w-75 ">
                                        <ul className='d-flex gap-4 m-0 p-0'>
                                          <div className="left-ul">
                                            <li> <span className='pr-2' > <Mony className="icon" /> </span> <span> Paid: </span> <span> 200 sdg/H</span> </li>
                                            <li><span className='pr-2' > <Exp className="icon" /> </span><span>Expirence: </span> <span> none</span> </li>
                                           </div>{/** end left ul */}
                                           <div className="right-ul">
                                            <li><span className='pr-2'> <Location className="icon" /> </span><span> Location: </span>  <span> remote</span>  </li>
                                            <li><span  className='pr-2' > <Time className="icon" /> </span><span>Duration: </span>  <span> open duration</span>  </li>
                                           </div>{/** end right ul */}
                                        </ul>
                            </div> {/** end Left-Request-Top-left-list */}
                            <div className="Left-Request-Top-left-parags">
                      
                             <div className="Left-Request-Top-left-parags-1 py-2">
                                <h6 className='py-1'>I'm looking for help with </h6>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adip Obcaecati, aliquam labore.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing . Obcaecati, aliquam labore.</li>
                                    <li>Lorem ipsum dolortetur adipisicing elit. Obcaecati, aliquam labore.</li>
                                    <li>Lorem ipsum dolor sit amet cg elit. Obcaecati, aliquam hghgh hghgh hghghgh hghghghgh hghgh labore.</li>
                                </ul>
                              </div> {/** end Left-Request-Top-left-parags-1 */}
                              <div className="Left-Request-Top-left-parags-2 py-2">
                                        <h6 className='py-1' >Requirments</h6>
                                        <ul>
                                             <li>Lo it amet consectetur adip Obcaecati, aliquam labore.</li>
                                            <li>Lorem i onsectetur adipisicing . Obcaecati, aliquam labore.</li>
                                            <li>Lorem ipsum dolortetur adipisicing elit. Obcaecati, aliquam labore.</li>
                                         </ul>
                              </div> {/** end Left-Request-Top-left-parags-2 */}
                              <div className="Left-Request-Top-left-parags-3 py-2">
                                        <h6 className='py-1'>I have a background about</h6>
                                        <ul>
                                             <li>Lo it amet consectetur adip Obcaecati, aliquam labore.</li>
                                            <li>Lo it amet consectetur  hghg hghgh hghgh  adip Obcaecati, aliquam labore.</li>
                                            <li>Lorem i onsectetur adipisicing . Obcaecati, aliquam labore.</li>
                                            <li>Lorem ipsum dolortetur adipisicing elit. Obcaecati, aliquam labore.</li>
                                            <li>Lorem ipsum dolortetur adipisighgh hyghg hghhgh hghghh cing elit. Obcaecati, aliquam labore.</li>
                                         </ul>
                              </div> {/** end Left-Request-Top-left-parags-3 */}

                            </div> {/** end Left-Request-Top-left-parags */}


                          </div> {/** end Left-Request-Top-left*/}
                
                          
                  

                      </div> {/** end Left-Request-Top-container */}
                

                    </div>{/** end Left-Request-Top  */}
              







                  <div className="Left-Request-Bottm ">
                    <Comments2/>
                  </div> {/** end Left-Request-Bottm */}
                  
                
                  
                 </div> {/** end Left-Request */}
            
               </div> {/** end col */}

          
        </div> {/** end row */}

      </div>  {/** end container */}



    </div> /** end RequestMentor2 */

  )

}


export default RequestMentor2
