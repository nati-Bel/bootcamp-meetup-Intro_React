
import './home.css';
import {NavBar} from "../../components/atoms/navbar/Navbar";
import Footer from "../../components/atoms/footer/Footer";
import Photo from "../../components/atoms/photo/Photo";
import cat1 from "../../assets/images/cat1.jpg";
import dog1 from "../../assets/images/dog1.jpg";
import ButtonBar from '../../components/molecules/buttonBar/ButtonBar';
import TodosOutlet from '../outlets/TodosOutlet';



const Home = () => {
  return(
    <>
    <NavBar/>

    <section className="nuevasHuellitas">
      <h2 className="tit1">Nuevas huellitas en adopción</h2>
      <div className="containerPhotos">
        <Photo image={cat1}></Photo>
        <Photo image={dog1}></Photo>
      </div>
    </section>

    <h2 className="tit1">Adoptar una huellita</h2>
    <ButtonBar></ButtonBar>
    <TodosOutlet></TodosOutlet>
    <Footer></Footer>
    </>
  )
}

export default Home;