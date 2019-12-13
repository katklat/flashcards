import { useLayoutEffect, useState, useRef } from 'react'

/**
 * Usage:
 *    const {height, bind} = useHeight()
 *    <div {...bind} style={{height: isActive ? height : 0}}>Measured element</div>
 */
export default function useHeight() {
  const [calculatedHeight, setCalculatedHeight] = useState(undefined)
  const ref = useRef()

  useLayoutEffect(() => {
    const answerEl = ref.current
    if (!answerEl) return 0

    const originals = {
      transition: answerEl.style.transition,
      height: answerEl.style.height,
    }
    answerEl.style.transition = 'none'
    answerEl.style.height = 'auto'
    const height = answerEl.getBoundingClientRect().height
    answerEl.style.transition = originals.transition
    answerEl.style.height = originals.height
    setCalculatedHeight(height)
  }, [ref])
  return { height: calculatedHeight, bind: { ref } }
}
