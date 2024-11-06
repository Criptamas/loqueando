import './App.css'
import { useFactCat } from './hooks/useFactCat' // devuelve el hecho
import { useImgCat } from './hooks/useImgCat' // devuelve la img

export function App () {
  // Custom hooks
  const { fact, refreshFactCat } = useFactCat()
  const { imgURL } = useImgCat({ fact })

  const handleCLick = () => {
    refreshFactCat()
  }

  return (
    <>
      <main>
        <h1>App de gatitos</h1>
        <button onClick={handleCLick}>Obtener nuevas citas e imagenes :D</button>
        <article>
          {fact && <p>{fact}</p>}
          {imgURL && <img src={imgURL} alt='Cat image extrated from first threes words of endpoint' />}
        </article>
      </main>
    </>
  )
}
