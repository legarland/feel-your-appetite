import React, { useEffect } from 'react'
import { getFoodbyMood } from '../data'
import FadeFromLeft from './fade-from-left'
import FadeIn from './fade-in'
import ImageSearch from './image-search'

const FoodResult = ({ selectedMood }) => {
  const results = getFoodbyMood(selectedMood.name)
  const result = results[Math.floor(Math.random() * results.length)] || {}
  let el

  return (
    <div ref={ref => (el = ref)}>
      <FadeIn className="mt-0 p-8 sm:p-16 bg-white shadow-lg rounded-lg font-serif">
        <FadeFromLeft delay={200} className="text-3xl">
          Feeling {selectedMood.name}?
        </FadeFromLeft>
        <FadeFromLeft delay={700} className="text-2xl  mt-8">
          You should eat...
        </FadeFromLeft>
        <FadeFromLeft delay={1200} className="mt-4">
          <h1 className="font-title mb-4 text-4xl  sm:text-5xl">
            {result.name}
          </h1>
          <ImageSearch
            onImagesLoaded={() => {
              const elm = el.getBoundingClientRect()
              window.scrollTo({
                top: elm.top,
                behavior: 'smooth'
              })
            }}
            food={result.name}
          />
          <p className="my-4">(images generated from google image search)</p>
        </FadeFromLeft>
        {/* {results.length && results[0].name} */}
      </FadeIn>
    </div>
  )
}

export default FoodResult
