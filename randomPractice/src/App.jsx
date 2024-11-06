import { useFact } from './hooks/useFactCat.js'
import { useImgCat } from './hooks/useImgCat.js'
import './App.css'
export default function App () {
  const { fact } = useFact()
  const { img } = useImgCat({ fact })

  return (
    <main>
      <h1>Cat Random img</h1>
      {fact && <p>{fact}</p>}
      {img && <img src={img} alt='cat images from fact random request' />}
    </main>
  )
}
