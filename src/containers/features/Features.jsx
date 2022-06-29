import React from 'react'
import Feature from '../../components/feature/Feature';
import './features.css'

const FeaturesData = [
  {
    title: 'Symbolic AI',
    text: 'Curabitur sit amet porta enim, vel tempor lorem. Morbi malesuada dignissim nunc ut luctus. Nam tincidunt sit amet nisi vitae.',
  },
  {
    title: 'Deep Learning',
    text: 'Vivamus et fringilla justo. Suspendisse venenatis, augue sed sodales placerat, velit risus vehicula arcu, quis sagittis nisl augue pretium libero.',
  },
  {
    title: 'Bayesian Networks',
    text: 'Praesent ac malesuada sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi quis varius augue. Phasellus volutpat.',
  },
  {
    title: 'Evolutionary Algorithms',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate maximus euismod. Aenean in arcu volutpat, blandit elit et, semper.',
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Explore the Approaches of GPT-3</h1>
        <p>Maecenas nec sodales quam, ac dictum odio. Fusce ornare condimentum scelerisque. Phasellus commodo mi at.</p>
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