import React from 'react'
import "./style.css"
function Certificates() {
  return (
    <div className='certificates-back'>
        <div className='certificate-main'>
            <div className='certificate-heading'>
                <h1>Certificates</h1>
            </div>

            <div className='companies'>
                <div className='wetual-learn'>
                       <img src='.././assets/wetual.png' alt='wetual learn' className='company-logo'/> 
                       <h1>Wetual Learn</h1>
                       <h3>Introductory Course of Development in Computer Science</h3>
                       <p>Successfully Completed the Basic Introductory Course of Development in Computer Science conducted by <span>Wetual Learn</span></p>
                </div>  
                <div className='cologixs'>
                       <img src='.././assets/cologix.jpg' alt='cologixs' className='company-logo'/> 
                       <h1>cologixs</h1>
                       <h3>Frontend Development</h3>
                       <p>Successfully Completed the Basic Introductory Course of Development in Computer Science conducted by <span>cologixs</span></p>
                </div>
                <div className='Game Train'>
                       <img src='.././assets/game-train.jpg' alt='Game Train' className='company-logo'/> 
                       <h1>Game Train</h1>
                       <h3>Junior FullStack Development</h3>
                       <p>Successfully Completed the Basic Introductory Course of Development in Computer Science conducted by <span>Game Train</span></p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Certificates