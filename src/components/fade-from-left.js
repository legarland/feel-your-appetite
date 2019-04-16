import React, { useState } from 'react'
import posed from 'react-pose'

const FadeLeft = posed.div({
  visible: {
    opacity: 1,
    x: 0
  },
  hidden: {
    opacity: 0,
    x: -400
  }
})
const FadeFromLeft = ({ children, delay, ...props }) => {
  const [shown, setShown] = useState(false)
  setTimeout(() => setShown(true), delay || 0)
  return (
    <FadeLeft {...props} delay={delay} pose={shown ? 'visible' : 'hidden'}>
      {children}
    </FadeLeft>
  )
}

export default FadeFromLeft
