
import Photo from "../../components/atoms/photo/Photo";
import cat1 from "../../assets/images/cat1.jpg";
import cat2 from "../../assets/images/cat2.jpg";
import cat3 from "../../assets/images/cat3.jpg";
import cat4 from "../../assets/images/cat4.jpg";
import cat5 from "../../assets/images/cat5.jpg";
import cat6 from "../../assets/images/cat6.jpg";


function GatosOutlet() {
  return (
    <>
      <div className="containerPhotos">
        <Photo image={cat1}></Photo>
        <Photo image={cat2}></Photo>
        <Photo image={cat3}></Photo>
        <Photo image={cat4}></Photo>
        <Photo image={cat5}></Photo>
        <Photo image={cat6}></Photo>
      </div>
    
    </>
  );
}

export default GatosOutlet;
