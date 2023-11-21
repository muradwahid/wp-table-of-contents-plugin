import { useEffect, useRef, useState } from 'react';
import DynamicTag from '../DynamicTag/DynamicTag';
const TableContents = ({ attributes }) => {
  const [toggle, setToggle] = useState(true);
  const [content, setContent] = useState([]);
  const [storedAttr, setStoredAttr] = useState('');
  const [contentsAttr, setContentsAttr] = useState();
  const {
    tableTitle,
    titleTag,
    anchorsByTags,
    markupView,
    markupViewIcon,
    expandIcon,
    minimizeBox,
    collapseIcon,
    sticky,
    horizontalAlign,
    verticalAlign,
    headerTxtColor,
    headerIconColor,
  } = attributes;
useEffect(() => {
  const root = document.querySelector(
    '.wp-block-post-content-is-layout-constrained'
  );
  const selectorString = anchorsByTags.join(', ');
  const headingElements = root?.querySelectorAll(`${selectorString}`);
  const accordionTitle = document.querySelector('.accordion-title');
  const removeAttrHeading = accordionTitle?.querySelector(`${titleTag}`);
  if (removeAttrHeading.tagName.toLowerCase() !== 'div') {
    setStoredAttr(removeAttrHeading.getAttribute('data-anchor'));
  }

  // console.log(accordionTitle.children[0].removeAttribute('data-anchor'));
  if (headingElements?.length) {
    for (let i = 0; i < headingElements.length; i++) {
      const headingElement = headingElements[i];
      const span = document.createElement('span');
      span.setAttribute('id', `bppb-heading-anchor-${i}`);
      headingElement.setAttribute('data-anchor', `bppb-heading-anchor-${i}`);
      headingElement.setAttribute('data-idx', i);
      // headingElement.parentNode.insertBefore(span, headingElement.nextSibling);
      headingElement.insertAdjacentElement('afterbegin', span);
    }
  }
  if (removeAttrHeading.tagName.toLowerCase() !== 'div') {
    removeAttrHeading.removeAttribute('data-anchor');
    removeAttrHeading.removeAttribute('data-idx');
    const removeSpan = removeAttrHeading.querySelector('span');
    removeSpan && removeSpan.remove();
  }
  removeAttrHeading.innerHTML = tableTitle;

  setContent(headingElements);
}, [titleTag, tableTitle, anchorsByTags, markupView]);

  const accordion = useRef();
  const title = useRef();
  const accordionPanel = useRef();

  useEffect(() => {
    title.current.addEventListener('click', function () {
      let panel = accordionPanel.current;
      if (
        parseInt(panel.style.height.substring(0, panel.style.height.length - 2))
      ) {
        panel.style.height = '0px';
        if (minimizeBox) {
          panel.style.height = panel.scrollHeight + 'px';
        }
        panel.style.height = '0px';
        setToggle(false);
      } else {
        panel.style.height = panel.scrollHeight + 'px';
        setToggle(true);
      }
    });
  }, [titleTag, anchorsByTags, markupView, minimizeBox]);
  return (
    <div
      ref={accordion}
      className={`accordion ${sticky ? 'sticky' : ''} ${
        horizontalAlign === 1 ? 'left' : 'right'
      } ${
        verticalAlign === 1 ? 'top' : verticalAlign === 2 ? 'center' : 'bottom'
      }  `}
    >
      <div ref={title} className="accordion-title">
        <DynamicTag
          style={{ margin: '0', color: headerTxtColor }}
          tagName={titleTag}
          value={tableTitle}
        />
        {minimizeBox && (
          <>
            {toggle ? (
              <i
                style={{ color: headerIconColor }}
                className={collapseIcon}
              ></i>
            ) : (
              <i style={{ color: headerIconColor }} className={expandIcon}></i>
            )}
          </>
        )}
      </div>
      <div ref={accordionPanel} className="panel">
        {content?.length > 1 ? (
          <ol className="panel-table-container-order-list">
            {Array.from(content).map((headingElement, idx) => (
              <>
                {storedAttr !== headingElement.getAttribute('data-anchor') && (
                  <li className='panel-table-list-items' onClick={() => setContentsAttr(idx)} key={idx}>
                    <span>
                      {markupView !== 'decimal' && (
                        <i
                          style={{ fontSize: '10px' }}
                          className={`${markupViewIcon}`}
                        ></i>
                      )}
                    </span>
                    <a
                      className={`table-content-anchor-list ${
                        Number(headingElement.getAttribute('data-idx')) ===
                        Number(contentsAttr)
                          ? 'item-active'
                          : ''
                      }`}
                      href={`#${headingElement.getAttribute('data-anchor')}`}
                    >
                      {headingElement.textContent}
                    </a>
                  </li>
                )}
              </>
            ))}
          </ol>
        ) : (
          <p>No headings were found on this page</p>
        )}
      </div>
    </div>
  );
};

export default TableContents;
