import {useEffect,useState} from 'react';
import DynamicTag from '../DynamicTag/DynamicTag';
import SlideStyle from '../Style/SlideStyle';

const SliderFront = ({attributes}) => {
    const [contentsAttr, setContentsAttr] = useState();
    const [rendered, setRendered] = useState(false);
    const {
      title,
      anchorsByTags,
      sticky,
      headings,
      slideTitle,
    } = attributes;
    useEffect(() => {
      const root = document.body;
      const selectorString = anchorsByTags.join(', ');
      const headingsEl = root.querySelectorAll(`${selectorString}`);
      for (let index = 0; index < headingsEl.length; index++) {
        const currentHeading = headings.find(
          (heading) =>
            heading.tag === headingsEl[index].tagName &&
            heading.contents === headingsEl[index].textContent
        );
        if (currentHeading) {
          const span = document.createElement('span');
          span.setAttribute('id', currentHeading.id);
          headingsEl[index].insertAdjacentElement('beforebegin', span);
        }
      }
          const url = window.location.hash;
          setTimeout(() => {
            const activeSection = document.querySelector(`[href='${url}']`);
            activeSection?.click();
          }, 1000);
    }, []);
  return (
    <>
      <SlideStyle attributes={attributes} />
      <div
        onClick={() => setRendered(!rendered)}
        className={`slide-container poppinsFont ${
          sticky.toggle ? 'sticky' : ''
        } ${sticky.horizonAlign === 1 ? 'left' : 'right'} ${
          sticky.verticalAlign === 1
            ? 'top'
            : sticky.verticalAlign === 2
            ? 'center'
            : 'bottom'
        }  `}
      >
        <div className="slide-title">
          <DynamicTag
            className="slide-title-heading"
            style={{ color: slideTitle.titleColor }}
            tagName={title.tag}
            value={title.text}
          />
        </div>
        <>
          {headings?.length > 1 ? (
            <div className="slide-list-items">
              {Array.from(headings).map((headingElement, idx) => (
                <>
                  <p
                    className="slide-list"
                    onClick={() => setContentsAttr(idx)}
                    key={idx}
                  >
                    <a
                      className={`${
                        idx === Number(contentsAttr) ? 'item-active' : ''
                      }`}
                      href={`#${headingElement.id}`}
                    >
                      {headingElement.contents}
                    </a>
                  </p>
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

export default SliderFront;