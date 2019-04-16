import React from 'react'
import { getFoodbyMood } from '../data'
import FadeFromLeft from './fade-from-left'
import FadeIn from './fade-in'
import ImageSearch from './image-search'

const FoodResult = ({ selectedMood }) => {
  const results = getFoodbyMood(selectedMood.name)
  const result = results[Math.floor(Math.random() * results.length)] || {}

  return (
    <FadeIn className="mt-0 p-16 bg-white shadow-lg rounded-lg font-serif">
      <FadeFromLeft delay={200} className="text-3xl">
        Feeling {selectedMood.name}?
      </FadeFromLeft>
      <FadeFromLeft delay={700} className="text-3xl sm:text-4xl mt-8">
        You should eat...
      </FadeFromLeft>
      <FadeFromLeft delay={1200} className="mt-4">
        <h4>{result.name}</h4>
        <ImageSearch food={result.name} />
      </FadeFromLeft>
      {/* {results.length && results[0].name} */}
    </FadeIn>
  )
}

export default FoodResult
