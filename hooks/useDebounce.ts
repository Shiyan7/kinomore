import { useEffect, useState } from 'react'

export function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState<string>(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

        return () => clearTimeout(timer)
    }, [value, delay])

    return {
        debouncedValue,
        setDebouncedValue
    }
}