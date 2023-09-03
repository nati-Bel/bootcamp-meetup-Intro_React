import './App.css'
import ButtonLogin from './components/button/ButtonLogin';
import { NavBar } from './components/atoms/Navbar';

function App() {
  const handleClick = () => {
    alert('¡Has iniciado sesión!');


    
  };

  return (
    <div>
    <NavBar />
    <h1>Hola chicas!</h1>
    <ButtonLogin  text="Login" onClick={handleClick}/>
      </div>

    
  );
}

export default App
