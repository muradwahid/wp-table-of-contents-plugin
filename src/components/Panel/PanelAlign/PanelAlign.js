const PanelAlign = ({ label, icons, renderFunction, value }) => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p style={{ width: '50%', margin: '0' }}>{label}</p>
        <div
          style={{
            display: 'flex',
            height: '27px',
            width: '57px',
            border: '1px solid #ccc',
          }}
        >
          {icons &&
            icons.map((icon, i) => (
              <div
                key={i}
                onClick={() => renderFunction(i + 1)}
                className={`single-icon-admin-panel panelAlign ${
                  value === i + 1 ? 'isActive' : 'no'
                }`}
              >
                <i className={icon.value}></i>
                <div className="icon-picker-tooltip-container">
                  <div className="icon-picker-tooltip">
                    <span>{icon.label}</span>
                    <i className="fa-solid fa-caret-down"></i>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PanelAlign;