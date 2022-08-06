import "./footer.css";
import Card from "../Card";
import CardData from "../CardData";
const FooterContent = () => {
  return (
    <div className="card-container-footer">
      <div className="footer-column1">{<Card />}</div>
      <div className="footer-column2">{<CardData />}</div>
    </div>
  );
};
export default FooterContent;
