import React from 'react'
import Feature from '../../components/feature/Feature';
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor ex, porta a auctor vel, tincidunt sed quam. Sed vehicula a est eget fermentum. Curabitur sollicitudin sodales mauris sit amet. " />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p><a href="#blog">Explore The Library</a></p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Fast" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse purus." />
        <Feature title="Scalable" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse purus." />
        <Feature title="Flexible" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse purus." />
      </div>
    </div>
  )
}

export default WhatGPT3