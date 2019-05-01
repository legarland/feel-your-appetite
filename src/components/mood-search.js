import React, { useState } from 'react'
import Autocomplete from 'react-autocomplete'
import { moods } from '../data'

const MoodSearch = ({ onMoodChange = () => {} }) => {
  const [value, setValue] = useState('')
  const [mood, setMood] = useState()
  let input

  const changeMood = newMood => {
    setMood(newMood)
    onMoodChange(newMood)
  }

  return (
    <Autocomplete
      ref={ac => (input = ac)}
      getItemValue={item => item.name}
      items={moods
        // .filter(m => m.type === 'positive')
        .sort((a, b) => a.name.localeCompare(b.name))}
      wrapperStyle={{
        display: 'block'
      }}
      renderMenu={(items, val, style) => (
        <div style={{ ...style }} className="dropdown">
          {items}
        </div>
      )}
      renderItem={(item, isHighlighted) => (
        <div
          key={item.name}
          style={{ border: 'solid 1px lightgray' }}
          className={`text-left p-4 m-2 hover:gradient-reverse font-serif flex flex-1 items-center cursor-pointer ${isHighlighted &&
            'gradient-reverse '} rounded-lg`}
        >
          <span style={{ marginRight: 10 }}>{item.name}</span>
          <span
            style={{
              transform: 'translateY(2px)'
            }}
          >
            {item.emojis.length && item.emojis[0]}
          </span>
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
          'w-full p-5 bg-white focus:shadow-none font-serif shadow-lg focus:rounded-b-none rounded-lg outline-none text-2xl transition-fast',
        placeholder: 'Enter or select a mood..',
        onFocus: () => {
          console.log('resetting')
          setValue('')
          changeMood(null)
        }
      }}
      onChange={event => setValue(event.target.value)}
      onSelect={(val, item) => {
        input.blur()
        setValue(val)
        changeMood(item)
      }}
    />
  )
}

export default MoodSearch
