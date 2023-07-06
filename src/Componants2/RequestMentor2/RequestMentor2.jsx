import React from 'react'
import "./requestmentor2.css"
import Comments2 from '../Comments2/Comments2'
import SidNav2 from '../SideNav2/SidaNav2'


function RequestMentor2() {

  return (

    <div className='RequestMentor2 p-4'> 
      
      <div className="container-fluid">
        <div className="row   ">

            <div className="col col-lg-3">
               <div className="Left-Request  ">
                
                  <SidNav2/>
                  
                
                </div> {/** end Right-Request */}
            
               </div> {/** end col */}
             
               <div className="col">

                <div className="Right-Request p-1">

                     <div className="Left-Request-Top">
                  
                     </div> {/** end Left-Request-Top */}


                  <div className="Left-Request-Bottm">
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
