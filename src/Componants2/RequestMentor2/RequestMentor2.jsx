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
               <div className="Left-Request d-flex">
                
                  <SidNav2/>
                  
                
                </div> {/** end Right-Request */}
            
               </div> {/** end col */}
             
               <div className="col">

                  <div className="Right-Request my-4 ">
              
                  <div className="right-green-title text-white p-2 d-flex ml-auto ">  mentoring request </div>

                    <div className="Left-Request-Top">
                
                      <div className="Left-Request-Top-container m-4 d-flex align-items-center flex-row-reverse justify-content-between">

                          <div className="Left-Request-Top-right w-50 ">
                                    <button className='border-0 align-items-center p-2 my-4 '>Mentor</button>
                          </div> {/** end Left-Request-Top-top */}

                  
                          <div className="Left-Request-Top-left bg-info d-flex flex-column ">
                                    <h3>Front End Development </h3>
                                    <span className='d-flex '> <h5  className='mr-3' > Khadija seif </h5> <small className='p-1' > is looking for a mentor </small>  </span>
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
