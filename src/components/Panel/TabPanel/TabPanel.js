import { Dashicon } from '@wordpress/components';
import React from 'react';

const TabPanel = ({ attributes, setAttributes }) => {
  const { changeTab } = attributes;
  return (
    <div className="tab-panel-container">
      <div
        onClick={() => setAttributes({ changeTab: 'tabone' })}
        className={`single-tab ${
          changeTab === 'tabone'
            ? 'is-tab-active active-tab-color'
            : 'deActive-tab-color'
        }`}
      >
        <Dashicon icon="edit" />
        <span>Content</span>
      </div>
      <div
        onClick={() => setAttributes({ changeTab: 'tabtwo' })}
        className={`single-tab ${
          changeTab === 'tabtwo'
            ? 'is-tab-active active-tab-color'
            : 'deActive-tab-color'
        }`}
      >
        <i
          style={{ paddingBottom: '4px' }}
          className="fa-solid fa-circle-half-stroke"
        ></i>
        <span>Style</span>
      </div>
      <div
        onClick={() => setAttributes({ changeTab: 'tabthree' })}
        className={`single-tab ${
          changeTab === 'tabthree'
            ? 'is-tab-active active-tab-color'
            : 'deActive-tab-color'
        }`}
      >
        <Dashicon icon="admin-generic" />
        <span>Advanced</span>
      </div>
    </div>
  );
};

export default TabPanel;
