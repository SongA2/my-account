import { useEffect, useState } from 'react'

function useDebounce<T = any>(value: T, delay = 800) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const tiemout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(tiemout)
    }
  }, [delay, value])

  return debouncedValue
}

export default useDebounce
