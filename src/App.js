import React, { Component } from 'react'
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
      <div className="container text-center p-4 sm:p-0 mx-auto mt-2 sm:mt-12 mb-12">
        <h1 className="font-title italic text-white tracking-wide text-5xl text-shadow2">
          Feel Your Appetite
        </h1>
        <p className="mt-8 mb-12 text-xl font-serif text-green-darkest">
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
        <footer className="text-black mt-8">
          <div className="mb-1">
            Site by{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="no-underline text-blue
               font-bold"
              href="https://www.twitter.com/floppycatfish"
            >
              @floppycatfish
            </a>
          </div>
          Idea by{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="no-underline text-blue
             font-bold"
            href="https://www.twitter.com/mericmandrews"
          >
            @MericMandrews
          </a>{' '}
          on the{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="no-underline text-blue
             font-bold"
            href="https://www.twitter.com/markforwardpod"
          >
            @MarkForwardPod
          </a>
        </footer>
      </div>
    )
  }
}

export default App
