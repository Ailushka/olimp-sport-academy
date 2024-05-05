import React from 'react'
import Featuresbox from './Featuresbox'
import judo from '../images/1.svg'
import box from '../images/2.svg'
import karate from '../images/3.svg'
import wrestling from '../images/4.svg'
import mma from '../images/5.svg'
import tek from '../images/6.svg'
import sambo from '../images/7.svg'

function Feature() {
  return (
    <div id='features' className="container">
      <h2>Единоборства</h2>
      <div className='a-container'>
        <Featuresbox image={judo} title="Дзюдо"/>
        <Featuresbox image={box} title="Бокс"/>
        <Featuresbox image={karate} title="Каратэ"/>
        <Featuresbox image={wrestling} title="Вольная борьба"/>
        <Featuresbox image={mma} title="ММА"/>
        <Featuresbox image={tek} title="Тхэквондо"/>
        <Featuresbox image={sambo} title="Самбо"/>
        

      </div>
    </div>
  )
}

export default Feature