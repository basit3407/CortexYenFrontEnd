import "./style.css";

function FabricInfoDisplay({ fabricDesignCategory, suggestedName, alignmentPreference, textAlignmentStyle }) {
  return (
    <div className="center-flex-box-with-padding">
      <p className="art-nova-heading" style={{ textAlign: textAlignmentStyle }}>
        {fabricDesignCategory}
      </p>
      <p className="centered-text-display-style" style={{ alignSelf: alignmentPreference }}>
        {suggestedName}
      </p>
    </div>
  );
}

export default FabricInfoDisplay;
