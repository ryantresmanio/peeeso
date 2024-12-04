import React from 'react'
import pesoLogo from '../assets/peso-logo.png'
import HowItWorks from '../components/HowItWorks'
import VisionMission from '../components/VissionMission'

const Aboutus = () => {
  return (
    <div>
      <div className='pt-32 lg:px-48 px-8'>
        <VisionMission />
      </div>
      <HowItWorks />
    </div>
  )
}

export default Aboutus