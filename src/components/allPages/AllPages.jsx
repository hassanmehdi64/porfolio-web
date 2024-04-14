import React from 'react'
import Home from '../home/Home'
import About from '../about/About'
import Services from '../services/Services'
import Work from '../myWork/Work'
import ViewMore from '../Viewmore/ViewMore'
import Certificates from '../certification/Certificates'
import Experience from '../experience/Experience'

function AllPages() {
  return (
    <div>
        <Home/>
        <About/>
        <Services/>
        <Work/>
        <Certificates/>
        <Experience/>
    </div>
  )
}

export default AllPages