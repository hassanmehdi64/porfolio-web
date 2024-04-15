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
            <img src='https://th.bing.com/th/id/OIP.JYpf1dCjjwF35Q723eyxyQAAAA?rs=1&pid=ImgDetMain' alt='wetual learn' className='company-logo' />
            <h1>NAVTAC</h1>
            <h3>Certificate in IT</h3>
            <p>Successfully Completed the Basic to advance concepts of CIT which cover all web an app devlopment concepts, iclude designing basics from offered courses by<span> NAVTAC</span></p>
          </div>
          <div className='cologixs'>
            <img src='.././assets/3beez.jpg' alt='cologixs' className='company-logo' />
            <h1>3Beez Tech</h1>
            <h3>Frontend Development</h3>
            <p>Successfully Completed the Basic Introductory Course of Development course offered by  <span>3beez technologies</span></p>
          </div>
          <div className='Game Train'>
            <img src='https://global-uploads.webflow.com/62fc736835498a697974e4ed/63ca79b6f461e8f38272c274_udemy.jpg' alt='Game Train' className='company-logo' />
            <h1>Udemy</h1>
            <h3>Web Development</h3>
            <p>Successfully Completed the Basic Introductory Course of Development from basic to advance by online offered course by <span>Udemy</span></p>
          </div>

          <div className='Game Train'>
            <img src='https://play-lh.googleusercontent.com/OviAcSigH5Q7qdJGT_Wq9VGFb4niSweE6ge1IbOR9M4-8EEfr8b4lvTUE_YcRqr5O34' alt='Game Train' className='company-logo' />
            <h1>DigiSKills</h1>
            <h3>Graphic Designing</h3>
            <p>Successfully Completed graphice designing  online offered course by <span>DigiSkills</span></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Certificates