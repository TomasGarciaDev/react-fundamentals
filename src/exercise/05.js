// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// const boxSizes = {
//   small: 'box--small',
//   medium: 'box--medium',
//   large: 'box--large'
// }

function Box ({className, size, style, ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : ""
    return <div className={`box ${className} ${sizeClassName}`}
    style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
}

// const anotherBox = <Box size='medium' style={{backgroundColor: 'lightblue'}}>medium lightblue box</Box>
const smallBox = <Box size='small' style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
const mediumBox = <Box size='medium' style={{backgroundColor: 'pink'}}>medium pink box</Box>
const largeBox = <Box size='large' style={{backgroundColor: 'orange'}}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
