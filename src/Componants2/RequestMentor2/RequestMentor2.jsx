import React from 'react'
import "./requestmentor2.css"
import Comments2 from '../Comments2/Comments2'
import SidNav2 from '../SideNav2/SidaNav2'


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

                  <div className="Right-Request my-4 ">
              
                    <div className="right-green-title-box d-flex justify-content-end ">
                        <div className="right-green-title text-white p-2 text-center ">  mentoring request </div>
                    </div> {/** end right-green-title-box */}
              
                    <div className="Left-Request-Top">
                
                      <div className="Left-Request-Top-container m-2 d-flex align-items-center flex-row-reverse justify-content-between">

                          <div className="Left-Request-Top-right d-flex w-25">
                                    <button className='border-0 m-auto justify-content-center align-items-center p-2 my-2'>Mentor</button>
                          </div> {/** end Left-Request-Top-top */}

                  
                          <div className="Left-Request-Top-left bg-info d-flex flex-column w-75">
                                    <h3>Front End Development </h3>
                                    <span className='d-flex '> <h5  className='mr-3' > Khadija seif </h5> <small className='p-1' > is looking for a mentor </small>  </span>
                                    <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, illo fugit! Tempora quidem ducimus distinctio, odit quisquam optio at officia excepturi delectus!</p>
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
