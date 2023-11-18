import { Popover } from '@wordpress/components';
import { useEffect, useRef, useState } from '@wordpress/element';

const PanelInputAdd = ({attributes,setAttributes }) => {
  const { stickyDevice } = attributes;
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const refHeadingTag = useRef();
  const addTag = (val) => {
    const restVal = [...stickyDevice];
    if (!restVal.includes(val)) {
      restVal.push(val);
      setAttributes({ stickyDevice: restVal });
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
        {stickyDevice &&
          stickyDevice.sort().map((tag, idx) => (
            <li key={idx} className="anchor-admin-panel-list">
              <i
                onClick={() =>
                  setAttributes({
                    stickyDevice: stickyDevice.filter((val, i) => i !== idx),
                  })
                }
                className="fa-solid fa-xmark"
              ></i>
              {tag.toUpperCase()}
            </li>
          ))}
        {stickyDevice && stickyDevice.length < 3 && (
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
            className={`${
              stickyDevice.includes('Desktop') ? 'isActiveTag' : ''
            }`}
          >
            Desktop
          </p>
          <p
            onClick={() => addTag('Tablet')}
            className={`${
              stickyDevice.includes('Tablet') ? 'isActiveTag' : ''
            }`}
          >
            Tablet
          </p>
          <p
            onClick={() => addTag('Mobile')}
            className={`${
              stickyDevice.includes('Mobile') ? 'isActiveTag' : ''
            }`}
          >
            Mobile
          </p>
        </Popover>
      )}
    </div>
  );
};

export default PanelInputAdd;
