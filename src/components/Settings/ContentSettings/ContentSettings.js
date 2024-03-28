import React,{Fragment} from 'react';
import TableContentSettings from './Contents/TableContentSettings';
import DefaultSettings from './Contents/DefaultSettings';
import StickySettings from './Contents/StickySettings';

const ContentSettings = ({ attributes, setAttributes }) => {
  const {theme} = attributes;
  return (
    <Fragment>
      <TableContentSettings attributes={attributes} setAttributes={setAttributes} />
      {theme === "default" && <DefaultSettings attributes={attributes} setAttributes={setAttributes} />}
      <StickySettings attributes={attributes} setAttributes={setAttributes} />
    </Fragment>
  );
};

export default ContentSettings;