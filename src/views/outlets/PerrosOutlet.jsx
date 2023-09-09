
import Photo from "../../components/atoms/photo/Photo";
import dog2 from "../../assets/images/dog2.jpg";
import { Outlet } from "react-router-dom";

function PerrosOutlet() {
  return (
    <>
      <div className="containerPhotos">
        <Photo image={dog2}></Photo>
        <Photo image={dog2}></Photo>
        <Photo image={dog2}></Photo>
        <Photo image={dog2}></Photo>
        <Photo image={dog2}></Photo>
        <Photo image={dog2}></Photo>
        <Photo image={dog2}></Photo>
        <Photo image={dog2}></Photo>
      </div>
    <Outlet/>
    </>
  );
}

export default PerrosOutlet;
