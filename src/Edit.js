import { InspectorControls } from '@wordpress/block-editor';
import { Fragment, useEffect, useState } from 'react';
import TabPanel from './components/Panel/TabPanel/TabPanel';
import ContentSettings from './components/Settings/ContentSettings/ContentSettings';
import StyleSettings from './components/Settings/StyleSettings/StyleSettings';
import SmoothScroll from './components/SmoothScroll';
import TableContents from './components/TableContents/TableContents';
import List from './components/TableContents/Themes/List/List';
import Slide from './components/TableContents/Themes/Slide/Slide';
import Timeline from './components/TableContents/Themes/Timeline/Timeline';
const Edit = (props) => {
  const { className, setAttributes, clientId, attributes } = props;
  const { theme,cId } = attributes;
  const [tab, setTab] = useState("content");
  useEffect(() => {
    clientId && setAttributes({ cId: clientId.substring(0, 10) });
  }, [clientId]); // Set & Update clientId to cId

  return (
    <Fragment>
      <InspectorControls>
        <TabPanel tab={tab} setTab={setTab} />
        {tab === "content" && <ContentSettings attributes={attributes} setAttributes={setAttributes} />}
        {
          tab === "style" && <StyleSettings attributes={attributes} setAttributes={setAttributes} />
        }
      </InspectorControls>
      <SmoothScroll />
      <div className={className} id={`bppb-table-of-contents-${cId}`}>
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
