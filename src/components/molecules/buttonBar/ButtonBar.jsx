import './buttonBar.css';
import Button from '../../atoms/button/Button';
import { Link } from 'react-router-dom';


function ButtonBar(){

    return (
      <>
        <div className="btnBar">
          <Link to="/">
            <Button button_content="Todos"></Button>
          </Link>
          <Link to="/perros">
            <Button button_content="Perros"></Button>
          </Link>
          <Link to="/gatos">
            <Button button_content="Gatos"></Button>
          </Link>
        </div>
      </>
    );

}
export default ButtonBar