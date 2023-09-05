import './App.css'
import AnimalCard from './components/atoms/animalCard/AnimalCard';
import Gatete from './assets/images/gatete.jpg';
import './components/atoms/animalCard/animalCard.css'
import ButtonLogin from './components/button/ButtonLogin';
import { NavBar } from './components/atoms/Navbar';

function App() {
  const handleClick = () => {
    alert('¡Has iniciado sesión!');


    
  };

  return (
    <>
    <h1>Hola chicas!</h1>

   <div className='ac-ctss'>
    
    
    </div>
    </>
  )
    <div>
    <NavBar />
    <h1>Hola chicas!</h1>
    <ButtonLogin  text="Login" onClick={handleClick}/>
      </div>

    
  );
}

export default App
