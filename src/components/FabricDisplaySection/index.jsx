import { Button } from "@mui/base";
import FabricMessageSection from "../FabricMessageSection";
import StylishImageGallery from "../StylishImageGallery";
import FabricExplorerWidget from "../FabricExplorerWidget";
import FabricDisplayRenderer from "../FabricDisplayRenderer";
import RealizationDisplay from "../RealizationDisplay";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import "./style.css";
import messages from "./messages.json";

function FabricDisplaySection({ fabricInfoOptions }) {
  return (
    <div className="global-fashion-fabric-styles">
      <FabricMessageSection />
      <div className="fashion-grid-container">
        <img src="/assets/img_1091_2366_82b253.jpeg" className="image-container-with-clipping-path" />
        <div className="fashion-text-container">
          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Button className="button-with-icon">
            {messages["discover_more"]}
            <SvgIcon1 className="svg-container3" />
          </Button>
          <StylishImageGallery />
        </div>
        <img src="/assets/img_1091_2366_82b253.jpeg" className="image-container-with-clipping-path" />
      </div>
      <div className="fabric-type-range-section">
        <div className="fabric-types-section">
          <p className="fabric-type-heading">{messages["range_fabric_types_we_offer"]}</p>
          <p className="fabric-type-description">{messages["lrem_ipsum_suledes_plankning_till_heterossade_tosn"]}</p>
        </div>
        <div className="fabric-types-section1">
          <div className="circular-container-with-svg">
            <SvgIcon2 className="svg-container4" />
          </div>
          <div className="black-rounded-box-with-text">
            <SvgIcon3 className="svg-container4" />
          </div>
        </div>
      </div>
      <FabricExplorerWidget />
      <div className="custom-fabric-features-section">
        <div className="custom-fabric-description-box">
          <p className="majestic-heading1">{messages["we_analyzeltbr_gtwe_refineltbr_gtwe_innovate"]}</p>
          <p className="functional-fabric-description">{messages["we_trusted_partner_offering_crafted_custom_functio"]}</p>
          <p className="hero-title-style">{messages["about_us_gt"]}</p>
        </div>
        <FabricDisplayRenderer fabricInfoOptions={fabricInfoOptions} />
      </div>
      <RealizationDisplay />
    </div>
  );
}

export default FabricDisplaySection;
