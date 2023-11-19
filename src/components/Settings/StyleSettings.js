import { PanelBody, RangeControl,__experimentalBoxControl as BoxControl, ToggleControl } from '@wordpress/components';
import {Fragment} from 'react';
import {BDevice, ColorsControl, ShadowControl} from '../../../../Components'
import PanelColorControl from '../Panel/PanelColorControl/PanelColorControl';
import IncludeExClude from '../Panel/IncludeExClude/IncludeExClude';
import PanelUnit from '../Panel/PanelUnit/PanelUnit';
const StyleSettings = ({ attributes, setAttributes }) => {
  const {
    backgroundColor,
    boxBWidth,
    boxBRadius,
    boxBColor,
    boxShadow,
    boxPaddingDesktop,
    boxPaddingTablet,
    boxPaddingMobile,
    boxPaddingDevice,
    headerBgColor,
    headerTxtColor,
    headerIconColor,
    separatorColor,
    separatorWidth,
    listPaddingDevice,
    listPaddingDesktop,
    listPaddingTablet,
    listPaddingMobile,
    listMaxHeightDesktop,
    listMaxHeightTablet,
    listMaxHeightMobile,
    listMaxHeightDevice,
    listTextStyle,
    normalTxtColor,
    normalTxtDecoration,
    hoverTxtDecoration,
    hoverTxtColor,
    markerColor,
    markerFontDevice,
    markerFontSizeDesktop,
    markerFontSizeTablet,
    markerFontSizeMobile,
    markerFontUnitDesktop,
    markerFontUnitTablet,
    markerFontUnitMobile,
  } = attributes;
  return (
    <Fragment>
      <PanelBody title="Box" initialOpen={false}>
        <ColorsControl
          label="Background Color"
          value={backgroundColor}
          onChange={(value) => setAttributes({ backgroundColor: value })}
        />
        <PanelColorControl
          label="Border Color"
          value={boxBColor}
          colors={[
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
          ]}
          renderFunction={(value) => setAttributes({ boxBColor: value })}
        />
        <RangeControl
          className="box-border-width-container"
          label="Border Width"
          value={boxBWidth}
          onChange={(value) => setAttributes({ boxBWidth: value })}
          min={0}
          max={100}
          step={1}
        />
        <RangeControl
          className="box-border-width-container"
          label="Border Radius"
          value={boxBRadius}
          onChange={(value) => setAttributes({ boxBRadius: value })}
          min={0}
          max={100}
          step={1}
        />
        <ShadowControl
          label="Box Shadow"
          value={boxShadow}
          onChange={(value) => setAttributes({ boxShadow: value })}
          defaults={{ shadow: '1px 1px 5px 1px #b3b3b3' }}
        />
        <div
          className="box-padding-device-container"
          style={{ marginTop: '15px' }}
        >
          <div className="box-padding-device">
            <BDevice
              device={boxPaddingDevice}
              onChange={(val) => setAttributes({ boxPaddingDevice: val })}
            />
          </div>
          {boxPaddingDevice === 'desktop' ? (
            <BoxControl
              label="Padding"
              values={boxPaddingDesktop}
              resetValues={{
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
              }}
              units={['px', '%']}
              onChange={(value) => setAttributes({ boxPaddingDesktop: value })}
            />
          ) : boxPaddingDevice === 'tablet' ? (
            <BoxControl
              label="Padding"
              values={boxPaddingTablet}
              resetValues={{
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
              }}
              units={['px', '%']}
              onChange={(value) => setAttributes({ boxPaddingTablet: value })}
            />
          ) : (
            <BoxControl
              label="Padding"
              values={boxPaddingTablet}
              resetValues={{
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
              }}
              units={['px', '%']}
              onChange={(value) => setAttributes({ boxPaddingMobile: value })}
            />
          )}
        </div>
      </PanelBody>
      <PanelBody title="Header" initialOpen={false}>
        <PanelColorControl
          label="Background Color"
          value={headerBgColor}
          colors={[
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
          ]}
          renderFunction={(value) => setAttributes({ headerBgColor: value })}
        />
        <PanelColorControl
          label="Text Color"
          value={headerTxtColor}
          colors={[
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
          ]}
          renderFunction={(value) => setAttributes({ headerTxtColor: value })}
        />
        <PanelColorControl
          label="Icon Color"
          value={headerIconColor}
          colors={[
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
          ]}
          renderFunction={(value) => setAttributes({ headerIconColor: value })}
        />
        <RangeControl
          label="Separator Width"
          value={separatorWidth}
          onChange={(value) => setAttributes({ separatorWidth: value })}
          min={0}
          max={100}
          step={1}
        />
        <PanelColorControl
          label="Separator Color"
          value={separatorColor}
          defaults="#ccc"
          colors={[
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
          ]}
          renderFunction={(value) => setAttributes({ separatorColor: value })}
        />
      </PanelBody>
      <PanelBody title="List Item" initialOpen={true}>
        <div
          className="box-padding-device-container"
          style={{ marginTop: '15px' }}
        >
          <div className="box-padding-device">
            <BDevice
              device={listPaddingDevice}
              onChange={(val) => setAttributes({ listPaddingDevice: val })}
            />
          </div>
          {listPaddingDevice === 'desktop' ? (
            <BoxControl
              label="Padding"
              values={listPaddingDesktop}
              resetValues={{
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
              }}
              onChange={(value) => setAttributes({ listPaddingDesktop: value })}
            />
          ) : listPaddingDevice === 'tablet' ? (
            <BoxControl
              label="Padding"
              values={listPaddingTablet}
              resetValues={{
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
              }}
              onChange={(value) => setAttributes({ listPaddingTablet: value })}
            />
          ) : (
            <BoxControl
              label="Padding"
              values={listPaddingMobile}
              resetValues={{
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
              }}
              onChange={(value) => setAttributes({ listPaddingMobile: value })}
            />
          )}
        </div>
        <div
          className="box-padding-device-container"
          style={{ marginTop: '15px' }}
        >
          <div className="box-padding-device" style={{ left: '30%' }}>
            <BDevice
              device={listMaxHeightDevice}
              onChange={(val) => setAttributes({ listMaxHeightDevice: val })}
            />
          </div>
          {listMaxHeightDevice === 'desktop' ? (
            <RangeControl
              label="Max Height"
              value={listMaxHeightDesktop}
              onChange={(value) =>
                setAttributes({ listMaxHeightDesktop: value })
              }
              min={0}
              max={1000}
              step={1}
            />
          ) : listMaxHeightDevice === 'tablet' ? (
            <RangeControl
              label="Max Height"
              value={listMaxHeightTablet}
              onChange={(value) =>
                setAttributes({ listMaxHeightTablet: value })
              }
              min={0}
              max={1000}
              step={1}
            />
          ) : (
            <RangeControl
              label="Max Height"
              value={listMaxHeightMobile}
              onChange={(value) =>
                setAttributes({ listMaxHeightMobile: value })
              }
              min={0}
              max={1000}
              step={1}
            />
          )}
        </div>
        <IncludeExClude
          options={['normal', 'hover']}
          value={listTextStyle}
          renderFunction={(val) => setAttributes({ listTextStyle: val })}
        />
        {listTextStyle === 'normal' ? (
          <>
            <PanelColorControl
              label="Text Color"
              value={normalTxtColor}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({ normalTxtColor: value })
              }
            />
            <div style={{ marginTop: '10px' }}>
              <ToggleControl
                label="Underline"
                checked={normalTxtDecoration}
                onChange={(value) =>
                  setAttributes({ normalTxtDecoration: value })
                }
              />
            </div>
          </>
        ) : (
          <>
            <PanelColorControl
              label="Text Color"
              value={hoverTxtColor}
              colors={[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ]}
              renderFunction={(value) =>
                setAttributes({ hoverTxtColor: value })
              }
            />
            <div style={{ marginTop: '10px' }}>
              <ToggleControl
                label="Underline"
                checked={hoverTxtDecoration}
                onChange={(value) =>
                  setAttributes({ hoverTxtDecoration: value })
                }
              />
            </div>
          </>
        )}
        <div style={{ borderTop: '1px solid #ccc', margin: '15px 0', paddingTop:"10px" }}>
          <strong>Marker</strong>
        </div>
        <PanelColorControl
          label="Color"
          value={markerColor}
          colors={[
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
          ]}
          renderFunction={(value) => setAttributes({ markerColor: value })}
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
              <span>Left</span>
              <BDevice
                device={markerFontDevice}
                onChange={(val) => setAttributes({ markerFontDevice: val })}
              />
            </div>
            {markerFontDevice === 'desktop' ? (
              <PanelUnit
                value={markerFontUnitDesktop}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({ markerFontUnitDesktop: value })
                }
              />
            ) : markerFontDevice == 'tablet' ? (
              <PanelUnit
                value={markerFontUnitTablet}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({ markerFontUnitTablet: value })
                }
              />
            ) : (
              <PanelUnit
                value={markerFontUnitMobile}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({ markerFontUnitMobile: value })
                }
              />
            )}
          </div>
          {markerFontDevice === 'desktop' ? (
            <RangeControl
              value={markerFontSizeDesktop}
              min={0}
              max={markerFontSizeDesktop === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({ markerFontSizeDesktop: value })
              }
            />
          ) : markerFontDevice == 'tablet' ? (
            <RangeControl
              value={markerFontSizeTablet}
              min={0}
              max={markerFontSizeTablet === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({ markerFontSizeTablet: value })
              }
            />
          ) : (
            <RangeControl
              value={markerFontSizeMobile}
              min={0}
              max={markerFontSizeMobile === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({ markerFontSizeMobile: value })
              }
            />
          )}
        </div>
      </PanelBody>
    </Fragment>
  );
};

export default StyleSettings;