
import { ZENELISTA } from './adat'
import './App.css'
import Zenek from './compoment/Zenek'

export default function App() {

  return (
    <>
      <header>
        <h1>Zene React</h1>
      </header>
      <article>
        <Zenek lista={ZENELISTA}/>
      </article>
      <footer>Stolár-Németh Villő</footer>
    </>
  )
}
