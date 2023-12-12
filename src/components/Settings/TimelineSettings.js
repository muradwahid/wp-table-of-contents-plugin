import { PanelBody } from "@wordpress/components";
import {Fragment} from "react"
import PanelColorControl from "../Panel/PanelColorControl/PanelColorControl";
import { BDevice, MultiShadowControl } from "../../../../Components";
import PanelUnit from "../Panel/PanelUnit/PanelUnit";
import { RangeControl } from "@wordpress/components";
import IncludeExClude from "../Panel/IncludeExClude/IncludeExClude";
const TimelineSettings = ({ attributes,setAttributes }) => {
  const {slideTitle,slideList,boxList} = attributes;
  return (
    <Fragment>
      <PanelBody title="Timeline">
        <strong style={{ marginBottom: '15px', color: 'gray' }}>Heading</strong>
        <PanelColorControl
          label="Title Color"
          value={slideTitle.titleColor}
          colors={[
            { name: 'Orange', color: '#F57C00' },
            { name: 'Purple', color: '#9C27B0' },
            { name: 'Gray', color: '#9E9E9E' },
            { name: 'Cyan', color: '#00BCD4' },
            { name: 'Pink', color: '#E91E63' },
            { name: 'Lime', color: '#CDDC39' },
            { name: 'Brown', color: '#795548' },
          ]}
          renderFunction={(value) =>
            setAttributes({ slideTitle: { ...slideTitle, titleColor: value } })
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
              <span>Space Top</span>
              <BDevice
                device={slideTitle.spaceDevice}
                onChange={(val) =>
                  setAttributes({
                    slideTitle: { ...slideTitle, spaceDevice: val },
                  })
                }
              />
            </div>
            {slideTitle.spaceDevice === 'desktop' ? (
              <PanelUnit
                value={slideTitle.spaceUnit.desktop}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({
                    slideTitle: {
                      ...slideTitle,
                      spaceUnit: { ...slideTitle.spaceUnit, desktop: value },
                    },
                  })
                }
              />
            ) : slideTitle.spaceDevice === 'tablet' ? (
              <PanelUnit
                value={slideTitle.spaceUnit.tablet}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({
                    slideTitle: {
                      ...slideTitle,
                      spaceUnit: { ...slideTitle.spaceUnit, tablet: value },
                    },
                  })
                }
              />
            ) : (
              <PanelUnit
                value={slideTitle.spaceUnit.mobile}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({
                    slideTitle: {
                      ...slideTitle,
                      spaceUnit: { ...slideTitle.spaceUnit, mobile: value },
                    },
                  })
                }
              />
            )}
          </div>
          {slideTitle.spaceDevice === 'desktop' ? (
            <RangeControl
              value={slideTitle.space.desktop}
              min={0}
              max={slideTitle.spaceUnit.desktop === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({
                  slideTitle: {
                    ...slideTitle,
                    space: { ...slideTitle.space, desktop: value },
                  },
                })
              }
            />
          ) : slideTitle.spaceDevice === 'tablet' ? (
            <RangeControl
              value={slideTitle.space.tablet}
              min={0}
              max={slideTitle.spaceUnit.tablet === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({
                  slideTitle: {
                    ...slideTitle,
                    space: { ...slideTitle.space, tablet: value },
                  },
                })
              }
            />
          ) : (
            <RangeControl
              value={slideTitle.space.mobile}
              min={0}
              max={slideTitle.spaceUnit.mobile === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({
                  slideTitle: {
                    ...slideTitle,
                    space: { ...slideTitle.space, mobile: value },
                  },
                })
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
                device={slideTitle.spaceBottomDevice}
                onChange={(val) =>
                  setAttributes({
                    slideTitle: { ...slideTitle, spaceBottomDevice: val },
                  })
                }
              />
            </div>
            {slideTitle.spaceBottomDevice === 'desktop' ? (
              <PanelUnit
                value={slideTitle.spaceBottomUnit.desktop}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({
                    slideTitle: {
                      ...slideTitle,
                      spaceBottomUnit: {
                        ...slideTitle.spaceBottomUnit,
                        desktop: value,
                      },
                    },
                  })
                }
              />
            ) : slideTitle.spaceBottomDevice === 'tablet' ? (
              <PanelUnit
                value={slideTitle.spaceBottomUnit.tablet}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({
                    slideTitle: {
                      ...slideTitle,
                      spaceBottomUnit: {
                        ...slideTitle.spaceBottomUnit,
                        tablet: value,
                      },
                    },
                  })
                }
              />
            ) : (
              <PanelUnit
                value={slideTitle.spaceBottomUnit.mobile}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({
                    slideTitle: {
                      ...slideTitle,
                      spaceBottomUnit: {
                        ...slideTitle.spaceBottomUnit,
                        mobile: value,
                      },
                    },
                  })
                }
              />
            )}
          </div>
          {slideTitle.spaceBottomDevice === 'desktop' ? (
            <RangeControl
              value={slideTitle.spaceBottom.desktop}
              min={0}
              max={slideTitle.spaceBottomUnit.desktop === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({
                  slideTitle: {
                    ...slideTitle,
                    spaceBottom: { ...slideTitle.spaceBottom, desktop: value },
                  },
                })
              }
            />
          ) : slideTitle.spaceBottomDevice === 'tablet' ? (
            <RangeControl
              value={slideTitle.spaceBottom.tablet}
              min={0}
              max={slideTitle.spaceBottomUnit.tablet === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({
                  slideTitle: {
                    ...slideTitle,
                    spaceBottom: { ...slideTitle.spaceBottom, tablet: value },
                  },
                })
              }
            />
          ) : (
            <RangeControl
              value={slideTitle.spaceBottom.mobile}
              min={0}
              max={slideTitle.spaceBottomUnit.mobile === 'px' ? 1000 : 100}
              onChange={(value) =>
                setAttributes({
                  slideTitle: {
                    ...slideTitle,
                    spaceBottom: { ...slideTitle.spaceBottom, mobile: value },
                  },
                })
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
                device={slideList.spaceDevice}
                onChange={(val) =>
                  setAttributes({
                    slideList: { ...slideList, spaceDevice: val },
                  })
                }
              />
            </div>
            {slideList.spaceDevice === 'desktop' ? (
              <PanelUnit
                value={slideList.spaceUnit.desktop}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({
                    slideList: {
                      ...slideList,
                      spaceUnit: { ...slideList.spaceUnit, desktop: value },
                    },
                  })
                }
              />
            ) : slideList.spaceDevice === 'tablet' ? (
              <PanelUnit
                value={slideList.spaceUnit.tablet}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({
                    slideList: {
                      ...slideList,
                      spaceUnit: { ...slideList.spaceUnit, tablet: value },
                    },
                  })
                }
              />
            ) : (
              <PanelUnit
                value={slideList.spaceUnit.mobile}
                units={['px', '%']}
                renderFunction={(value) =>
                  setAttributes({
                    slideList: {
                      ...slideList,
                      spaceUnit: { ...slideList.spaceUnit, mobile: value },
                    },
                  })
                }
              />
            )}
          </div>
          {slideList.spaceDevice === 'desktop' ? (
            <RangeControl
              value={slideList.space.desktop}
              min={0}
              max={slideList.spaceUnit.desktop === 'px' ? 200 : 100}
              onChange={(value) =>
                setAttributes({
                  slideList: {
                    ...slideList,
                    space: { ...slideList.space, desktop: value },
                  },
                })
              }
            />
          ) : slideList.spaceDevice === 'tablet' ? (
            <RangeControl
              value={slideList.space.tablet}
              min={0}
              max={slideList.spaceUnit.tablet === 'px' ? 200 : 100}
              onChange={(value) =>
                setAttributes({
                  slideList: {
                    ...slideList,
                    space: { ...slideList.space, tablet: value },
                  },
                })
              }
            />
          ) : (
            <RangeControl
              value={slideList.space.mobile}
              min={0}
              max={slideList.spaceUnit.mobile === 'px' ? 200 : 100}
              onChange={(value) =>
                setAttributes({
                  slideList: {
                    ...slideList,
                    space: { ...slideList.space, mobile: value },
                  },
                })
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
                device={slideList.fontDevice}
                onChange={(val) =>
                  setAttributes({
                    slideList: { ...slideList, fontDevice: val },
                  })
                }
              />
            </div>
            {slideList.fontDevice === 'desktop' ? (
              <PanelUnit
                value={slideList.fontUnit.desktop}
                units={['px', 'em', 'rem']}
                renderFunction={(value) =>
                  setAttributes({
                    slideList: {
                      ...slideList,
                      fontUnit: { ...slideList.fontUnit, desktop: value },
                    },
                  })
                }
              />
            ) : slideList.fontDevice === 'tablet' ? (
              <PanelUnit
                value={slideList.fontUnit.tablet}
                units={['px', 'em', 'rem']}
                renderFunction={(value) =>
                  setAttributes({
                    slideList: {
                      ...slideList,
                      fontUnit: { ...slideList.fontUnit, tablet: value },
                    },
                  })
                }
              />
            ) : (
              <PanelUnit
                value={slideList.fontUnit.mobile}
                units={['px', 'em', 'rem']}
                renderFunction={(value) =>
                  setAttributes({
                    slideList: {
                      ...slideList,
                      fontUnit: { ...slideList.fontUnit, mobile: value },
                    },
                  })
                }
              />
            )}
          </div>
          {slideList.fontDevice === 'desktop' ? (
            <RangeControl
              value={slideList.fontSize.desktop}
              min={0}
              max={60}
              onChange={(value) =>
                setAttributes({
                  slideList: {
                    ...slideList,
                    fontSize: { ...slideList.fontSize, desktop: value },
                  },
                })
              }
            />
          ) : slideList.fontDevice === 'tablet' ? (
            <RangeControl
              value={slideList.fontSize.tablet}
              min={0}
              max={60}
              onChange={(value) =>
                setAttributes({
                  slideList: {
                    ...slideList,
                    fontSize: { ...slideList.fontSize, tablet: value },
                  },
                })
              }
            />
          ) : (
            <RangeControl
              value={slideList.fontSize.mobile}
              min={0}
              max={60}
              onChange={(value) =>
                setAttributes({
                  slideList: {
                    ...slideList,
                    fontSize: { ...slideList.fontSize, mobile: value },
                  },
                })
              }
            />
          )}
        </div>
        <div style={{ marginTop: '10px' }}>
          <IncludeExClude
            options={['normal', 'hover']}
            value={boxList.txtStyle}
            renderFunction={(value) =>
              setAttributes({ boxList: { ...boxList, txtStyle: value } })
            }
          />
        </div>
        {boxList.txtStyle === 'normal' ? (
          <Fragment>
            <PanelColorControl
              label="Text Color"
              value={boxList.nTxtColor}
              colors={[
                { name: 'Purple', color: '#9C27B0' },
                { name: 'Gray', color: '#9E9E9E' },
                { name: 'Pink', color: '#E91E63' },
                { name: 'Orange', color: '#F57C00' },
                { name: 'Lime', color: '#CDDC39' },
                { name: 'Brown', color: '#795548' },
              ]}
              renderFunction={(value) =>
                setAttributes({ boxList: { ...boxList, nTxtColor: value } })
              }
            />
          </Fragment>
        ) : (
          <Fragment>
            <PanelColorControl
              label="Text Color"
              value={boxList.hTxtColor}
              colors={[
                { name: 'Purple', color: '#9C27B0' },
                { name: 'Gray', color: '#9E9E9E' },
                { name: 'Pink', color: '#E91E63' },
                { name: 'Orange', color: '#F57C00' },
                { name: 'Lime', color: '#CDDC39' },
                { name: 'Brown', color: '#795548' },
              ]}
              renderFunction={(value) =>
                setAttributes({ boxList: { ...boxList, hTxtColor: value } })
              }
            />
          </Fragment>
        )}
        <div
          style={{
            borderTop: '1px solid #ccc',
            marginTop: '10px',
            paddingTop: '10px',
          }}
        >
          <p style={{ marginBottom: '10px' }}>
            <strong>Dots</strong>
          </p>
          <RangeControl
            label="Size"
            value={boxList.dotSize}
            min={0}
            step={1}
            max={70}
            onChange={(value) =>
              setAttributes({ boxList: { ...boxList, dotSize: value } })
            }
          />
          <MultiShadowControl
            label="Box Shadow"
            value={boxList.dotShadow}
            onChange={(value) =>
              setAttributes({ boxList: { ...boxList, dotShadow: value } })
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
          <PanelColorControl
            label="Tree Color"
            value={boxList.treeColor}
            colors={[
              { name: 'Purple', color: '#9C27B0' },
              { name: 'Gray', color: '#9E9E9E' },
              { name: 'Pink', color: '#E91E63' },
              { name: 'Orange', color: '#F57C00' },
              { name: 'Lime', color: '#CDDC39' },
              { name: 'Brown', color: '#795548' },
            ]}
            defaults={'blueviolet'}
            renderFunction={(value) =>
              setAttributes({ boxList: { ...boxList, treeColor: value } })
            }
          />
        </div>
      </PanelBody>
    </Fragment>
  );
};

export default TimelineSettings;