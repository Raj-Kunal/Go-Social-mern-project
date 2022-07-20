import React from 'react'
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/Topbar/Topbar"
import "./profile.css"

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                        <img src="assets/post/6.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>raj</h4>
                            <span className="profileInfoDesc">Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Profile
