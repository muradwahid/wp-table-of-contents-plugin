import {
  __experimentalBoxControl as BoxControl,
  PanelBody,
  RangeControl,
} from '@wordpress/components';
import { Fragment } from 'react';
import { BDevice, ColorsControl, ShadowControl } from '../../../../Components';
import IncludeExClude from '../Panel/IncludeExClude/IncludeExClude';
import PanelColorControl from '../Panel/PanelColorControl/PanelColorControl';
import PanelUnit from '../Panel/PanelUnit/PanelUnit';

const SlideSettings = ({ attributes, setAttributes }) => {
  const {
    slideTitleColor,
    slideBarColor,
    slideSpaceHeadingDevice,
    slideSpaceHeadingTopDesktop,
    slideSpaceHeadingTopMobile,
    slideSpaceHeadingTopTablet,
    slideSpaceHeadingTopUnitDesktop,
    slideSpaceHeadingTopUnitTablet,
    slideSpaceHeadingTopUnitMobile,
    slideSpaceHeadingBottomDevice,
    slideSpaceHeadingBottomDesktop,
    slideSpaceHeadingBottomTablet,
    slideSpaceHeadingBottomMobile,
    slideSpaceHeadingBottomUnitDesktop,
    slideSpaceHeadingBottomUnitTablet,
    slideSpaceHeadingBottomUnitMobile,
    slideListSpaceBottomDevice,
    slideListSpaceBottomDesktop,
    slideListSpaceBottomTablet,
    slideListSpaceBottomMobile,
    slideListSpaceBottomUnitDesktop,
    slideListSpaceBottomUnitTablet,
    slideListSpaceBottomUnitMobile,
    slideChangeTab,
    slideNormalTxtColor,
    slideNormalBarColor,
    slideHoverBarColor,
    slideHoverTxtColor,
    slideListFontSizeDesktop,
    slideListFontSizeTablet,
    slideListFontSizeMobile,
    slideListFontSizeUnitDesktop,
    slideListFontSizeUnitTablet,
    slideListFontSizeUnitMobile,
    slideListFontDevice,
    slideBoxBgColor,
    slideBoxBrColor,
    slideBoxBrWidth,
    slideBoxBrRadius,
    slideBoxShadow,
    slideBoxPaddingDevice,
    slideBoxPaddingDesktop,
    slideBoxPaddingTablet,
    slideBoxPaddingMobile,
  } = attributes;
  return (
    <Fragment>
      <PanelBody title="Box" initialOpen={true}>
        <ColorsControl
          label="Background Color"
          value={slideBoxBgColor}
          onChange={(value) => setAttributes({ slideBoxBgColor: value })}
        />
        <PanelColorControl
          label="Border Color"
          value={slideBoxBrColor}
          colors={[
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
          ]}
          renderFunction={(value) => setAttributes({ slideBoxBrColor: value })}
        />
        <RangeControl
          className="box-border-width-container"
          label="Border Width"
          value={slideBoxBrWidth}
          onChange={(value) => setAttributes({ slideBoxBrWidth: value })}
          min={0}
          max={100}
          step={1}
        />
        <RangeControl
          className="box-border-width-container"
          label="Border Radius"
          value={slideBoxBrRadius}
          onChange={(value) => setAttributes({ slideBoxBrRadius: value })}
          min={0}
          max={100}
          step={1}
        />
        <ShadowControl
          label="Box Shadow"
          value={slideBoxShadow}
          onChange={(value) => setAttributes({ slideBoxShadow: value })}
          defaults={{ shadow: 'rgba(162, 178, 178, 1) 0px 0px 25px 5px inset' }}
        />
        <div
          className="box-padding-device-container"
          style={{ marginTop: '15px' }}
        >
          <div className="box-padding-device">
            <BDevice
              device={slideBoxPaddingDevice}
              onChange={(val) => setAttributes({ slideBoxPaddingDevice: val })}
            />
          </div>
          {slideBoxPaddingDevice === 'desktop' ? (
            <BoxControl
              label="Padding"
              values={slideBoxPaddingDesktop}
              resetValues={{
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
              }}
              units={['px', '%']}
              onChange={(value) =>
                setAttributes({ slideBoxPaddingDesktop: value })
              }
            />
          ) : slideBoxPaddingDevice === 'tablet' ? (
            <BoxControl
              label="Padding"
              values={slideBoxPaddingTablet}
              resetValues={{
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
              }}
              units={['px', '%']}
              onChange={(value) =>
                setAttributes({ slideBoxPaddingTablet: value })
              }
            />
          ) : (
            <BoxControl
              label="Padding"
              values={slideBoxPaddingMobile}
              resetValues={{
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
              }}
              units={['px', '%']}
              onChange={(value) =>
                setAttributes({ slideBoxPaddingMobile: value })
              }
            />
          )}
        </div>
      </PanelBody>

      <PanelBody title="Slide">
        <strong style={{ marginBottom: '15px', color: 'gray' }}>Heading</strong>
        <PanelColorControl
          label="Title Color"
          value={slideTitleColor}
          colors={[
            { name: 'Orange', color: '#F57C00' },
            { name: 'Purple', color: '#9C27B0' },
            { name: 'Gray', color: '#9E9E9E' },
            { name: 'Cyan', color: '#00BCD4' },
            { name: 'Pink', color: '#E91E63' },
            { name: 'Lime', color: '#CDDC39' },
            { name: 'Brown', color: '#795548' },
          ]}
          renderFunction={(value) => setAttributes({ slideTitleColor: value })}
        />
        <PanelColorControl
          label="Bar Color"
          value={slideBarColor}
          colors={[
            { name: 'Purple', color: '#9C27B0' },
            { name: 'Gray', color: '#9E9E9E' },
            { name: 'Pink', color: '#E91E63' },
            { name: 'Orange', color: '#F57C00' },
            { name: 'Lime', color: '#CDDC39' },
            { name: 'Brown', color: '#795548' },
          ]}
          renderFunction={(value) => setAttributes({ slideBarColor: value })}
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
              <span>Space Top</span>
              <BDevice
                device={slideSpaceHeadingDevice}
                onChange={(val) =>
                  setAttributes({ slideSpaceHeadingDevice: val })
                }
              />
            </div>
            {slideSpaceHeadingDevice === 'desktop' ? (
              <PanelUnit
                value={slideSpaceHeadingTopUnitDesktop}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({ slideSpaceHeadingTopUnitDesktop: value })
                }
              />
            ) : slideSpaceHeadingDevice === 'tablet' ? (
              <PanelUnit
                value={slideSpaceHeadingTopUnitTablet}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({ slideSpaceHeadingTopUnitTablet: value })
                }
              />
            ) : (
              <PanelUnit
                value={slideSpaceHeadingTopUnitMobile}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({ slideSpaceHeadingTopUnitMobile: value })
                }
              />
            )}
          </div>
          {slideSpaceHeadingDevice === 'desktop' ? (
            <RangeControl
              value={slideSpaceHeadingTopDesktop}
              min={0}
              max={slideSpaceHeadingTopUnitDesktop === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({ slideSpaceHeadingTopDesktop: value })
              }
            />
          ) : slideSpaceHeadingDevice === 'tablet' ? (
            <RangeControl
              value={slideSpaceHeadingTopTablet}
              min={0}
              max={slideSpaceHeadingTopUnitTablet === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({ slideSpaceHeadingTopTablet: value })
              }
            />
          ) : (
            <RangeControl
              value={slideSpaceHeadingTopMobile}
              min={0}
              max={slideSpaceHeadingTopUnitMobile === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({ slideSpaceHeadingTopMobile: value })
              }
            />
          )}
        </div>
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
              <span>Space Bottom</span>
              <BDevice
                device={slideSpaceHeadingBottomDevice}
                onChange={(val) =>
                  setAttributes({ slideSpaceHeadingBottomDevice: val })
                }
              />
            </div>
            {slideSpaceHeadingBottomDevice === 'desktop' ? (
              <PanelUnit
                value={slideSpaceHeadingBottomUnitDesktop}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({ slideSpaceHeadingBottomUnitDesktop: value })
                }
              />
            ) : slideSpaceHeadingBottomDevice === 'tablet' ? (
              <PanelUnit
                value={slideSpaceHeadingBottomUnitTablet}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({ slideSpaceHeadingBottomUnitTablet: value })
                }
              />
            ) : (
              <PanelUnit
                value={slideSpaceHeadingBottomUnitMobile}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({ slideSpaceHeadingBottomUnitMobile: value })
                }
              />
            )}
          </div>
          {slideSpaceHeadingBottomDevice === 'desktop' ? (
            <RangeControl
              value={slideSpaceHeadingBottomDesktop}
              min={0}
              max={slideSpaceHeadingBottomUnitDesktop === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({ slideSpaceHeadingBottomDesktop: value })
              }
            />
          ) : slideSpaceHeadingBottomDevice === 'tablet' ? (
            <RangeControl
              value={slideSpaceHeadingBottomTablet}
              min={0}
              max={slideSpaceHeadingBottomUnitTablet === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({ slideSpaceHeadingBottomTablet: value })
              }
            />
          ) : (
            <RangeControl
              value={slideSpaceHeadingBottomMobile}
              min={0}
              max={slideSpaceHeadingBottomUnitMobile === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({ slideSpaceHeadingBottomMobile: value })
              }
            />
          )}
        </div>
        <div
          style={{
            marginTop: '10px',
            borderTop: '1px solid #ccc',
            paddingTop: '10px',
          }}
        >
          <strong style={{ marginBottom: '15px', color: 'gray' }}>
            List Item
          </strong>
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
              <span>List Space Bottom</span>
              <BDevice
                device={slideListSpaceBottomDevice}
                onChange={(val) =>
                  setAttributes({ slideListSpaceBottomDevice: val })
                }
              />
            </div>
            {slideListSpaceBottomDevice === 'desktop' ? (
              <PanelUnit
                value={slideListSpaceBottomUnitDesktop}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({ slideListSpaceBottomUnitDesktop: value })
                }
              />
            ) : slideListSpaceBottomDevice === 'tablet' ? (
              <PanelUnit
                value={slideListSpaceBottomUnitTablet}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({ slideListSpaceBottomUnitTablet: value })
                }
              />
            ) : (
              <PanelUnit
                value={slideListSpaceBottomUnitMobile}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({ slideListSpaceBottomUnitMobile: value })
                }
              />
            )}
          </div>
          {slideListSpaceBottomDevice === 'desktop' ? (
            <RangeControl
              value={slideListSpaceBottomDesktop}
              min={0}
              max={slideListSpaceBottomUnitDesktop === 'px' ? 200 : 100}
              onChange={(value) =>
                setAttributes({ slideListSpaceBottomDesktop: value })
              }
            />
          ) : slideListSpaceBottomDevice === 'tablet' ? (
            <RangeControl
              value={slideListSpaceBottomTablet}
              min={0}
              max={slideListSpaceBottomUnitTablet === 'px' ? 200 : 100}
              onChange={(value) =>
                setAttributes({ slideListSpaceBottomTablet: value })
              }
            />
          ) : (
            <RangeControl
              value={slideListSpaceBottomMobile}
              min={0}
              max={slideListSpaceBottomUnitMobile === 'px' ? 200 : 100}
              onChange={(value) =>
                setAttributes({ slideListSpaceBottomMobile: value })
              }
            />
          )}
        </div>
        <div
          style={{
            marginTop: '10px',
          }}
        >
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
              <span>List Font Size</span>
              <BDevice
                device={slideListFontDevice}
                onChange={(val) => setAttributes({ slideListFontDevice: val })}
              />
            </div>
            {slideListFontDevice === 'desktop' ? (
              <PanelUnit
                value={slideListFontSizeUnitDesktop}
                units={['px', 'em', 'rem']}
                renderFunction={(value) =>
                  setAttributes({ slideListFontSizeUnitDesktop: value })
                }
              />
            ) : slideListFontDevice === 'tablet' ? (
              <PanelUnit
                value={slideListFontSizeUnitTablet}
                units={['px', 'em', 'rem']}
                renderFunction={(value) =>
                  setAttributes({ slideListFontSizeUnitTablet: value })
                }
              />
            ) : (
              <PanelUnit
                value={slideListFontSizeUnitMobile}
                units={['px', 'em', 'rem']}
                renderFunction={(value) =>
                  setAttributes({ slideListFontSizeUnitMobile: value })
                }
              />
            )}
          </div>
          {slideListFontDevice === 'desktop' ? (
            <RangeControl
              value={slideListFontSizeDesktop}
              min={0}
              max={60}
              onChange={(value) =>
                setAttributes({ slideListFontSizeDesktop: value })
              }
            />
          ) : slideListFontDevice === 'tablet' ? (
            <RangeControl
              value={slideListFontSizeTablet}
              min={0}
              max={60}
              onChange={(value) =>
                setAttributes({ slideListFontSizeTablet: value })
              }
            />
          ) : (
            <RangeControl
              value={slideListFontSizeMobile}
              min={0}
              max={60}
              onChange={(value) =>
                setAttributes({ slideListFontSizeMobile: value })
              }
            />
          )}
        </div>

        <div style={{ marginTop: '10px' }}>
          <IncludeExClude
            options={['normal', 'hover']}
            value={slideChangeTab}
            renderFunction={(value) => setAttributes({ slideChangeTab: value })}
          />
        </div>
        {slideChangeTab === 'normal' ? (
          <Fragment>
            <PanelColorControl
              label="Text Color"
              value={slideNormalTxtColor}
              colors={[
                { name: 'Purple', color: '#9C27B0' },
                { name: 'Gray', color: '#9E9E9E' },
                { name: 'Pink', color: '#E91E63' },
                { name: 'Orange', color: '#F57C00' },
                { name: 'Lime', color: '#CDDC39' },
                { name: 'Brown', color: '#795548' },
              ]}
              renderFunction={(value) =>
                setAttributes({ slideNormalTxtColor: value })
              }
            />
            <PanelColorControl
              label="Bar Color"
              value={slideNormalBarColor}
              defaults="#b0aeb1"
              colors={[
                { name: 'Purple', color: '#9C27B0' },
                { name: 'Gray', color: '#9E9E9E' },
                { name: 'Pink', color: '#E91E63' },
                { name: 'Orange', color: '#F57C00' },
                { name: 'Lime', color: '#CDDC39' },
                { name: 'Brown', color: '#795548' },
              ]}
              renderFunction={(value) =>
                setAttributes({ slideNormalBarColor: value })
              }
            />
          </Fragment>
        ) : (
          <Fragment>
            <PanelColorControl
              label="Text Color"
              value={slideHoverTxtColor}
              colors={[
                { name: 'Purple', color: '#9C27B0' },
                { name: 'Gray', color: '#9E9E9E' },
                { name: 'Pink', color: '#E91E63' },
                { name: 'Orange', color: '#F57C00' },
                { name: 'Lime', color: '#CDDC39' },
                { name: 'Brown', color: '#795548' },
              ]}
              renderFunction={(value) =>
                setAttributes({ slideHoverTxtColor: value })
              }
            />
            <PanelColorControl
              label="Bar Color"
              value={slideHoverBarColor}
              defaults="#b0aeb1"
              colors={[
                { name: 'Purple', color: '#9C27B0' },
                { name: 'Gray', color: '#9E9E9E' },
                { name: 'Pink', color: '#E91E63' },
                { name: 'Orange', color: '#F57C00' },
                { name: 'Lime', color: '#CDDC39' },
                { name: 'Brown', color: '#795548' },
              ]}
              renderFunction={(value) =>
                setAttributes({ slideHoverBarColor: value })
              }
            />
          </Fragment>
        )}
      </PanelBody>
    </Fragment>
  );
};

export default SlideSettings;
