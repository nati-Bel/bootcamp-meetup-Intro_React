
import Photo from "../../components/atoms/photo/Photo"
import dog2 from "../../assets/images/dog2.jpg"
import cat1 from "../../assets/images/cat1.jpg";


function TodosOutlet () {
    return (
      <>
        <div className="containerPhotos">
          <Photo image={dog2}></Photo>
          <Photo image={cat1}></Photo>
          <Photo image={dog2}></Photo>
          <Photo image={cat1}></Photo>
          <Photo image={dog2}></Photo>
          <Photo image={cat1}></Photo>
          <Photo image={dog2}></Photo>
          <Photo image={cat1}></Photo>
        </div>
      
      </>
    );
}

export default TodosOutlet