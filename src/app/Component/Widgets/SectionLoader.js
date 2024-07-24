"use client"
import React from 'react'

const SectionLoader = () => {
  return (
    <div className="section-loader">
      <div className="loader--ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Loading...</p>
    </div>
  )
}

export default SectionLoader;
