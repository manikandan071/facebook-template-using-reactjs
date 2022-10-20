import { MdGroupAdd } from "react-icons/md";
import { IoGift } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import './friends.css'

import React from 'react'

const Friends = () => {
  return (
    <div className='friends-list'>
        <div className='birthday'>
            <h4>Birthdays</h4>
            <div className="birthday-list">
            <IoGift size={"30px"} color={"#1d91f7"}/><span><strong>Rock ramm</strong> have birthday today</span>
            </div>
        </div>
        <div className="online">
            <h3>Contacts</h3>
            <ul>
                <li><CgProfile size={"40px"} color={"#22a3f0"}/><a href="a">Thala Siva</a></li>
                <li><CgProfile size={"40px"} color={"#22a3f0"}/><a href="a">Rock ramm</a></li>
                <li><CgProfile size={"40px"} color={"#22a3f0"}/><a href="a">Raja ranjith</a></li>
                <li><CgProfile size={"40px"} color={"#22a3f0"}/><a href="a">Theena tamil</a></li>
                <li><CgProfile size={"40px"} color={"#22a3f0"}/><a href="a">Max mohan</a></li>
            </ul>
        </div>
        <div className="online">
            <h3>Group conversations</h3>
            <ul>
                <li><MdGroupAdd size={"40px"} color={"#22a3f0"}/><a href="a">AK Fans Base</a></li>
                <li><MdGroupAdd size={"40px"} color={"#22a3f0"}/><a href="a">90's kids</a></li>
                <li><MdGroupAdd size={"40px"} color={"#22a3f0"}/><a href="a">MT-15 lovers</a></li>
                <li><MdGroupAdd size={"40px"} color={"#22a3f0"}/><a href="a">RoYaL MeCh</a></li>
                <li><MdGroupAdd size={"40px"} color={"#22a3f0"}/><a href="a">NO.3 Fans</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Friends;