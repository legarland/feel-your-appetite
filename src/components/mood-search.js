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
      items={moods}
      wrapperStyle={{
        display: 'block'
      }}
      menuStyle={{
        background: 'rgba(255,255,255,1)',
        borderBottomRightRadius: '.5rem',
        borderBottomLeftRadius: '.5rem',
        maxHeight: '40vh',
        overflow: 'scroll'
      }}
      renderItem={(item, isHighlighted) => (
        <div
          key={item.label}
          className={`text-left p-4 hover:gradient-reverse font-serif ${isHighlighted &&
            'gradient-reverse'}`}
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
          'w-full p-6 bg-white focus:shadow-none font-serif shadow-lg focus:rounded-b-none rounded-lg outline-none text-2xl transition-fast',
        placeholder: 'Enter a mood..',
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
