import React, { Component } from 'react'
import './App.css'
import FoodResult from './components/food-result'
import MoodSearch from './components/mood-search'

class App extends Component {
  state = {
    value: '',
    selectedMood: undefined
  }

  input

  render() {
    const { value, selectedMood } = this.state

    return (
      <div className="container text-center p-4 sm:p-0 mx-auto mt-12 mb-12">
        <h1 className="font-title text-white tracking-wide text-6xl text-shadow2">
          Feel Your Appetite
        </h1>
        <p className="mt-8 mb-16 text-2xl font-serif text-green-darkest">
          Find something to eat based on how you feel at the moment.
        </p>
        <MoodSearch
          onMoodChange={mood => this.setState({ selectedMood: mood })}
        />
        <section className="mt-8">
          {selectedMood && (
            <FoodResult key="mood" selectedMood={selectedMood} />
          )}
        </section>
      </div>
    )
  }
}

export default App
