import {
  Button,
  ColorPalette,
  Dashicon,
  Popover,
} from '@wordpress/components';
import {useState} from 'react';
const PanelColorControl = ({ label, value, colors,renderFunction,defaults }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <style>
        {`
          .custom-color-palette-style{
            width: 20px;
            height: 20px;
            border:1px solid #ccc;
            border-radius: 50%;
            background-color: ${value};
          }
          `}
      </style>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p style={{ margin: '0' }}>{label}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span className="custom-color-palette-style"></span>
          <Button onClick={() => setIsOpen(!isOpen)}>
            <Dashicon icon="edit" />
          </Button>
        </div>
      </div>
      {isOpen && (
        <Popover>
          <div style={{ padding: '10px' }}>
            <ColorPalette
              defaultValue={defaults}
              colors={colors}
              value={value}
              onChange={(val) => renderFunction(val)}
            />
          </div>
        </Popover>
      )}
    </div>
  );
};

export default PanelColorControl;