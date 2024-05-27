import FabricInfoDisplay from "../FabricInfoDisplay";
import { theme } from "../../theme";
import "./style.css";

function FabricDisplayRenderer({ fabricInfoOptions }) {
  const themeAlignmentStyles = [
    { alignmentPreference: theme.others.ALIGN_SELF_8FD4E705 },
    { textAlignmentStyle: theme.others.TEXT_ALIGN_AEB2CC55, alignmentPreference: theme.others.ALIGN_SELF_AEB2CC55 },
    { alignmentPreference: theme.others.ALIGN_SELF_8FD4E705 },
  ];
  return (
    <div className="vertical-flex-container">
      {fabricInfoOptions.map((data, index) => {
        return <FabricInfoDisplay {...data} key={index} {...themeAlignmentStyles[index]} />;
      })}
    </div>
  );
}

export default FabricDisplayRenderer;
