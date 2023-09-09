
import Photo from "../../components/atoms/photo/Photo";
import cat1 from "../../assets/images/cat1.jpg";
import { Outlet } from "react-router-dom";

function GatosOutlet() {
  return (
    <>
      <div className="containerPhotos">
        <Photo image={cat1}></Photo>
        <Photo image={cat1}></Photo>
        <Photo image={cat1}></Photo>
        <Photo image={cat1}></Photo>
        <Photo image={cat1}></Photo>
        <Photo image={cat1}></Photo>
        <Photo image={cat1}></Photo>
        <Photo image={cat1}></Photo>
      </div>
    <Outlet/>
    </>
  );
}

export default GatosOutlet;
