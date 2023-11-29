import React from 'react'
// import Nav from './Nav'
import Header from './Header'
import Stocks from './Stocks'
import Distribute from './Distribute'
import Header2 from './Header2'
// import Table from './Table'

function DashBoard() {
  return (
    <>
      {/* <Nav /> */}
      {/* <Header /> */}
      <Header2/>
      <Stocks />
      <Distribute/>
      {/* <Table/> */}
    </>
  )
}

export default DashBoard