import { Button } from "@mui/base";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function FabricExplorerWidget() {
  return (
    <div className="material-container">
      <div className="material-button-container">
        <p className="material-title">{messages["material"]}</p>
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="material-button">
          {messages["explore_more"]}
          <SvgIcon1 className="svg-container5" />
        </Button>
      </div>
    </div>
  );
}

export default FabricExplorerWidget;
