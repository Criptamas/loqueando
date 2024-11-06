import { useEffect, useState } from 'react'
import { getFact } from '../services/getFact'

export function useFactCat () {
  const [fact, setFact] = useState('')

  const refreshFactCat = () => {
    getFact().then(res => setFact(res))
  }

  useEffect(refreshFactCat, [])

  return { fact, refreshFactCat }
}
