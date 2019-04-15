import React from 'react'
import { food, getFoodbyMood } from '../data'

const FoodResult = ({ selectedMood }) => {
  const results = getFoodbyMood(selectedMood.name)
  return (
    <div className="mt-0">
      <div className="text-3xl">Feeling {selectedMood.name}?</div>
      {/* {results.length && results[0].name} */}
    </div>
  )
}

export default FoodResult
