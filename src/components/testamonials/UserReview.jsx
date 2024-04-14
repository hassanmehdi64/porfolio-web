import React from 'react'
import "./style.css"
import Slider from "../swiper/Swiper"
function UserReview() {
  return (
    <div>
        <div className='user-review-page-back'>
            <div className='user-review-main'>
              <div className='slider-main'>
              <img src=".././my-pic/me.jpg" alt="loading..."  className='user-image'/>
                <div className='inner-slider'>
                <Slider />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default UserReview;