import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import Widget from '../../components/widgets/Widget'
import "./home.scss"

export const Home = () => {
  return (
    <div className="home">
    <Sidebar/>
    <div className="homeContainer">
      <Navbar/>
      <div className="widgets">
        <Widget type="online"/>
        <Widget type="offline"/>
        <Widget type="routers"/>
        <Widget type="grafiek"/>

      </div>
    </div>
    
    </div>
  )
}

export default Home