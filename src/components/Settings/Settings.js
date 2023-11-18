import { InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody,
  RangeControl,
  SelectControl,
  TextControl,
  ToggleControl,
} from '@wordpress/components';
import React from 'react';
import { BDevice } from '../../../../Components';
import AnchorsByTag from '../Panel/AnchorsByTag/AnchorsByTag';
import IconPicker from '../Panel/IconPicker/IconPicker';
import PanelAlign from '../Panel/PanelAlign/PanelAlign';
import PanelInputAdd from '../Panel/PanelInputAdd/PanelInputAdd';
import TabPanel from '../Panel/TabPanel/TabPanel';
import PanelUnit from '../Panel/PanelUnit/PanelUnit';
const Settings = ({ attributes, setAttributes }) => {
  const {
    changeTab,
    tableTitle,
    titleTag,
    customStyle,
    customStyleToggle,
    anchorsByTags,
    markupView,
    iconPopover,
    markupViewIcon,
    minimizeBox,
    expandIcon,
    expanIconIsOpen,
    collapseIcon,
    horizontalAlign,
    sticky,
    verticalAlign,
    leftAlignDevice,
    leftAlignUnit,
    leftAlignValue,
    rightAlignDevice,
    rightAlignUnit,
    rightAlignValue,
    topAlignDevice,
    topAlignUnit,
    topAlignValue,
    bottomAlignValue,
    bottomAlignUnit,
    bottomAlignDevice,
    deskZindex,
    zIndexDevice,
  } = attributes;
  const htmlTags = [
    { label: 'H1', value: 'h1' },
    { label: 'H2', value: 'h2' },
    { label: 'H3', value: 'h3' },
    { label: 'H4', value: 'h4' },
    { label: 'H5', value: 'h5' },
    { label: 'H6', value: 'h6' },
    { label: 'div', value: 'div' },
  ];
  return (
    <div>
      <InspectorControls>
        <TabPanel attributes={attributes} setAttributes={setAttributes} />
        <PanelBody title="Table of Contents" initialOpen={false}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p style={{ width: '50%' }}>Title</p>
            <TextControl
              style={{ width: '150px' }}
              value={tableTitle}
              onChange={(value) => setAttributes({ tableTitle: value })}
            />
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p style={{ width: '50%' }}>HTML Tag</p>
            <SelectControl
              style={{ width: '150px' }}
              value={titleTag}
              options={htmlTags}
              onChange={(value) => setAttributes({ titleTag: value })}
            />
          </div>
          <div className="include-exclude-container">
            <span>Anchors By Tags</span>
            <AnchorsByTag
              attributes={attributes}
              setAttributes={setAttributes}
            />
          </div>
          <ToggleControl
            label="Custom Style"
            checked={customStyleToggle}
            onChange={(value) => setAttributes({ customStyleToggle: value })}
          />
          {!customStyleToggle && (
            <>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <p style={{ width: '50%' }}>Markup view</p>
                <SelectControl
                  style={{ width: '150px' }}
                  value={markupView}
                  options={[
                    { label: 'Numbers', value: 'decimal' },
                    { label: 'Bullets', value: 'disc' },
                  ]}
                  onChange={(value) =>
                    setAttributes({
                      markupView: value,
                      markupViewIcon: value === 'disc' && 'fa-solid fa-circle',
                    })
                  }
                />
              </div>
              {markupView === 'disc' && (
                <IconPicker
                  icons={[
                    { label: 'Circle', value: 'fa-solid fa-circle' },
                    {
                      label: 'Dot Circle',
                      value: 'fa-solid fa-circle-dot',
                    },
                    {
                      label: 'Squire',
                      value: 'fa-solid fa-square-full',
                    },
                    {
                      label: 'Circle',
                      value: 'fa-regular fa-circle',
                    },
                    {
                      label: 'Dot Circle',
                      value: 'fa-regular fa-circle-dot',
                    },
                  ]}
                  label={'Icon'}
                  renderFunction={(value) =>
                    setAttributes({
                      markupViewIcon: value,
                      markupView: value === 'decimal' ? 'decimal' : 'disc',
                    })
                  }
                  value={markupViewIcon}
                  checked={iconPopover}
                  default={'decimal'}
                />
              )}
            </>
          )}
          {customStyleToggle && (
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p style={{ width: '50%' }}>Select Style</p>
              <SelectControl
                style={{ width: '150px' }}
                value={customStyle}
                options={[
                  { label: 'List', value: 'list' },
                  { label: 'Timeline', value: 'timeline' },
                  { label: 'Slide', value: 'slide' },
                ]}
                onChange={(value) => setAttributes({ customStyle: value })}
              />
            </div>
          )}
        </PanelBody>
        <PanelBody title="Settings" initialOpen={false}>
          <ToggleControl
            label="Minimize Box"
            checked={minimizeBox}
            onChange={(value) => setAttributes({ minimizeBox: value })}
          />
          <IconPicker
            icons={[
              { label: 'Chevron Down', value: 'fa-solid fa-chevron-down' },
              {
                label: 'Circle Chevron Down',
                value: 'fa-solid fa-circle-chevron-down',
              },
              { label: 'Angel Down', value: 'fa-solid fa-angle-down' },
              { label: 'Angel Double Down', value: 'fa-solid fa-angles-down' },
              { label: 'Caret Down', value: 'fa-solid fa-caret-down' },
              {
                label: 'Squire Caret Down',
                value: 'fa-solid fa-square-caret-down',
              },
              {
                label: 'Squire Caret Down',
                value: 'fa-regular fa-square-caret-down',
              },
            ]}
            default={'fa-solid fa-chevron-down'}
            label={'Expand Icon'}
            value={expandIcon}
            checked={expanIconIsOpen}
            renderFunction={(value) => setAttributes({ expandIcon: value })}
          />
          <div style={{ marginTop: '10px' }}>
            <IconPicker
              icons={[
                { label: 'Chevron Up', value: 'fa-solid fa-chevron-up' },
                {
                  label: 'Circle Chevron Up',
                  value: 'fa-solid fa-circle-chevron-up',
                },
                { label: 'Angel Up', value: 'fa-solid fa-angle-up' },
                { label: 'Angel Double Up', value: 'fa-solid fa-angles-up' },
                { label: 'Caret Up', value: 'fa-solid fa-caret-up' },
                {
                  label: 'Squire Caret Up',
                  value: 'fa-solid fa-square-caret-up',
                },
                {
                  label: 'Squire Caret Up',
                  value: 'fa-regular fa-square-caret-up',
                },
              ]}
              default={'fa-solid fa-chevron-up'}
              label={'Collapse Icon'}
              value={collapseIcon}
              renderFunction={(value) => setAttributes({ collapseIcon: value })}
            />
          </div>
        </PanelBody>
        <PanelBody title="Sticky" initialOpen={true}>
          <ToggleControl
            label="Sticky"
            checked={sticky}
            onChange={(value) => setAttributes({ sticky: value })}
          />
          <p>Sticky on</p>
          <PanelInputAdd
            attributes={attributes}
            setAttributes={setAttributes}
          />
          <div style={{ marginTop: '10px' }}>
            <PanelAlign
              label={'Horizontal Align'}
              icons={[
                { label: 'Left', value: 'fa-solid fa-arrow-left' },
                { label: 'Right', value: 'fa-solid fa-arrow-right' },
              ]}
              value={horizontalAlign}
              renderFunction={(value) =>
                setAttributes({ horizontalAlign: value })
              }
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <PanelAlign
              label={'Vertical Align'}
              icons={[
                { label: 'Top', value: 'fa-solid fa-arrow-up' },
                { label: 'Center', value: 'fa-solid fa-arrows-left-right' },
                { label: 'Bottom', value: 'fa-solid fa-arrow-down' },
              ]}
              value={verticalAlign}
              renderFunction={(value) =>
                setAttributes({ verticalAlign: value })
              }
            />
          </div>
          {horizontalAlign === 1 ? (
            <div style={{ marginTop: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{ display: 'flex', gap: '15px', alignItems: 'center' }}
                >
                  <span>Left</span>
                  <BDevice
                    device={leftAlignDevice}
                    onChange={(val) => setAttributes({ leftAlignDevice: val })}
                  />
                </div>
                <PanelUnit
                  value={leftAlignUnit}
                  units={['px', '%']}
                  renderFunction={(value) =>
                    setAttributes({ leftAlignUnit: value })
                  }
                />
              </div>
              <RangeControl
                value={leftAlignValue}
                min={0}
                max={leftAlignUnit === 'px' ? 1000 : 100}
                onChange={(value) => setAttributes({ leftAlignValue: value })}
              />
            </div>
          ) : (
            <div style={{ marginTop: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{ display: 'flex', gap: '15px', alignItems: 'center' }}
                >
                  <span>Right</span>
                  <BDevice
                    device={rightAlignDevice}
                    onChange={(val) => setAttributes({ rightAlignDevice: val })}
                  />
                </div>
                <PanelUnit
                  value={rightAlignUnit}
                  units={['px', '%']}
                  renderFunction={(value) =>
                    setAttributes({ rightAlignUnit: value })
                  }
                />
              </div>
              <RangeControl
                value={rightAlignValue}
                min={0}
                max={rightAlignUnit === 'px' ? 1000 : 100}
                onChange={(value) => setAttributes({ rightAlignValue: value })}
              />
            </div>
          )}
          {verticalAlign === 1 && (
            <div style={{ marginTop: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{ display: 'flex', gap: '15px', alignItems: 'center' }}
                >
                  <span>Top</span>
                  <BDevice
                    device={topAlignDevice}
                    onChange={(val) => setAttributes({ topAlignDevice: val })}
                  />
                </div>
                <PanelUnit
                  value={topAlignUnit}
                  units={['px', '%']}
                  renderFunction={(value) =>
                    setAttributes({ topAlignUnit: value })
                  }
                />
              </div>
              <RangeControl
                value={topAlignValue}
                min={0}
                max={topAlignUnit === 'px' ? 1000 : 100}
                onChange={(value) => setAttributes({ topAlignValue: value })}
              />
            </div>
          )}
          {verticalAlign === 3 && (
            <div style={{ marginTop: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{ display: 'flex', gap: '15px', alignItems: 'center' }}
                >
                  <span>Bottom</span>
                  <BDevice
                    device={bottomAlignDevice}
                    onChange={(val) =>
                      setAttributes({ bottomAlignDevice: val })
                    }
                  />
                </div>
                <PanelUnit
                  value={bottomAlignUnit}
                  units={['px', '%']}
                  renderFunction={(value) =>
                    setAttributes({ bottomAlignUnit: value })
                  }
                />
              </div>
              <RangeControl
                value={bottomAlignValue}
                min={0}
                max={bottomAlignUnit === 'px' ? 1000 : 100}
                onChange={(value) => setAttributes({ bottomAlignValue: value })}
              />
            </div>
          )}
          <div style={{ marginTop: '10px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div
                style={{ display: 'flex', gap: '15px', alignItems: 'center' }}
              >
                <span>Z-Index</span>
                <BDevice
                  device={zIndexDevice}
                  onChange={(val) => setAttributes({ zIndexDevice: val })}
                />
              </div>
            </div>
            <RangeControl
              value={deskZindex}
              min={0}
              max={10000}
              onChange={(value) => setAttributes({ deskZindex: value })}
            />
          </div>
        </PanelBody>
      </InspectorControls>
    </div>
  );
};

export default Settings;
