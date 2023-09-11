
import Photo from "../../components/atoms/photo/Photo"
import dog2 from "../../assets/images/dog2.jpg"
import dog1 from "../../assets/images/dog1.jpg";
import dog3 from "../../assets/images/dog3.jpg";
import cat1 from "../../assets/images/cat1.jpg";
import cat2 from "../../assets/images/cat2.jpg";
import cat3 from "../../assets/images/cat3.jpg";
import cat4 from "../../assets/images/cat4.jpg";
import dog4 from "../../assets/images/dog4.jpg";


function TodosOutlet () {
    return (
      <>
        <div className="containerPhotos">
          <Photo image={dog2}></Photo>
          <Photo image={cat1}></Photo>
          <Photo image={dog1}></Photo>
          <Photo image={cat2}></Photo>
          <Photo image={dog3}></Photo>
          <Photo image={cat3}></Photo>
          <Photo image={dog4}></Photo>
          <Photo image={cat4}></Photo>
        </div>
      
      </>
    );
}

export default TodosOutlet