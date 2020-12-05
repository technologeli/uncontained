import React from 'react'

export default function Subtitle({ text, className }) {
  return (
    <div className={`subtitle-bar center-children ${className}`}>
      <span className='subtitle-text'>{text}</span>
    </div>
  )
}