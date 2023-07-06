import React from 'react'
import "./SideNav2.css"

function SidaNav2() {
  return (
      <div className='SidaNav2' >
        
          <div className="container">
            
        
              <div className="sidnav-top">
                
                  <ul>
                      <li> <a href="#"> edit mentoring opportunity </a> </li>
                      <li> <a href="#"> settings </a> </li>
                      <li> <a href="#"> settingsterms and privecy </a> </li>
                  </ul>
          
              </div>  {/** end sidnav-top */}
              
              <div className="sidnavt-bottom d-flex gap-2">
              {/* <div className="sidnavt-bottom d-flex flex-row justify-content-start p-2 flex-fill "> */}
                  
                           <div className="sidnavt-bottom-left ">
                              new mentoring request 
                          </div> {/** end sidnavt-bottom-left */}

                          <div className="sidnavt-bottom-Right flex-shrink-1 ">
                                +
                          </div>  {/** end sidnavt-bottom-Right */}
              
                         {/** end row */}
  

              </div>  {/** end sidnavt-bottom */}
      
        

        
          </div> {/** end container */}
      
      
      </div> /** end SidaNav2 */
  )
}

export default SidaNav2