import NFT from "../../assets/NFT.png";
import "./index.css";
const Content = () => {
  return (
    <div className="card-container">
      <div className="column1">
        <div className="card-heading-content">
          <h1>Build Your Coral Collection</h1>
          <hr className="line" />
          <hr className="line-mid" align="center" />
        </div>
        <div className="card-heaading-main-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias minima
          laudantium labore itaque deleniti et modi animi necessitatibus. Harum
          animi enim error rem ducimus rerum magnam assumenda tenetur id
          reiciendis.
        </div>
        <div className="card-buttons">
          <button className="btn-btn-first">Enter Coral-Collection</button>
          <button className="btn-btn-sec">Read Whitepaper</button>
        </div>
      </div>
      <div className="column2">
        <div className="img-nft">
          <img src={NFT} alt="NFT.icon" className="image-nft" />
        </div>
      </div>
    </div>
  );
};

export default Content;
