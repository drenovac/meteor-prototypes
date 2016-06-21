import React from 'react'

export default (props) => {
  return (
    <div className="roster-layout manager-app">
      <div className="header">
        <div className="center">
          <h1>RosterMe - Manager</h1>
          <span>Logged in as {props.fullName}</span>
        </div>
        <a className="right" onClick={props.logOut} href="#"><i className="fa fa-sign-out"/></a>
      </div>
      <div className="layout">
        <div className="sidebar">
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