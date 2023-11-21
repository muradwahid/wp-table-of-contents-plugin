import { useEffect, useState } from 'react';
import SlideStyle from './SlideStyle';
import DynamicTag from '../../../DynamicTag/DynamicTag';

const Slide = ({ attributes }) => {
  const {
    anchorsByTags,
    titleTag,
    tableTitle,
    headerTxtColor,
    sticky,
    horizontalAlign,
    verticalAlign,
    slideTitleColor,
  } = attributes;
  const [content, setContent] = useState([]);
  const [storedAttr, setStoredAttr] = useState('');
  const [contentsAttr, setContentsAttr] = useState();
  useEffect(() => {
    const root = document.querySelector(
      '.wp-block-post-content-is-layout-constrained'
    );
    const selectorString = anchorsByTags.join(', ');
    const headingElements = root?.querySelectorAll(`${selectorString}`);
    const accordionTitle = document.querySelector('.slide-title');
    const removeAttrHeading = accordionTitle?.querySelector(`${titleTag}`);
    if (removeAttrHeading?.tagName.toLowerCase() !== 'div') {
      setStoredAttr(removeAttrHeading?.getAttribute('data-anchor'));
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
    if (removeAttrHeading?.tagName.toLowerCase() !== 'div') {
      removeAttrHeading?.removeAttribute('data-anchor');
      removeAttrHeading?.removeAttribute('data-idx');
      const removeSpan = removeAttrHeading?.querySelector('span');
      removeSpan && removeSpan.remove();
    }
    removeAttrHeading ?  removeAttrHeading.innerHTML = tableTitle : ''

    setContent(headingElements);
  }, [titleTag, tableTitle, anchorsByTags]);
  return (
    <>
      <SlideStyle attributes={attributes} />
      <div
        className={`slide-container ${sticky ? 'sticky' : ''} ${
          horizontalAlign === 1 ? 'left' : 'right'
        } ${
          verticalAlign === 1
            ? 'top'
            : verticalAlign === 2
            ? 'center'
            : 'bottom'
        }  `}
      >
        <div className="slide-title">
          {/* <h2 className="slide-title-heading">Table of Contents</h2> */}
          <DynamicTag
            className="slide-title-heading"
            style={{ color: slideTitleColor }}
            tagName={titleTag}
            value={tableTitle}
          />
        </div>

        <>
          {content?.length > 1 ? (
            <div className="slide-list-items">
              {Array.from(content).map((headingElement, idx) => (
                <>
                  {storedAttr !==
                    headingElement.getAttribute('data-anchor') && (
                    <p
                      className="slide-list"
                      onClick={() => setContentsAttr(idx)}
                      key={idx}
                    >
                      <a
                        className={`${
                          Number(headingElement.getAttribute('data-idx')) ===
                          Number(contentsAttr)
                            ? 'item-active'
                            : ''
                        }`}
                        href={`#${headingElement.getAttribute('data-anchor')}`}
                      >
                        {headingElement.textContent}
                      </a>
                    </p>
                  )}
                </>
              ))}
            </div>
          ) : (
            <div className="slide-list-items">
              <p className="slide-list">
                <a href="">No headings were found on this page</a>
              </p>
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default Slide;
