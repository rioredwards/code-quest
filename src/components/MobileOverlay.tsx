import './MobileOverlay.css';

function MobileOverlay() {
  return (
    <div className="mobile-overlay">
      <div className="mobile-overlay-content">
        <div className="mobile-overlay-logo" />
        <h1 className="mobile-overlay-title">Desktop Only</h1>
        <p className="mobile-overlay-message">
          This site is best experienced on a computer. Please visit on a desktop or laptop for the full experience.
        </p>
      </div>
    </div>
  );
}

export default MobileOverlay;
