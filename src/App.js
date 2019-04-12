import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'
import './App.css'
import { moods } from './data'

class App extends Component {
  state = {
    value: '',
    selectedMood: {}
  }

  render() {
    const { value, selectedMood } = this.state

    return (
      <div className="container text-center mx-auto mt-8">
        <h1 className="font-title text-5xl font-bold">Feel Your Apetite</h1>
        <p className="mt-8 mb-16 text-2xl font-serif text-grey-dark">
          Find something to eat based on how you feel at the moment.
        </p>
        <Autocomplete
          getItemValue={item => item.name}
          items={moods}
          wrapperStyle={{
            display: 'block'
          }}
          renderItem={(item, isHighlighted) => (
            <div
              key={item.label}
              className="text-left p-4 hover:bg-grey-lightest"
            >
              {item.name}
            </div>
          )}
          shouldItemRender={
            (item, value) =>
              item.name.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
              item.emojis.indexOf(value) > -1
            // || item.related.some(i => i.toLowerCase() === value.toLowerCase())
          }
          value={value}
          inputProps={{
            className: 'w-full p-6 shadow-lg rounded outline-none text-2xl',
            placeholder: 'Enter a mood..'
          }}
          onChange={event => this.setState({ value: event.target.value })}
          onSelect={(val, item) => this.setState({ selectedMood: item })}
        />
        {/* <input
          type="text"
          className="w-full p-6 shadow-lg rounded outline-none text-2xl"
          placeholder="Enter a mood..."
        /> */}
      </div>
    )
  }
}

export default App
