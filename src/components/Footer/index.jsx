import "./footer-index.css";
import Logo from "../../assets/logo.png";
const Index = () => {
  return (
    <section>
      <hr className="footer-line" />
      <div className="rights-reserved">
        <img src={Logo} alt="icon" />

        <h2>All rights reserved BlockTak</h2>
      </div>
    </section>
  );
};
export default Index;
