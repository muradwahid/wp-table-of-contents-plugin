import {useState,useEffect} from 'react';
import TimelineStyle from '../Style/TimelineStyle';
import DynamicTag from '../DynamicTag/DynamicTag';
import NoHeading from '../NoHeading/NoHeading';

const TimelineFront = ({attributes}) => {
    const { title, slideTitle, anchorsByTags, sticky,headings } = attributes;
    const [contentsAttr, setContentsAttr] = useState();
    const [rendered, setRendered] = useState(false);
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
      <TimelineStyle attributes={attributes} />
      <div
        onClick={() => setRendered(!rendered)}
        className={`timeline-container poppinsFont ${
          sticky.toggle ? 'sticky' : ''
          } ${sticky.horizonAlign} ${sticky.verticalAlign}  `}
      >
        <div className="timeline-title-container">
          <DynamicTag
            className="timeline-title"
            style={{ color: slideTitle.titleColor }}
            tagName={title.tag}
            value={title.text}
          />
        </div>
        <>
          {headings?.length > 0 ? (
            <ul className="timeline-list-items">
              {Array.from(headings).map((headingElement, idx) => (
                <>
                  <li className="timeline-list" key={idx}>
                    <a
                      onClick={() => setContentsAttr(idx)}
                      className={`${
                        idx === Number(contentsAttr) ? 'item-active' : ''
                      }`}
                      href={`#${headingElement.id}`}
                    >
                      {headingElement.contents}
                    </a>
                  </li>
                </>
              ))}
            </ul>
          ) : <NoHeading/>}
        </>
      </div>
    </>
  );
};

export default TimelineFront;