import React from 'react'

export default (props) => {
  return (
    <div className="roster-layout manager-app">
      <div className="header">
        <a className="left" onClick={props.toggleSettings.bind(this)} href="#"><i className="fa fa-cog"/></a>
        <div className="center">
          <h1>{props.companyName}</h1>
          <span>Logged in as {props.fullName}</span>
        </div>
        <a className="right" onClick={props.logOut} href="#"><i className="fa fa-sign-out"/></a>
      </div>
      <div className="layout">
        <div className="sidebar hidden">
          {props.sidebar}
        </div>
        <div className="main-block">
          <div className="content">
            {props.content}
          </div>
        </div>
      </div>
    </div>
  )
}