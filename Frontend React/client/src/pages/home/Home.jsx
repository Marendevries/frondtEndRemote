import Table from '../../components/table/Table'
import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import Widget from '../../components/widgets/Widget'
import "./home.scss"
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'

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
      <div className="charts">
        <Featured/>
        <Chart/>

      </div>
      <div className='listContainer'>
        <div className="listTitle">Klanten</div>
        <Table/>
      
      </div>
    </div>
    
    </div>
  )
}

export default Home