import './App.css'
import ButtonLogin from './components/ButtonLogin/ButtonLogin';

function App() {
  const handleClick = () => {
    alert('¡Has iniciado sesión!');


    
  };

  return (
    <>
      <h1>Hola chicas!</h1>
      <ButtonLogin  text="Login" onClick={handleClick}/>
    </>
  )
}

export default App
