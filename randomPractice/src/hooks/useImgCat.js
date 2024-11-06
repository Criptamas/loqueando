import { useState, useEffect } from 'react'

export const useImgCat = ({ fact }) => {
  const [img, setImg] = useState()

  useEffect(() => {
    if (!fact) return
    const phrases = fact.split(' ', 3).join(' ')
    const CAT_IMG_ENDPOINT = `https://cataas.com/cat/says/${phrases}?fontSize=50&fontColor=gray`

    setImg(CAT_IMG_ENDPOINT)
  }, [fact])

  return { img }
}
