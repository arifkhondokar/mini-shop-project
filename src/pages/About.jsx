import React from 'react'
import '../pages/pages.css'

const About = () => {
  return (
    <>
      <section className='about_section'>
        <div className='about container'>
          <div className='location'>

              <h2 className='sub-heading'>Our History</h2>
              <p className='pera'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium culpa ducimus dolor iure corporis laborum minus doloribus maiores ratione non fugit accusamus, nisi et! Quis, accusantium culpa ducimus dolor iure corporis laborum minus doloribus maiores ratione non fugit accusamus, nisi et!</p>

              <h2 className='sub-heading'>Our Location</h2>
              <p className='pera'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Quis, nisi et!</p>
          </div>

          <div className='img_box'>
              <img src="images/map.jpg" alt="Tacos and Drink" title="we love Taco"  />
          </div>
        </div>
      </section>

    </>
  )
}

export default About