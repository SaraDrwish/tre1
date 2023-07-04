import React from 'react'
import "./header.css"
import Logo from "../../assets/images/logo(4).png"
import Logo2 from "../../assets/images/logoText.png"
import Search from '@iconscout/react-unicons/icons/uil-search'


function Header() {
  return (
      <div className='header'>
          
          <div className="leftHeader">
              <img src={Logo} alt="" />
          </div> {/** end leftHeader */}

          <div className="rightHeader">

                <div className="profilImg">
                    <div className="prof1"></div>
              </div> {/** end profilImg */}
              
              <div className="rightHeader-BigBox">
                  
                  <div className="searchBox">
                      <div className="searchText">
                          <span>Wecsite Design</span>
                     </div>
                      <div className="searchIcon">
                          <Search className="SearchIconicon" />
                      </div>
                      
                  </div> {/**end searchBox */}

                <div className="selectBox">
                    <div className="selectBoxSmall">
                        <select name="choice" >
                                <option value="1" selected >UX design </option>
                                <option value="2">UI design</option>      
                                <option value="3"> design</option>      
                            </select>
                    </div> {/**end selectBoxSmall */}
                  
                  </div> {/**end selectBox */}
                  
            </div> {/** end rightHeader-BigBox */}

        </div> {/** end rightHeader */}
          
      
      </div>
      
  )
}

export default Header
