import { BsFacebook } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { BsMessenger } from "react-icons/bs";
import { FcBusinessman,FcHome,FcShop,FcConferenceCall } from "react-icons/fc";
import { FaBell } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";
import './header.css'


import React from 'react'
  
const Header = () => {
    return (
      <div className="header-sec">
        <div className='header'>
            <div className='logo'>
                <BsFacebook size={"40px"} color={"#1d91f7"}/>
                <input type="text" placeholder="SearchFacebook" />
            </div>
            {/* <div className='options'></div> */}
            <div className='chats'>
                <ul>
                    <li><a href="a"><TbGridDots /></a></li>
                    <li><a href="a"><BsMessenger /></a></li>
                    <li><a href="a"><FaBell /></a></li>
                    <li><a href="a"><FcBusinessman /></a></li>
                </ul>
            </div>
        </div>
        <div className="manu-list">
            <div className="option-list">
                <div><a href="a"><FcHome size={"35px"}/></a></div>
                <div><a href="a"><MdOutlineOndemandVideo size={"35px"}/></a></div>
                <div><a href="a"><FcShop size={"35px"}/></a></div>
                <div><a href="a"><FcConferenceCall size={"35px"}/></a></div>
                <div><a href="a"><SiFacebookgaming size={"35px"}/></a></div>
            </div>
        </div>
    </div>
    )
}
  
export default Header;

// {/* <div style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"3px solid #f0f2f5"}}>
//     <div style={{display:"flex",padding:"0 0 0 20px",alignItems:"center"}}>
//       <img src={fb} alt="m" style={{width:"50px",height:"50px"}}/>
//       <input style={{padding:"15px 20px",margin:"0 0 0 20px",borderRadius:"50px",border:"none",background:"#f0f2f5"}} type="text" placeholder="SearchFacebook"/>
//     </div>
//   </div> */}