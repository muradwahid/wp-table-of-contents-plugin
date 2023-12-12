import { useEffect,Fragment } from 'react';
import Settings from './components/Settings/Settings';
import TableContents from './components/TableContents/TableContents';
import List from './components/TableContents/Themes/List/List';
import Slide from './components/TableContents/Themes/Slide/Slide';
import Timeline from './components/TableContents/Themes/Timeline/Timeline';
import SmoothScroll from './components/SmoothScroll';
const Edit = (props) => {
  const { className, setAttributes, clientId, attributes } = props;
  const { theme } = attributes;

  useEffect(() => {
    clientId && setAttributes({ cId: clientId.substring(0, 10) });
  }, [clientId]); // Set & Update clientId to cId

  return (
    <Fragment>
      <SmoothScroll />
      <div className={className} id={`bppb-table-of-contents-${clientId}`}>
        <Settings attributes={attributes} setAttributes={setAttributes} />
        {(() => {
          switch (theme) {
            case 'slide':
              return (
                <Slide attributes={attributes} setAttributes={setAttributes} />
              );
            case 'timeline':
              return (
                <Timeline
                  attributes={attributes}
                  setAttributes={setAttributes}
                />
              );
            case 'list':
              return (
                <List attributes={attributes} setAttributes={setAttributes} />
              );
            default:
              return (
                <TableContents
                  setAttributes={setAttributes}
                  attributes={attributes}
                />
              );
          }
        })()}
      </div>
    </Fragment>
  );
};
export default Edit;
