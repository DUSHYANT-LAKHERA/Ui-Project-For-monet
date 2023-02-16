// import logo from "./logo.svg";
import "./App.css";
import logo from "./logo.svg";
import Minilogo from "./manlogo.jpg";

function App() {
  return (
    <div className="App wrapper-page-container">
      <div className="mian-bg-container">
        <div className="main-container">
          <div className=" upper-log-container ">
            <p> Anand vats </p>
            <div>
              <img className="mini-logo" src={Minilogo} alt="" />
              {/* <img src={logo} alt="" /> */}
            </div>
          </div>
          <div className="main-logo-wrapper ">
            <div>
              <img className="main-logo" src={logo} alt="" />
            </div>
            <p className="need-heading">Select a plan that suits your needs </p>
          </div>
          <div className="plans-wrapper-container">
            <div className="button-wrapper">
              <button className="month-button btn-btn"> Monthly </button>
              <button className="annual-button btn-btn">Annual</button>
            </div>
            <div className="offer-wrapper">
              <div className="info-main-container">
                <p className="plan-heading">Plans </p>
                <p className="video-heading ">Video Duration</p>
                <p className="share-heading ">Share with Friends </p>
                <p className="share-heading ">Eemo Panels </p>
              </div>
              <div className="container-1 innner-container">
                <div className="plan-type-container type-first">
                  <p className="paln-heading-1 heading-text">Trial</p>
                  <div className="amount-wrapper-container">
                    <p className="dollar-sign">$</p>
                    <div className="amount-div">
                      <p className="prize-div">0.</p>
                      <p className="prize-div-1">00</p>
                    </div>
                  </div>
                </div>
                <p className="info-div ">90 seconds</p>
                <p className="info-div "> Not Inculded</p>
                <p className="info-div ">2 test for free</p>
                <button className="select-button">Expired</button>
              </div>
              <div className="container-2 innner-container">
                <div className="plan-type-container second-type ">
                  <p className="paln-heading-2 heading-text">Light </p>
                  <div className="amount-wrapper-container">
                    <p className="dollar-sign">$</p>
                    <div className="amount-div">
                      <p className="prize-div">39.</p>
                      <p className="prize-div-1">99</p>
                    </div>
                  </div>
                </div>
                <p className="info-div ">90 seconds</p>
                <p className="info-div "> Not Inculded</p>
                <p className="info-div ">2 test for free</p>
                <button className="select-button another-button">Select</button>
              </div>
              <div className="container-2 innner-container">
                <div className="plan-type-container second-type">
                  <p className="paln-heading-2 heading-text">pro</p>
                  <div className="amount-wrapper-container">
                    <p className="dollar-sign">$</p>
                    <div className="amount-div">
                      <p className="prize-div">199.</p>
                      <p className="prize-div-1">99</p>
                    </div>
                  </div>
                </div>
                <p className="info-div ">90 seconds</p>
                <p className="info-div "> Not Inculded</p>
                <p className="info-div ">2 test for free</p>
                <button className="select-button another-button">Select</button>
              </div>
            </div>
            <p className="end-mid-notice ">
              *Add a single eemo panel anytime at $29.99
            </p>
          </div>
          <div className="question-wrapper">
            <p className="question">Why eemo ?</p>
            <div className=" terms-div">
              <p className="term">Legal</p>
              <p className=" term">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;