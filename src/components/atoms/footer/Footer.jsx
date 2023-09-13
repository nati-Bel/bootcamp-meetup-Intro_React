import './footer.css';
import f_home from "../../../assets/images/home.png";
import f_like from "../../../assets/images/f_like.png";
import f_chat from "../../../assets/images/chat.png";


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <a className="f_link">
          <div className="f_menu_item">
            <img className="f_icon" src={f_home} alt="" />
            <p className="f_icon_text">Inicio</p>
          </div>
        </a>
        <a>
          <div className="f_menu_item">
            <img className="f_icon" src={f_chat} alt="" />
            <p className="f_icon_text">Chat</p>
          </div>
        </a>
        <a>
          <div className="f_menu_item">
            <img className="f_icon" src={f_like} alt="" />
            <p className="f_icon_text">Donar</p>
          </div>
        </a>
      </footer>
    </>
  );

}
export default Footer;