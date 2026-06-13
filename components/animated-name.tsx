'use client'

import { useEffect, useState } from 'react'

const names = [
  'ronish',
  'रोनीश',
  'ರೋನಿಶ್',
  'రోనిష్',
  'റോണിഷ്',
  'ரோனிஷ்',
  'رونش',
  'ronish',
  'रोनीश',
  'ರೋನಿಶ್',
  'రోనిష్',
  'റോണിഷ്',
  'ரோனிஷ்',
  'رونش',
  'ronish',
]

export function AnimatedName() {
  const [name, setName] = useState('ronish')

  useEffect(() => {
    let delay = 40
    const deceleration = 1.19
    let index = 1
    let timeout: ReturnType<typeof setTimeout>

    function showNext() {
      if (index >= names.length) return
      setName(names[index])
      index++
      delay *= deceleration
      timeout = setTimeout(showNext, delay)
    }

    timeout = setTimeout(showNext, delay)
    return () => clearTimeout(timeout)
  }, [])

  return <span className="inline-block">{name}</span>
}
