import { Popover } from '@wordpress/components';
import { useEffect, useRef, useState } from '@wordpress/element';

const PanelInputAdd = ({attributes,setAttributes }) => {
  const { sticky } = attributes;
  const { device } = sticky;
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const refHeadingTag = useRef();
  const addTag = (val) => {
    const restVal = [...sticky.device];
    if (!restVal.includes(val)) {
      restVal.push(val);
      setAttributes({ sticky:{...sticky,device: restVal} });
    }
  };
  useEffect(() => {
    const handle = (e) => {
      if (!refHeadingTag?.current?.contains(e.target)) {
        setPopoverVisible(false);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => {
      document.removeEventListener('mousedown', handle);
    };
  });
  return (
    <div>
      <ul className="anchor-list-admin-panel">
        {sticky.device &&
          sticky.device.sort().map((tag, idx) => (
            <li key={idx} className="anchor-admin-panel-list">
              <i
                onClick={() =>
                  setAttributes({
                    sticky: {
                      ...sticky,
                      device: device.filter((val, i) => i !== idx),
                    },
                  })
                }
                className="fa-solid fa-xmark"
              ></i>
              {tag.toUpperCase()}
            </li>
          ))}
        {sticky.device && sticky.device.length < 3 && (
          <li
            onClick={() => setPopoverVisible(!isPopoverVisible)}
            className="anchor-admin-panel-list-plus-icon"
          >
            <i className="fa-solid fa-square-plus"></i>
          </li>
        )}
        <input
          onClick={() => setPopoverVisible(!isPopoverVisible)}
          type="search"
          autoCorrect="off"
          autoCapitalize="off"
        />
      </ul>
      {isPopoverVisible && (
        <Popover ref={refHeadingTag} className="popover-anchor-admin-panel">
          <p
            onClick={() => addTag('Desktop')}
            className={`${sticky.device.includes('Desktop') ? 'isActiveTag' : ''}`}
          >
            Desktop
          </p>
          <p
            onClick={() => addTag('Tablet')}
            className={`${sticky.device.includes('Tablet') ? 'isActiveTag' : ''}`}
          >
            Tablet
          </p>
          <p
            onClick={() => addTag('Mobile')}
            className={`${sticky.device.includes('Mobile') ? 'isActiveTag' : ''}`}
          >
            Mobile
          </p>
        </Popover>
      )}
    </div>
  );
};

export default PanelInputAdd;
