import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'
import { ProfileData } from '../../Data/ProfileData'

const ProfileCard = () => {
  return (
    <div className='profileCard'>

      <div className='profileImages'>
        <img src={Cover} alt="cover" />
        <img src={Profile} alt="profile" />
      </div>

      <div className="profileName">
        <span>{ProfileData.name}</span>
        <span>{ProfileData.ocupation}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="followers">
            <span>{ProfileData.followers}</span>
            <span>Followers</span>
          </div>
          <div className="verticalLine" />
          <div className="followings">
            <span>{ProfileData.following}</span>
            <span>Followings</span>
          </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  )
}

export default ProfileCard
