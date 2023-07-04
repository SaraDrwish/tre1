import React from 'react'
import "./comments.css"

function Comments() {
  return (
    <div className='Comments'>
      
      <div className="comment-container">
        {/* <h1> Commments section </h1> */}
        <div className="Comments-BigBox">

          <div className="singleComment">

            <div className="commentImg"></div>
            <span className='commentName' ></span>
            <input type="text" placeholder='lorem8' />
            
            <div className="singleComment-Replay">
              <div className="commentImg"></div>
              <span className='commentName' ></span>
              <input type="text" placeholder='lorem8'/>
            </div> {/** end singleComment-Replay */}
            
          </div> {/** end singleComment */}

          
          <div className="singleComment">
            <div className="commentImg"></div>
            <span className='commentName' ></span>
            <input type="text" placeholder='lorem8'/>
          </div> {/** end singleComment */}


        </div> {/** end Comments-BigBox */}

        <div className="commentsBtm">

          <input type="text"  placeholder='leave your comments here '   />


        </div> {/** end commentsBtm */}

        <button className='buttonDefault' > Send </button>


      </div> {/** end comment-container */}

    </div> /** end Comment  */
  )
}

export default Comments
