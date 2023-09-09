import './photo.css';

function Photo(props) {
  return (
    <>
      <div className="img">
        <img src={props.image} className="img" alt="photo of a pet" />
      </div>
    </>
  );
}

export default Photo;