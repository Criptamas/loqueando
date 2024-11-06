import { useState, useEffect } from 'react'
import { getInfo } from '../services/request.js'

export const useFact = () => {
  const [fact, setFact] = useState('')

  useEffect(() => {
    getInfo().then(res => setFact(res))
  }, [])

  return { fact }
}
