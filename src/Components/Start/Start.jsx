import React from 'react'
import './Start.css'
import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
function Start() {
  return (
    <div>
         
    <div class="nav">
        <p class="nav-head">NEXT TOURNAMENT <span className='begin'> BEGINS IN </span></p>
        <div class="days">
            <p class="daysText">45 Days</p>
        </div>
        <div className="right">
          <p className='follow'>FOLLOW US MORE</p>
          <p className="scroll-down">_____</p>
          <Facebook />
          <Instagram />
          <Twitter />
          <GitHub />
        </div>
       
    </div>
    </div>
  )
}

export default Start