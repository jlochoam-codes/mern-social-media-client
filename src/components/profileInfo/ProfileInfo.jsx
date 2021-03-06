import React from 'react'
import './ProfileInfo.css'
import { UilPen } from '@iconscout/react-unicons'
import { ProfileData } from '../../Data/ProfileData'

const ProfileInfo = () => {
  return (
    <div className='ProfileInfo'>
      <div className="ProfileInfoHeader">
        <span className='ProfileInfoTitle'>Your info</span>
        <span className='ProfileInfoEditBtn'>
          <UilPen size="1.5rem" />
        </span>
      </div>
      <div className="ProfileInfoForm">
        <div className="ProfileInfoField">
          <span>Name </span>
          <span>{ProfileData.name}</span>
        </div>
        <div className="ProfileInfoField">
          <span>Ocupation </span>
          <span>{ProfileData.ocupation}</span>
        </div>
        <div className="ProfileInfoField">
          <span>Marital status </span>
          <span>{ProfileData.maritalStatus}</span>
        </div>
        <div className="ProfileInfoField">
          <span>Lives in </span>
          <span>{ProfileData.city}</span>
        </div>
        <div className="ProfileInfoField">
          <span>Works at </span>
          <span>{ProfileData.company}</span>
        </div>
      </div>
      <div className="LogOut">
        <input type="button" value="Log out" />
      </div>
    </div>
  )
}

export default ProfileInfo
