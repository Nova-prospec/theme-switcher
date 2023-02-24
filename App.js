import {useState, useEffect} from "react"
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("dark-mode")) || false)

   useEffect(()=>{ 
     localStorage.setItem("dark-mode", darkMode)   
   }, [darkMode])

  const handleClick = () => {
    setDarkMode(darkMode === true ? false : true)
  }
  return (
    <main className={darkMode === true ? "dark-bg" : ""}>
      <h1 className={darkMode === true ? "h1-dark" : ""} >Theme Switcher</h1>
      <p className={darkMode === true ? "p-dark" : ""}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum fugit neque tempora nesciunt eaque, illo quaerat odit quam. Esse consequatur, debitis id magnam asperiores similique velit itaque blanditiis suscipit recusandae porro delectus pariatur? Quia in voluptate beatae aliquid aliquam, laboriosam dolor fugit magni perspiciatis, qui consequuntur adipisci illum voluptatum iure iusto fugiat corrupti consequatur voluptas, consectetur atque maxime molestiae placeat modi. Esse aspernatur tempora sed ad similique, tenetur quis ullam.</p>
      <div>
        <button onClick={handleClick} className={darkMode === true ? "dark-btn" : ""} >{darkMode === true ? "Light" : "Dark"} Theme</button>
      </div>
    </main>
  );
}

export default App;

