import { Popover } from '@wordpress/components';
import {useRef,useEffect} from 'react';

const AnchorsByTag = ({ attributes, setAttributes }) => {
  const { anchorsByTags, isPopoverVisible } = attributes;
  const refHeadingTag = useRef()
  const addTag = (tag) => {
    const restTag = [...anchorsByTags];
    if (!restTag.includes(tag)) {
      restTag.push(tag);
      setAttributes({ anchorsByTags: restTag });
    }
  }
  useEffect(() => {
    const handle=(e)=>{
      if (!refHeadingTag?.current?.contains(e.target)) {
        setAttributes({ isPopoverVisible: false })
        
      }
    }
    document.addEventListener('mousedown', handle)
    return () => {
      document.removeEventListener('mousedown', handle)
    }
  })
  return (
    <div>
      <ul className="anchor-list-admin-panel">
        {anchorsByTags &&
          anchorsByTags.sort().map((tag, idx) => (
            <li key={idx} className="anchor-admin-panel-list">
              <i
                onClick={() =>
                  setAttributes({
                    anchorsByTags: anchorsByTags.filter((val, i) => i !== idx),
                  })
                }
                className="fa-solid fa-xmark"
              ></i>
              {tag.toUpperCase()}
            </li>
          ))}
        {anchorsByTags && anchorsByTags.length < 6 && (
          <li
            onClick={() =>
              setAttributes({ isPopoverVisible: !isPopoverVisible })
            }
            className="anchor-admin-panel-list-plus-icon"
          >
            <i className="fa-solid fa-square-plus"></i>
          </li>
        )}
        <input
          onClick={() => setAttributes({ isPopoverVisible: !isPopoverVisible })}
          type="search"
          autoCorrect="off"
          autoCapitalize="off"
        />
      </ul>
      {isPopoverVisible && (
        <Popover ref={refHeadingTag} className="popover-anchor-admin-panel">
          <p
            onClick={() => addTag('h1')}
            className={`${anchorsByTags.includes('h1') ? 'isActiveTag' : ''}`}
          >
            H1
          </p>
          <p
            onClick={() => addTag('h2')}
            className={`${anchorsByTags.includes('h2') ? 'isActiveTag' : ''}`}
          >
            H2
          </p>
          <p
            onClick={() => addTag('h3')}
            className={`${anchorsByTags.includes('h3') ? 'isActiveTag' : ''}`}
          >
            H3
          </p>
          <p
            onClick={() => addTag('h4')}
            className={`${anchorsByTags.includes('h4') ? 'isActiveTag' : ''}`}
          >
            H4
          </p>
          <p
            onClick={() => addTag('h5')}
            className={`${anchorsByTags.includes('h5') ? 'isActiveTag' : ''}`}
          >
            H5
          </p>
          <p
            onClick={() => addTag('h6')}
            className={`${anchorsByTags.includes('h6') ? 'isActiveTag' : ''}`}
          >
            H6
          </p>
        </Popover>
      )}
    </div>
  );
};

export default AnchorsByTag;