import React from 'react'
import "./PersonalInfo.css"
import SidaNav2 from '../SideNav2/SidaNav2'
import hero from "../../assets/images/colored_background.jpg"


function PersonalInfo() {
  return (
        // <div className="container">
    <div className='PersonalInfo d-flex p-1 w-100 m-auto'>
      
            <SidaNav2 className="left-pernav" />

            <div className="mdl-box-personal p-1">
        
              <div className="personal-top m-auto p-1">
                   <div className="personal-top-img p-1">
                     <img className='w-100' src={hero} alt="" />
                   </div>
                  <div className="per-box d-flex flex-row-reverse align-items-start gap-2 m-auto p-1">
                  <button className='border-0 p-2 text-white'>message</button>
                  <div className="info-top d-flex flex-column  align-items-center ">
                        <div className="gryCircl"></div>
                        <h4 className='pt-4'>balqees hamdi</h4>
                        <p className='pb-1 m-0' >software engneer</p>
                        <h6 className='p-0 m-0 text-white'>mentor</h6>
                    </div> {/** end per-box */}
            
              </div> {/** end personal-top */}
                     
           </div> {/** end mdl-box-personal */}


                 <div className="personal-med my-4">
              
                    <div className="ul-list-per-med d-flex  ">
                      <ul className='d-flex'>
                         <li className='' >personal information</li>
                         <li className='' >additnal information</li>
                      </ul>
                    </div>
                    <div className="form-per-med">
                        <form action="">
                          <div className="form-per-med-box d-flex flex-column w-100 ">
                            <div className="form-per-med-box-top d-flex ">
                                 <div className="form-per-med-left d-flex flex-column m-1">
                                    <label htmlFor="">name</label>
                                    <input type="text"  placeholder='your name'/>
                                    <label htmlFor="">job title</label>
                                    <input type="text" placeholder='softwar engneer' />
                                  </div> {/** end form-per-med-left */}
                                  <div className="form-per-med-right d-flex flex-column m-1">
                                    <label htmlFor="">phone number</label>
                                    <input type="phone" placeholder='055121515' />
                                    <label htmlFor="">email</label>
                                    <input type="email" placeholder='ama@gmail.com' />
                                  </div> {/** end form-per-med-right */}
                              </div> {/** end form-per-med-box-top */}
                                 <div className="form-per-med-box-btm2 d-flex   ">
                                     <div className="form-per-med-left-2 flex-column d-flex m-1  ">
                                         <label htmlFor="">phone number</label>
                                         <input type="email" placeholder='ama@gmail.com' />
                                     </div> {/** end form-per-med-left-2 */}
                                     <div className="form-per-med-right-2 d-flex flex-column m-1">
                                         <label htmlFor="">email</label>
                                         <input type="email" placeholder='ama@gmail.com' />
                                    </div> {/** end form-per-med-right-2  */}
                                 </div>  {/** end form-per-med-box-btm */}
                       
                
                                <div className="form-per-med-box-btm3">
                                
                                
                                </div> {/** end form-per-med-box-btm3 */}




                          </div> {/** end form-per-med-box */}

                      </form>
            
                    </div> {/** end form-per-med */}
                     
            
                  </div> {/** end personal-med */}
          
                  <div className="personal-btm">
                    
                  </div> {/** end personal-btm */}

             </div> {/** end container-box */}
          
              <div className="right-pernav">
                  <input type="text" />
                  <button>send</button>
              </div> 

   </div>  /** end PersonalInfo */ 

       
 
  )
}

export default PersonalInfo
