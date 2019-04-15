import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'
import './App.css'
import { moods } from './data'
import FoodResult from './components/food-result'

class App extends Component {
  state = {
    value: '',
    selectedMood: undefined
  }

  input

  render() {
    const { value, selectedMood } = this.state

    return (
      <div className="container text-center mx-auto mt-12">
        <h1 className="font-title text-white tracking-wide text-6xl text-shadow2">
          Feel Your Appetite
        </h1>
        <p className="mt-8 mb-16 text-2xl font-serif text-green-darkest">
          Find something to eat based on how you feel at the moment.
        </p>
        <Autocomplete
          ref={ac => (this.input = ac)}
          getItemValue={item => item.name}
          items={moods}
          wrapperStyle={{
            display: 'block'
          }}
          menuStyle={{
            background: 'rgba(255,255,255,1)',
            borderBottomRightRadius: '.5rem',
            borderBottomLeftRadius: '.5rem'
          }}
          renderItem={(item, isHighlighted) => (
            <div
              key={item.label}
              className="text-left p-4 hover:bg-grey-lightest rounded-lg"
            >
              {item.name}
            </div>
          )}
          shouldItemRender={
            (item, val) =>
              item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
              item.emojis.indexOf(val) > -1
            // || item.related.some(i => i.toLowerCase() === value.toLowerCase())
          }
          value={value}
          inputProps={{
            className:
              'w-full p-6 focus:shadow-none shadow-lg focus:rounded-b-none rounded-lg outline-none text-2xl transition-fast',
            placeholder: 'Enter a mood..',
            onFocus: () => this.setState({ value: '' })
          }}
          onChange={event => this.setState({ value: event.target.value })}
          onSelect={(val, item) => {
            this.input.blur()
            this.setState({ value: val, selectedMood: item })
          }}
        />
        <section className="mt-12">
          {selectedMood && <FoodResult selectedMood={selectedMood} />}
        </section>
      </div>
    )
  }
}

export default App
