import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import burgerMenu from './assets/menu.png'
import logoIH from './assets/logo.png'
import iconOne from './assets/i1.png'
import iconTwo from './assets/i2.png'
import iconThree from './assets/i3.png'
import iconFour from './assets/i4.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="body">
        <div className="containerOne">
          <nav>
            <img src={logoIH} alt="" />
            <img src={burgerMenu} alt="" />
          </nav>
          <div className="text">
          <h1>Say Hello to ReactJS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo optio modi adipisci repellendus temporibus reiciendis odio asperiores neque recusandae. Soluta recusandae sed nulla corrupti! Laboriosam voluptas eius magni dolores accusamus.</p>
          <button>Awesome!</button>
          </div>
        </div>
        <div className="containerIcons">

          <div className="icon">
            <img src={iconTwo} alt="" />
            <h2>Declarative</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="icon">
            <img src={iconThree} alt="" />
            <h2>Declarative</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="icon">
            <img src={iconOne} alt="" />
            <h2>Declarative</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="icon">
            <img src={iconFour} alt="" />
            <h2>Declarative</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
