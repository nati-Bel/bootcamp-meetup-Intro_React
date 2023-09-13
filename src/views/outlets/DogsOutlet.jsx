
import Photo from "../../components/atoms/photo/Photo";
import dog1 from "../../assets/images/dog1.jpg";
import dog2 from "../../assets/images/dog2.jpg";
import dog3 from "../../assets/images/dog3.jpg";
import dog4 from "../../assets/images/dog4.jpg";
import dog5 from "../../assets/images/dog5.jpg";
import dog6 from "../../assets/images/dog6.jpg";
import dog7 from "../../assets/images/dog7.jpg";


function DogsOutlet() {
  return (
    <>
      <div className="containerPhotos">
        <Photo image={dog1}></Photo>
        <Photo image={dog2}></Photo>
        <Photo image={dog3}></Photo>
        <Photo image={dog4}></Photo>
        <Photo image={dog5}></Photo>
        <Photo image={dog6}></Photo>
        <Photo image={dog7}></Photo>
        
      </div>
    
    </>
  );
}

export default DogsOutlet;
