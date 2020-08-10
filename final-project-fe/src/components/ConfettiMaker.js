import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
 
export default function ConfettiMaker() {
  const { width, height } = useWindowSize(3000, 2000)
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}
 