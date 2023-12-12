import { useEffect, useState } from 'react';
import DynamicTag from '../../../DynamicTag/DynamicTag';
import ListStyle from '../../../Style/ListStyle';

const List = ({ attributes, setAttributes }) => {
  const { title, slideTitle, anchorsByTags, sticky } = attributes;
  const [content, setContent] = useState([]);
  const [contentsAttr, setContentsAttr] = useState();
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    const root = document.querySelector('.wp-block-post-content');
    const selectorString = anchorsByTags.join(', ');
    const headingElements = root?.querySelectorAll(`${selectorString}`);
    const accordionTitle = document.querySelector('.list-title');
    const removeAttrHeading = accordionTitle?.querySelector(`${title?.tag}`);
    const savedElements = [];
    Array.from(headingElements).forEach((headingElement) => {
      if (headingElement.className !== 'list-title-heading') {
        for (let index = 0; index < headingElement.children.length; index++) {
          if (index + 1 !== 1) {
            headingElement.children[index].remove();
          }
        }
        savedElements.push({
          contents: headingElement.textContent,
          tag: headingElement.tagName,
          id: headingElement.children[0]?.getAttribute('id'),
        });
      }
    });
    setAttributes({ headings: savedElements });
    if (headingElements?.length) {
      for (let i = 0; i < headingElements.length; i++) {
        const headingElement = headingElements[i];
        const span = document.createElement('span');
        span.setAttribute('id', `bppb-heading-anchor-${i}`);
        headingElement.insertAdjacentElement('afterbegin', span);
      }
    }
    if (removeAttrHeading?.tagName.toLowerCase() !== 'div') {
      const removeSpan = removeAttrHeading?.querySelector('span');
      removeSpan && removeSpan.remove();
    }
    removeAttrHeading ? (removeAttrHeading.innerHTML = title?.text) : '';

    setContent(headingElements);
  }, [rendered, title.tag, anchorsByTags]);
  return (
    <>
      <ListStyle attributes={attributes} />
      <div
        onClick={() => setRendered(!rendered)}
        className={`list-container poppinsFont ${
          sticky.toggle ? 'sticky' : ''
        } ${sticky.horizonAlign === 1 ? 'left' : 'right'} ${
          sticky.verticalAlign === 1
            ? 'top'
            : sticky.verticalAlign === 2
            ? 'center'
            : 'bottom'
        }`}
      >
        <div className="list-title">
          <DynamicTag
            className="list-title-heading"
            style={{ color: slideTitle.titleColor }}
            tagName={title.tag}
            value={title.text}
          />
        </div>
        <>
          {content?.length > 1 ? (
            <div className="list-items">
              {Array.from(content).map(
                (headingElement, idx) =>
                  headingElement.className !== 'list-title-heading' && (
                    <>
                      <p className="list-item" key={idx}>
                        <a
                          onClick={() => setContentsAttr(idx)}
                          className={`${
                            idx === Number(contentsAttr) ? 'item-active' : ''
                          }`}
                          href={`#bppb-heading-anchor-${idx}`}
                        >
                          {headingElement.textContent}
                        </a>
                      </p>
                    </>
                  )
              )}
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

export default List;
