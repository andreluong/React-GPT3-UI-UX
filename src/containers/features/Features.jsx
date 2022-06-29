import React from 'react'
import Feature from '../../components/feature/Feature';
import './features.css'

const FeaturesData = [
  {
    title: 'GitHub Copilot',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate maximus euismod. Aenean in arcu volutpat, blandit elit et, semper.',
  },
  {
    title: 'Keeper Tax',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate maximus euismod. Aenean in arcu volutpat, blandit elit et, semper.',
  },
  {
    title: 'Viable',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate maximus euismod. Aenean in arcu volutpat, blandit elit et, semper. ',
  },
  {
    title: 'Duolingo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate maximus euismod. Aenean in arcu volutpat, blandit elit et, semper. ',
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Built with OpenAi's Incredible API</h1>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </div>
      <div className="gpt3__features-container">
        { FeaturesData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features