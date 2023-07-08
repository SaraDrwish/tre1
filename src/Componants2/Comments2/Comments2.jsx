import React from 'react'
import "./comments2.css"

function Comments2() {
  return (
    <div className='Comments2' >

      <div className="container">
      
        <div className="Comments2-container d-flex flex-column p-2  ">  
          


               <div className="Comments2-top d-flex  flex-column p-2">
                  <div className="Comments2-top-box">
              
                       <div className="left-Comments2-top-box">
                          <div className="left-Comments2-top-box-img">
                          </div>{/** end left-Comments2-top-box-img */}
                       </div>  {/** end left-Comments2-top-box */}
                      
                       <div className="right-Comments2-top-box">
                          <div className="left-Comments2-top-box-title">
                          </div> {/** end left-Comments2-top-box-title */}
                          <div className="left-Comments2-top-box-comnt">
                          </div> {/** end left-Comments2-top-box-comnt */}
                       </div> {/** end right-Comments2-top-box */}
              
                  </div> {/** end Comments2-top-box */}
              </div> {/**end  Comments2-top */}
          

             <div className="Comments2-btm d-flex p-2">
                <div className="Comments2-btm-box d-flex flex-column p-2 w-100  rounded ">
                    <input type="text" placeholder='Comments'   name="comments"  className='border-light border-0 rounded p-4 '  />
                    <button className='border-0 p-2 text-white my-4' >Send</button>
                </div> {/** end Comments2-btm-box */}
                                   
                                
              </div> {/** end Comments2-btm */}
             
          
          
          </div> {/** end Comments2-container */}
                    


      </div> {/** end container */}

    </div>  /** end Comments2 */

  )
}

export default Comments2