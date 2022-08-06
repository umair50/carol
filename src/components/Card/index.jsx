import "./card.css";
import { useState } from "react";
const Index = () => {
  let [increment, setIncrment] = useState(0);
  const onValues = (e) => {
    if (increment <= 5) {
      increment = ++increment;
      if (increment > 5) {
        increment = 5;
      }
      setIncrment(increment);
    }
  };
  const onDownValue = (e) => {
    increment--;

    if (increment >= 0) {
      increment = increment--;
      setIncrment(increment);
    }
    if (increment < 0) {
      increment = 0;
    }
  };
  const onChangeValue = (e) => {
    increment = 5;
    setIncrment(increment);
  };
  return (
    <div className="footer-card-inner-container">
      <div className="footer-card-inner-information">
        <div className="footer-card-inner-information-header">
          <h3>Mint NFT</h3>
          <h4>1700 NFTS</h4>
        </div>
        <div className="footer-card-inner-content">
          <div className="inner-card-information">
            <div className="header-information">
              <h2>Amount</h2>
            </div>
            <div className="header-information-content">
              <h2>
                <span className="add-sub" onClick={onDownValue}>
                  -
                </span>{" "}
                {increment}{" "}
                <span onClick={onValues} className="add-sub">
                  +
                </span>
              </h2>
            </div>
            <div className="header-information-footer">
              <button className="btn-btn" onClick={onChangeValue}>
                MAX
              </button>
            </div>
          </div>
          <hr className="line-information" />
          <div className="inner-card-information">
            <div className="header-information1">
              <h2>Total</h2>
            </div>
            <div className="header-information1-footer">
              <h2>200/1700</h2>
            </div>
          </div>
          <hr className="line-information" />

          <div className="inner-card-information">
            <div className="footer-heading">
              <h2>Sold</h2>
            </div>
            <div className="content-footer">
              <h2>0.0 Avax</h2>
            </div>
          </div>
          <hr className="line-information" />
          <div className="minit-button">
            <button className="minit-btn">Mint</button>
          </div>
          <div className="footer-box-information">
            <p className="p-line">
              For Sale With <span>150 Whitelisted</span> and{" "}
              <span>50 for giveaways</span>
            </p>
            <p>
              Whitelisted Price: <span>2.5 AVAX</span>
            </p>
            <p>
              Price: <span>3.5 AVAX</span>
            </p>
            <p>Total Supply: 1700</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
