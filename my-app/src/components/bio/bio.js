import { FcBusinessman,FcBookmark,FcShop,FcConferenceCall,FcPhotoReel,FcPlanner,FcExpand } from "react-icons/fc";
import { RiGroupFill,RiPagesFill } from "react-icons/ri";
import { MdOutlineOndemandVideo } from "react-icons/md";
// import { FaStore } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";

import './bio.css'
import React from 'react'

const Bio = () => {
  return (
    <div className='mybio'>
        <div className="bio-sec">
            <ul>
                <li><FcBusinessman size={"35px"}/><a href="a">Mitchell Mani Mech</a></li>
                <li><RiGroupFill size={"35px"} color={"#1a82f4"} /><a href="a">Friends</a></li>
                <li><FcConferenceCall size={"35px"} color={"#1a82f4"} /><a href="a">Groups</a></li>
                <li><FcShop size={"35px"} color={"#1a82f4"} /><a href="a">Marketplace</a></li>
                <li><MdOutlineOndemandVideo size={"35px"} color={"#1a82f4"} /><a href="a">Watch</a></li>
                <li><BsClockHistory size={"35px"} color={"#1a82f4"} /><a href="a">Memories</a></li>
                <li><FcBookmark size={"35px"} color={"#1a82f4"} /><a href="a">Saved</a></li>
                <li><RiPagesFill size={"35px"} color={"#1a82f4"} /><a href="a">Pages</a></li>
                <li><FcPhotoReel size={"35px"} color={"#1a82f4"} /><a href="a">Reels</a></li>
                <li><FcPlanner size={"35px"} color={"#1a82f4"} /><a href="a">Events</a></li>
                <li><FcExpand size={"35px"} color={"#1a82f4"} /><a href="a">See more</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Bio;



