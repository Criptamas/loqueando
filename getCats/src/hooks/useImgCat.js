import { useEffect, useState } from 'react'

export function useImgCat ({ fact }) {
  const [imgURL, setImgURL] = useState()
  // efecto para recuperar la img del endPoint

  useEffect(() => {
    if (!fact) return

    const firstThreesWords = fact.split(' ', 3).join(' ')

    const CAT_ENDPOINT_IMG = `https://cataas.com/cat/says/${firstThreesWords}?fontSize=50&fontColor=gray`

    setImgURL(CAT_ENDPOINT_IMG)
  }, [fact])

  return { imgURL }
}
