import {
  __experimentalBoxControl as BoxControl,
  PanelBody,
  RangeControl,
  ToggleControl,
} from '@wordpress/components';
import { Fragment } from 'react';
import {
  BDevice,
  Background,
  MultiShadowControl,
} from '../../../../Components';
import IncludeExClude from '../Panel/IncludeExClude/IncludeExClude';
import PanelColorControl from '../Panel/PanelColorControl/PanelColorControl';
import PanelUnit from '../Panel/PanelUnit/PanelUnit';
import ListSettings from './ListSettings';
import SlideSettings from './SlideSettings';
import TimelineSettings from './TimelineSettings';

const units = [
  { value: 'px', label: 'px', default: 0 },
  { value: '%', label: '%', default: 0 },
  { value: 'em', label: 'em', default: 0 },
];
const StyleSettings = ({ attributes, setAttributes }) => {
  const { table, header, boxList, markup, theme } = attributes;
  return (
    <Fragment>
      <PanelBody title="Box" initialOpen={true}>
        <Background
          label="Background Color"
          value={table.bgColor}
          defaults="#fff"
          onChange={(value) =>
            setAttributes({ table: { ...table, bgColor: value } })
          }
        />
        <PanelColorControl
          label="Border Color"
          value={table.boxBColor}
          colors={[
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
          ]}
          renderFunction={(value) =>
            setAttributes({ table: { ...table, boxBColor: value } })
          }
        />
        <RangeControl
          className="box-border-width-container"
          label="Border Width"
          value={table.boxBWidth}
          onChange={(value) =>
            setAttributes({ table: { ...table, boxBWidth: value } })
          }
          min={0}
          max={100}
          step={1}
        />
        <RangeControl
          className="box-border-width-container"
          label="Border Radius"
          value={table.boxBRadius}
          onChange={(value) =>
            setAttributes({ table: { ...table, boxBRadius: value } })
          }
          min={0}
          max={100}
          step={1}
        />
        <MultiShadowControl
          label="Box Shadow"
          value={table.shadow}
          onChange={(value) =>
            setAttributes({ table: { ...table, shadow: value } })
          }
          defaults={[
            {
              hOffset: '1px',
              vOffset: '1px',
              blur: '5px',
              spread: '1px',
              color: '#b3b3b3',
            },
          ]}
        />
        {'default' !== theme && (
          <div
            className="box-padding-device-container"
            style={{ marginTop: '15px' }}
          >
            <div className="box-padding-device">
              <BDevice
                device={table.paddingDevice}
                onChange={(val) =>
                  setAttributes({ table: { ...table, paddingDevice: val } })
                }
              />
            </div>
            {table.paddingDevice === 'desktop' ? (
              <BoxControl
                label="Padding"
                values={table.padding.desktop}
                resetValues={{
                  top: '0px',
                  left: '0px',
                  right: '0px',
                  bottom: '0px',
                }}
                units={units}
                onChange={(value) =>
                  setAttributes({
                    table: {
                      ...table,
                      padding: { ...table.padding, desktop: value },
                    },
                  })
                }
              />
            ) : table.paddingDevice === 'tablet' ? (
              <BoxControl
                label="Padding"
                values={table.padding.tablet}
                resetValues={{
                  top: '0px',
                  left: '0px',
                  right: '0px',
                  bottom: '0px',
                }}
                units={units}
                onChange={(value) =>
                  setAttributes({
                    table: {
                      ...table,
                      padding: { ...table.padding, tablet: value },
                    },
                  })
                }
              />
            ) : (
              <BoxControl
                label="Padding"
                values={table.padding.mobile}
                resetValues={{
                  top: '0px',
                  left: '0px',
                  right: '0px',
                  bottom: '0px',
                }}
                units={units}
                onChange={(value) =>
                  setAttributes({
                    table: {
                      ...table,
                      padding: { ...table.padding, mobile: value },
                    },
                  })
                }
              />
            )}
          </div>
        )}
      </PanelBody>
      {'default' === theme && (
        <>
          <PanelBody title="Header" initialOpen={false}>
            <PanelColorControl
              label="Background Color"
              value={header.bgColor}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({ header: { ...header, bgColor: value } })
              }
            />
            <PanelColorControl
              label="Text Color"
              value={header.txtColor}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({ header: { ...header, txtColor: value } })
              }
            />
            <PanelColorControl
              label="Icon Color"
              value={header.iconColor}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({ header: { ...header, iconColor: value } })
              }
            />
            <RangeControl
              label="Separator Width"
              value={header.separatorWidth}
              onChange={(value) =>
                setAttributes({ header: { ...header, separatorWidth: value } })
              }
              min={0}
              max={100}
              step={1}
            />
            <PanelColorControl
              label="Separator Color"
              value={header.separatorColor}
              defaults="#ccc"
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({ header: { ...header, separatorColor: value } })
              }
            />
          </PanelBody>
          <PanelBody title="List Item" initialOpen={false}>
            <div
              className="box-padding-device-container"
              style={{ marginTop: '15px' }}
            >
              <div className="box-padding-device">
                <BDevice
                  device={boxList.paddingDevice}
                  onChange={(val) =>
                    setAttributes({
                      boxList: { ...boxList, paddingDevice: val },
                    })
                  }
                />
              </div>
              {boxList.paddingDevice === 'desktop' ? (
                <BoxControl
                  label="Padding"
                  values={boxList.padding.desktop}
                  resetValues={{
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                  }}
                  onChange={(value) =>
                    setAttributes({
                      boxList: {
                        ...boxList,
                        padding: { ...boxList.padding, desktop: value },
                      },
                    })
                  }
                />
              ) : boxList.paddingDevice === 'tablet' ? (
                <BoxControl
                  label="Padding"
                  values={boxList.padding.tablet}
                  resetValues={{
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                  }}
                  onChange={(value) =>
                    setAttributes({
                      boxList: {
                        ...boxList,
                        padding: { ...boxList.padding, tablet: value },
                      },
                    })
                  }
                />
              ) : (
                <BoxControl
                  label="Padding"
                  values={boxList.padding.mobile}
                  resetValues={{
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                  }}
                  onChange={(value) =>
                    setAttributes({
                      boxList: {
                        ...boxList,
                        padding: { ...boxList.padding, mobile: value },
                      },
                    })
                  }
                />
              )}
            </div>
            <div
              className="box-padding-device-container"
              style={{ marginTop: '15px' }}
            >
              <div className="box-padding-device" style={{ left: '30%' }}>
                <BDevice
                  device={boxList.maxHeightDevice}
                  onChange={(val) =>
                    setAttributes({
                      boxList: { ...boxList, maxHeightDevice: val },
                    })
                  }
                />
              </div>
              {boxList.maxHeightDevice === 'desktop' ? (
                <RangeControl
                  label="Max Height"
                  value={boxList.maxHeight.desktop}
                  onChange={(value) =>
                    setAttributes({
                      boxList: {
                        ...boxList,
                        maxHeight: { ...boxList.maxHeight, desktop: value },
                      },
                    })
                  }
                  min={0}
                  max={1000}
                  step={1}
                />
              ) : boxList.maxHeightDevice === 'tablet' ? (
                <RangeControl
                  label="Max Height"
                  value={boxList.maxHeight.tablet}
                  onChange={(value) =>
                    setAttributes({
                      boxList: {
                        ...boxList,
                        maxHeight: { ...boxList.maxHeight, tablet: value },
                      },
                    })
                  }
                  min={0}
                  max={1000}
                  step={1}
                />
              ) : (
                <RangeControl
                  label="Max Height"
                  value={boxList.maxHeight.mobile}
                  onChange={(value) =>
                    setAttributes({
                      boxList: {
                        ...boxList,
                        maxHeight: { ...boxList.maxHeight, mobile: value },
                      },
                    })
                  }
                  min={0}
                  max={1000}
                  step={1}
                />
              )}
            </div>
            <IncludeExClude
              options={['normal', 'hover']}
              value={boxList.txtStyle}
              renderFunction={(val) =>
                setAttributes({ boxList: { ...boxList, txtStyle: val } })
              }
            />
            {boxList.txtStyle === 'normal' ? (
              <>
                <PanelColorControl
                  label="Text Color"
                  value={boxList.nTxtColor}
                  colors={[
                    { name: 'red', color: '#f00' },
                    { name: 'white', color: '#fff' },
                    { name: 'blue', color: '#00f' },
                  ]}
                  renderFunction={(value) =>
                    setAttributes({ boxList: { ...boxList, nTxtColor: value } })
                  }
                />
                <div style={{ marginTop: '10px' }}>
                  <ToggleControl
                    label="Underline"
                    checked={boxList.nTxtDecoration}
                    onChange={(value) =>
                      setAttributes({
                        boxList: { ...boxList, nTxtDecoration: value },
                      })
                    }
                  />
                </div>
              </>
            ) : (
              <>
                <PanelColorControl
                  label="Text Color"
                  value={boxList.hTxtColor}
                  colors={[
                    { name: 'red', color: '#f00' },
                    { name: 'white', color: '#fff' },
                    { name: 'blue', color: '#00f' },
                  ]}
                  renderFunction={(value) =>
                    setAttributes({ boxList: { ...boxList, hTxtColor: value } })
                  }
                />
                <div style={{ marginTop: '10px' }}>
                  <ToggleControl
                    label="Underline"
                    checked={boxList.hTxtDecoration}
                    onChange={(value) =>
                      setAttributes({
                        boxList: { ...boxList, hTxtDecoration: value },
                      })
                    }
                  />
                </div>
              </>
            )}
            <div
              style={{
                borderTop: '1px solid #ccc',
                margin: '15px 0',
                paddingTop: '10px',
              }}
            >
              <strong>Marker</strong>
            </div>
            <PanelColorControl
              label="Color"
              value={markup.color}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({ markup: { ...markup, color: value } })
              }
            />
            <div style={{ marginTop: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center',
                  }}
                >
                  <span>Size</span>
                  <BDevice
                    device={markup.markupDevice}
                    onChange={(val) =>
                      setAttributes({
                        markup: { ...markup, markupDevice: val },
                      })
                    }
                  />
                </div>
                {markup.markupDevice === 'desktop' ? (
                  <PanelUnit
                    value={markup.markupUnit.desktop}
                    units={['px', '%']}
                    renderFunction={(value) =>
                      setAttributes({
                        markup: {
                          ...markup,
                          markupUnit: { ...markup.markupUnit, desktop: value },
                        },
                      })
                    }
                  />
                ) : markup.markupDevice == 'tablet' ? (
                  <PanelUnit
                    value={markup.markupUnit.tablet}
                    units={['px', '%']}
                    renderFunction={(value) =>
                      setAttributes({
                        markup: {
                          ...markup,
                          markupUnit: { ...markup.markupUnit, tablet: value },
                        },
                      })
                    }
                  />
                ) : (
                  <PanelUnit
                    value={markup.markupUnit.mobile}
                    units={['px', '%']}
                    renderFunction={(value) =>
                      setAttributes({
                        markup: {
                          ...markup,
                          markupUnit: { ...markup.markupUnit, mobile: value },
                        },
                      })
                    }
                  />
                )}
              </div>
              {markup.markupDevice === 'desktop' ? (
                <RangeControl
                  value={markup.markupSize.desktop}
                  min={0}
                  step={1}
                  max={markup.markupUnit.desktop === 'px' ? 50 : 100}
                  onChange={(value) =>
                    setAttributes({
                      markup: {
                        ...markup,
                        markupSize: { ...markup.markupSize, desktop: value },
                      },
                    })
                  }
                />
              ) : markup.markupDevice == 'tablet' ? (
                <RangeControl
                  value={markup.markupSize.tablet}
                  min={0}
                  step={1}
                  max={markup.markupUnit.tablet === 'px' ? 50 : 100}
                  onChange={(value) =>
                    setAttributes({
                      markup: {
                        ...markup,
                        markupSize: { ...markup.markupSize, tablet: value },
                      },
                    })
                  }
                />
              ) : (
                <RangeControl
                  value={markup.markupSize.mobile}
                  min={0}
                  step={1}
                  max={markup.markupUnit.mobile === 'px' ? 50 : 100}
                  onChange={(value) =>
                    setAttributes({
                      markup: {
                        ...markup,
                        markupSize: { ...markup.markupSize, mobile: value },
                      },
                    })
                  }
                />
              )}
            </div>
          </PanelBody>
        </>
      )}

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
