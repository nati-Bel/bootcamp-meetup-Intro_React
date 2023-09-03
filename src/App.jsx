import './App.css'
import AnimalCard from './components/atoms/animalCard/AnimalCard';
import Gatete from './assets/images/gatete.jpg';
import './components/atoms/animalCard/animalCard.css'

function App() {

  return (
    <>
    <h1>Hola chicas!</h1>

   <div className='ac-ctss'>
    <AnimalCard image={Gatete} title="Cleo"  description="Es una gata juguetona y cariñosa, le encanta que le rasquen la barriga." />
    <AnimalCard image={Gatete} title="Cleo"  description="Es una gata juguetona y cariñosa, le encanta que le rasquen la barriga." /> 
    <AnimalCard image={Gatete} title="Cleo"  description="Es una gata juguetona y cariñosa, le encanta que le rasquen la barriga." />
    </div>
    </>
  )
}

export default App
