import './rightbar.css'
import { Users } from "../../dummydata"

function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Mj</b> and <b>2 other friends</b> have their birthday today</span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Active</h4>

        {/* Mapping on Active Users */}
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <li key={user.id} className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUserName">{user.username}</span>
            </li>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitleProfile">User Info</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New Delhi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Dwarka</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lorem, ipsum.</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lorem, ipsum.</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lorem, ipsum.</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lorem, ipsum.</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lorem, ipsum.</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lorem, ipsum.</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lorem, lorem ipsum.</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lorem, ipsum.</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       { profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar
