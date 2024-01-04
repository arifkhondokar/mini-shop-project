import React from 'react'
import '../pages/pages.css'

const Home = () => {
  return (
    <>
      <section className='home_section'>
        <div className='home container'>
          <div className='img_box'>
            <div className='img_box-01'>
              <img src="images/home01.jpg" alt="Tacos and Drink" title="we love Taco"  />
            </div>
            <div className='img_box-01'>
              <img src="images/home02.jpg" alt="Tacos and Drink" title="we love Taco"  />
            </div>
            <div className='img_box-01'>
              <img src="images/home03.jpg" alt="Tacos and Drink" title="we love Taco"  />
            </div>
            <div className='img_box-01'>
              <img src="images/home04.jpg" alt="Tacos and Drink" title="we love Taco"  />
            </div>  
          </div>
          
          <div className='schedule'>
            <h2 className='sub-heading'>We are open 7 days a Week!</h2>

            <dl>
                <dt>Sunday-Thursday</dt>
                <dd>11am-9pm</dd>
                <dt>Friday-Saturday</dt>
                <dd>11am-11pm</dd>
            </dl>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home