import React, { useState } from 'react'

const FadeIn = ({ children, delay, className }) => {
  const [shown, setShown] = useState(false)
  setTimeout(() => setShown(true), delay || 0)
  return (
    <div
      className={`${className} fade-in ${shown && 'active'}`}
      delay={delay}
      pose={shown ? 'visible' : 'hidden'}
    >
      {children}
    </div>
  )
}

export default FadeIn
