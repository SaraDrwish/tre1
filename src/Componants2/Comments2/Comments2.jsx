import React from 'react';
import "./comments2.css";
import { useState, useEffect, useRef } from 'react';


const Comments2 = ({ comment }) => {
  const [input, setInput] = useState("");
  const onAddComment = () => {
    
  };


  return (
    <div className='Comments2' >

      <div className= "container ">
      {/* <div className={comment.id === 1 ? "container" : "container"} > */}
        
   
        <div className="Comments2-container d-flex flex-column p-2  ">
   
          <div className="Comments2-top d-flex  flex-column p-4 m-2">
            <div className="Comments2-top-box d-flex  flex-column p-3 m-auto w-100 m-2">
              
              <div className="Comments2-top-box-container d-flex  p-1 ">
                
                <div className="left-Comments2-top-box d-flex justify-content-center align-items-center ">
                  <div className="left-Comments2-top-box-img"></div>{/** end left-Comments2-top-box-img */}
                </div>  {/** end left-Comments2-top-box */}
                            
                <div className="right-Comments2-top-box d-flex flex-column mx-4 w-100">
                  <div className="left-Comments2-top-box-title m-2">
                    <input placeholder='name Noran Ali' value={input} onChange={(e)=> setInput(e.target.value)} type="text" className='border-light border-0 rounded p-1 w-100' />
                  </div> {/** end left-Comments2-top-box-title */}
                  <div className="left-Comments2-top-box-comnt m-2">
                    <input placeholder='single Comment' type="text" className='border-light border-0 rounded p-1 w-100 ' />
                  </div> {/** end left-Comments2-top-box-comnt */}
                </div> {/** end right-Comments2-top-box */}
              </div> {/** end Comments2-top-box-container */}
              
              {/* <div className="col-sm m-1"> */}
              <div className="subComnt d-flex flex-column m-1 ">
                <div className="Comments2-top-box-container d-flex  p-1 ">
                
                  <div className="left-Comments2-top-box d-flex justify-content-center align-items-center ">
                    <div className="left-Comments2-top-box-img"></div>{/** end left-Comments2-top-box-img */}
                  </div>  {/** end left-Comments2-top-box */}
                                  
                  <div className="right-Comments2-top-box d-flex flex-column mx-4 w-100">
                    <div className="left-Comments2-top-box-title m-2">
                      <input placeholder='name Noran Ali' value="name : Noran Ali" type="text" className='border-light border-0 rounded p-1 w-100' />
                    </div> {/** end left-Comments2-top-box-title */}
                    <div className="left-Comments2-top-box-comnt m-2">
                      <input placeholder='single Comment' type="text" className='border-light border-0 rounded p-1 w-100 ' />
                    </div> {/** end left-Comments2-top-box-comnt */}
                  </div> {/** end right-Comments2-top-box */}
                </div> {/** end Comments2-top-box-container */}
              </div>
              {/** end sub commnt */}
                
              {/* </div> */}
              {/** end col */}
                
              <div className="Comments2-top-box-container d-flex  p-1 ">
                                    
                <div className="left-Comments2-top-box d-flex justify-content-center align-items-center ">
                  <div className="left-Comments2-top-box-img"></div>{/** end left-Comments2-top-box-img */}
                </div>  {/** end left-Comments2-top-box */}
                                                
                <div className="right-Comments2-top-box d-flex flex-column mx-4 w-100">
                  <div className="left-Comments2-top-box-title m-2">
                    <input placeholder='name Noran Ali' value="name : Noran Ali" type="text" className='border-light border-0 rounded p-1 w-100' />
                  </div> {/** end left-Comments2-top-box-title */}
                  <div className="left-Comments2-top-box-comnt m-2">
                    <input placeholder='single Comment' type="text" className='border-light border-0 rounded p-1 w-100 ' />
                  </div> {/** end left-Comments2-top-box-comnt */}
                </div> {/** end right-Comments2-top-box */}
                                  
              </div> {/** end Comments2-top-box-container */}
 

            </div> {/** end Comments2-top-box */}
                
          </div> {/**end  Comments2-top */}
   
           
            


          <div className="Comments2-btm d-flex p-2">
            <div className="Comments2-btm-box d-flex flex-column p-2 w-100  rounded ">
              <input type="text" placeholder='Comments' name="comments" className='border-light border-0 rounded p-4 ' />
              <button className='border-0 p-2 text-white '  onClick={onAddComment} >Send</button>
            </div> {/** end Comments2-btm-box */}
                                   
                                
          </div> {/** end Comments2-btm */}
    
        </div> {/** end Comments2-container */}

      </div> {/** end container */}

    </div>  /** end Comments2 */

  );
  };

export default Comments2