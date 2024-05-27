import ImageContainer4 from "../ImageContainer4";
import ImageContainer from "../ImageContainer";
import ImageContainer1 from "../ImageContainer1";
import ImageContainer2 from "../ImageContainer2";
import ImageContainer3 from "../ImageContainer3";
import "./style.css";
import messages from "./messages.json";

function RealizationDisplay() {
  return (
    <div className="realization-container">
      <p className="majestic-heading">{messages["realizations"]}</p>
      <div className="realization-container1">
        <div className="image-container-stack">
          <img src="/assets/img_1091_2307_ddef86.jpeg" className="hero-image-container1" />
          <ImageContainer4 />
        </div>
        <div className="image-container-with-text">
          <img src="/assets/img_1091_2310_6795e8.jpeg" className="image-container-full-width" />
          <ImageContainer />
        </div>
        <div className="realization-container">
          <img src="/assets/img_1091_2313_845128.jpeg" className="profile-image-container" />
          <ImageContainer1 />
        </div>
        <div className="nested-image-container">
          <img src="/assets/img_1091_2316_c429e5.jpeg" className="hero-image-container" />
          <ImageContainer2 />
        </div>
        <div className="vertical-image-container">
          <img src="/assets/img_1091_2319_6f272c.jpeg" className="profile-image-container1" />
          <ImageContainer3 />
        </div>
      </div>
    </div>
  );
}

export default RealizationDisplay;
