import { useEffect, useRef } from 'react'

export function ProgressBar({
  color = 'red',
  height = '5px',
  bgColor = 'transparent',
  borderRadius = '0',
  zIndex = '100000000',
  top = '0',
  left = '0',
  position = 'fixed',
  ContainerStyle,
  ProgressBarStyle
}) {
  const barRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const max = scrollHeight - clientHeight
      const percent = max > 0 ? (scrollTop / max) * 100 : 0
      if (barRef.current) {
        barRef.current.style.width = `${percent}%`
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      style={{
        zIndex,
        position,
        top,
        left,
        width: '100%',
        height,
        backgroundColor: bgColor,
        overflow: 'hidden',
        ...ContainerStyle
      }}
    >
      <div
        ref={barRef}
        style={{
          height: '100%',
          width: 0,
          backgroundColor: color,
          borderRadius,
          ...ProgressBarStyle
        }}
      />
    </div>
  )
}

export default ProgressBar
