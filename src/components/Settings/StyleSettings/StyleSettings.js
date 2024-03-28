import React,{Fragment} from 'react';
import BoxStyle from './Styles/BoxStyle';
import DefaultHeaderStyle from './Styles/DefaultHeaderStyle';
import SlideSettings from './Styles/SlideSettings';
import TimelineSettings from './Styles/TimelineSettings';
import ListSettings from './Styles/ListSettings';

const StyleSettings = ({ attributes, setAttributes }) => {
  const {theme } = attributes;
  return (
    <Fragment>
      <BoxStyle attributes={attributes} setAttributes={setAttributes} />
      {theme === "default" && <DefaultHeaderStyle attributes={attributes} setAttributes={setAttributes} />}
      {'slide' === theme && (
        <SlideSettings attributes={attributes} setAttributes={setAttributes} />
      )}
      {'timeline' === theme && (
        <TimelineSettings
          attributes={attributes}
          setAttributes={setAttributes}
        />
      )}
      {'list' === theme && (
        <ListSettings attributes={attributes} setAttributes={setAttributes} />
      )}
    </Fragment>
  );
};

export default StyleSettings;