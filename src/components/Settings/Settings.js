import { InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  TextControl,
  ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from 'react';

import { BDevice, Label } from '../../../../Components';

import { bullets, htmlTags, markups, themes } from '../../utils/options';
import AnchorsByTag from '../Panel/AnchorsByTag/AnchorsByTag';
import IconPicker from '../Panel/IconPicker/IconPicker';
import PanelAlign from '../Panel/PanelAlign/PanelAlign';
import PanelInputAdd from '../Panel/PanelInputAdd/PanelInputAdd';
import PanelUnit from '../Panel/PanelUnit/PanelUnit';
import TabPanel from '../Panel/TabPanel/TabPanel';
import StyleSettings from './StyleSettings';
const Settings = ({ attributes, setAttributes }) => {
  const { title, theme, markup, minimize, sticky } = attributes;

  const [tab, setTab] = useState('content');

  return (
    <div>
      <InspectorControls>
        <TabPanel tab={tab} setTab={setTab} />
        {'content' === tab && (
          <>
            <PanelBody
              className="bPlPanelBody"
              title="Table of Contents"
              initialOpen={true}
            >
              <TextControl
                label={__('title', 'table-of-contents')}
                value={title.text}
                onChange={(value) =>
                  setAttributes({ title: { ...title, text: value } })
                }
              />

              <PanelRow className="mt20">
                <Label className="">
                  {__('HTML Tag', 'table-of-contents')}
                </Label>
                <SelectControl
                  value={title.tag}
                  onChange={(value) =>
                    setAttributes({ title: { ...title, tag: value } })
                  }
                  options={htmlTags}
                />
              </PanelRow>

              <Label>{__('Anchors By Tags', 'table-of-contents')}</Label>
              <AnchorsByTag
                attributes={attributes}
                setAttributes={setAttributes}
              />

              <PanelRow className="mt20">
                <Label className="">Theme</Label>
                <SelectControl
                  value={theme}
                  onChange={(value) => setAttributes({ theme: value })}
                  options={themes}
                />
              </PanelRow>

              {'default' === theme && (
                <>
                  <PanelRow className="mt20">
                    <Label className="">Markup view</Label>
                    <SelectControl
                      value={markup.view}
                      options={markups}
                      onChange={(value) =>
                        setAttributes({
                          markup: {
                            ...markup,
                            view: value,
                            icon: value === 'disc' && 'fa-solid fa-circle',
                          },
                        })
                      }
                    />
                  </PanelRow>

                  {markup.view === 'disc' && (
                    <IconPicker
                      icons={bullets}
                      label={'Icon'}
                      renderFunction={(value) =>
                        setAttributes({
                          markup: {
                            ...markup,
                            icon: value,
                            view: value === 'decimal' ? 'decimal' : 'disc',
                          },
                        })
                      }
                      value={markup.icon}
                      default={'decimal'}
                    />
                  )}
                </>
              )}
            </PanelBody>

            {'default' === theme && (
              <PanelBody title="Settings" initialOpen={false}>
                <ToggleControl
                  label="Minimize Box"
                  checked={minimize.toggle}
                  onChange={(value) =>
                    setAttributes({ minimize: { ...minimize, toggle: value } })
                  }
                />
                <IconPicker
                  icons={[
                    {
                      label: 'Chevron Down',
                      value: 'fa-solid fa-chevron-down',
                    },
                    {
                      label: 'Circle Chevron Down',
                      value: 'fa-solid fa-circle-chevron-down',
                    },
                    { label: 'Angel Down', value: 'fa-solid fa-angle-down' },
                    {
                      label: 'Angel Double Down',
                      value: 'fa-solid fa-angles-down',
                    },
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
                  value={minimize.expandIcon}
                  renderFunction={(value) =>
                    setAttributes({
                      minimize: { ...minimize, expandIcon: value },
                    })
                  }
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
                      {
                        label: 'Angel Double Up',
                        value: 'fa-solid fa-angles-up',
                      },
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
                    value={minimize.collapseIcon}
                    renderFunction={(value) =>
                      setAttributes({
                        minimize: { ...minimize, collapseIcon: value },
                      })
                    }
                  />
                </div>
              </PanelBody>
            )}
            <PanelBody title="Sticky" initialOpen={false}>
              <ToggleControl
                label="Sticky"
                checked={sticky.toggle}
                onChange={(value) =>
                  setAttributes({ sticky: { ...sticky, toggle: value } })
                }
              />
              {sticky.toggle && (
                <>
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
                      value={sticky.horizonAlign}
                      renderFunction={(value) =>
                        setAttributes({
                          sticky: { ...sticky, horizonAlign: value },
                        })
                      }
                    />
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <PanelAlign
                      label={'Vertical Align'}
                      icons={[
                        { label: 'Top', value: 'fa-solid fa-arrow-up' },
                        {
                          label: 'Center',
                          value: 'fa-solid fa-arrows-left-right',
                        },
                        { label: 'Bottom', value: 'fa-solid fa-arrow-down' },
                      ]}
                      value={sticky.verticalAlign}
                      renderFunction={(value) =>
                        setAttributes({
                          sticky: { ...sticky, verticalAlign: value },
                        })
                      }
                    />
                  </div>
                  {sticky.horizonAlign === 1 ? (
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
                            device={sticky.leftDevice}
                            onChange={(val) =>
                              setAttributes({
                                sticky: { ...sticky, leftDevice: val },
                              })
                            }
                          />
                        </div>
                        {sticky.leftDevice === 'desktop' ? (
                          <PanelUnit
                            value={sticky.leftUnit.desktop}
                            units={['px', '%']}
                            renderFunction={(value) =>
                              setAttributes({
                                sticky: {
                                  ...sticky,
                                  leftUnit: {
                                    ...sticky.leftUnit,
                                    desktop: value,
                                  },
                                },
                              })
                            }
                          />
                        ) : sticky.leftDevice == 'tablet' ? (
                          <PanelUnit
                            value={sticky.leftUnit.tablet}
                            units={['px', '%']}
                            renderFunction={(value) =>
                              setAttributes({
                                sticky: {
                                  ...sticky,
                                  leftUnit: {
                                    ...sticky.leftUnit,
                                    tablet: value,
                                  },
                                },
                              })
                            }
                          />
                        ) : (
                          <PanelUnit
                            value={sticky.leftUnit.mobile}
                            units={['px', '%']}
                            renderFunction={(value) =>
                              setAttributes({
                                sticky: {
                                  ...sticky,
                                  leftUnit: {
                                    ...sticky.leftUnit,
                                    mobile: value,
                                  },
                                },
                              })
                            }
                          />
                        )}
                      </div>
                      {sticky.leftDevice === 'desktop' ? (
                        <RangeControl
                          value={sticky.left.desktop}
                          min={0}
                          max={sticky.leftUnit.desktop === 'px' ? 1000 : 100}
                          onChange={(value) =>
                            setAttributes({
                              sticky: {
                                ...sticky,
                                left: { ...sticky.left, desktop: value },
                              },
                            })
                          }
                        />
                      ) : sticky.leftDevice == 'tablet' ? (
                        <RangeControl
                          value={sticky.left.tablet}
                          min={0}
                          max={sticky.leftUnit.tablet === 'px' ? 1000 : 100}
                          onChange={(value) =>
                            setAttributes({
                              sticky: {
                                ...sticky,
                                left: { ...sticky.left, tablet: value },
                              },
                            })
                          }
                        />
                      ) : (
                        <RangeControl
                          value={sticky.left.mobile}
                          min={0}
                          max={sticky.leftUnit.mobile === 'px' ? 1000 : 100}
                          onChange={(value) =>
                            setAttributes({
                              sticky: {
                                ...sticky,
                                left: { ...sticky.left, mobile: value },
                              },
                            })
                          }
                        />
                      )}
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
                          style={{
                            display: 'flex',
                            gap: '15px',
                            alignItems: 'center',
                          }}
                        >
                          <span>Right</span>
                          <BDevice
                            device={sticky.rightDevice}
                            onChange={(val) =>
                              setAttributes({
                                sticky: { ...sticky, rightDevice: val },
                              })
                            }
                          />
                        </div>
                        {sticky.rightDevice === 'desktop' ? (
                          <PanelUnit
                            value={sticky.rightUnit.desktop}
                            units={['px', '%']}
                            renderFunction={(value) =>
                              setAttributes({
                                sticky: {
                                  ...sticky,
                                  rightUnit: {
                                    ...sticky.rightUnit,
                                    desktop: value,
                                  },
                                },
                              })
                            }
                          />
                        ) : sticky.rightDevice === 'tablet' ? (
                          <PanelUnit
                            value={sticky.rightUnit.tablet}
                            units={['px', '%']}
                            renderFunction={(value) =>
                              setAttributes({
                                sticky: {
                                  ...sticky,
                                  rightUnit: {
                                    ...sticky.rightUnit,
                                    tablet: value,
                                  },
                                },
                              })
                            }
                          />
                        ) : (
                          <PanelUnit
                            value={sticky.rightUnit.mobile}
                            units={['px', '%']}
                            renderFunction={(value) =>
                              setAttributes({
                                sticky: {
                                  ...sticky,
                                  rightUnit: {
                                    ...sticky.rightUnit,
                                    mobile: value,
                                  },
                                },
                              })
                            }
                          />
                        )}
                      </div>
                      {sticky.rightDevice === 'desktop' ? (
                        <RangeControl
                          value={sticky.right.desktop}
                          min={0}
                          max={sticky.rightUnit.desktop === 'px' ? 1000 : 100}
                          onChange={(value) =>
                            setAttributes({
                              sticky: {
                                ...sticky,
                                right: { ...sticky.right, desktop: value },
                              },
                            })
                          }
                        />
                      ) : sticky.rightDevice === 'tablet' ? (
                        <RangeControl
                          value={sticky.right.tablet}
                          min={0}
                          max={sticky.rightUnit.tablet === 'px' ? 1000 : 100}
                          onChange={(value) =>
                            setAttributes({
                              sticky: {
                                ...sticky,
                                right: { ...sticky.right, tablet: value },
                              },
                            })
                          }
                        />
                      ) : (
                        <RangeControl
                          value={sticky.right.mobile}
                          min={0}
                          max={sticky.rightUnit.mobile === 'px' ? 1000 : 100}
                          onChange={(value) =>
                            setAttributes({
                              sticky: {
                                ...sticky,
                                right: { ...sticky.right, mobile: value },
                              },
                            })
                          }
                        />
                      )}
                    </div>
                  )}
                  {sticky.verticalAlign === 1 && (
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
                          <span>Top</span>
                          <BDevice
                            device={sticky.topDevice}
                            onChange={(val) =>
                              setAttributes({
                                sticky: { ...sticky, topDevice: val },
                              })
                            }
                          />
                        </div>
                        {sticky.topDevice === 'desktop' ? (
                          <PanelUnit
                            value={sticky.topUnit.desktop}
                            units={['px', '%']}
                            renderFunction={(value) =>
                              setAttributes({
                                sticky: {
                                  ...sticky,
                                  topUnit: {
                                    ...sticky.topUnit,
                                    desktop: value,
                                  },
                                },
                              })
                            }
                          />
                        ) : sticky.topDevice === 'tablet' ? (
                          <PanelUnit
                            value={sticky.topUnit.tablet}
                            units={['px', '%']}
                            renderFunction={(value) =>
                              setAttributes({
                                sticky: {
                                  ...sticky,
                                  topUnit: { ...sticky.topUnit, tablet: value },
                                },
                              })
                            }
                          />
                        ) : (
                          <PanelUnit
                            value={sticky.topUnit.mobile}
                            units={['px', '%']}
                            renderFunction={(value) =>
                              setAttributes({
                                sticky: {
                                  ...sticky,
                                  topUnit: { ...sticky.topUnit, mobile: value },
                                },
                              })
                            }
                          />
                        )}
                      </div>
                      {sticky.topDevice === 'desktop' ? (
                        <RangeControl
                          value={sticky.top.desktop}
                          min={0}
                          max={sticky.topUnit.desktop === 'px' ? 1000 : 100}
                          onChange={(value) =>
                            setAttributes({
                              sticky: {
                                ...sticky,
                                top: { ...sticky.top, desktop: value },
                              },
                            })
                          }
                        />
                      ) : sticky.topDevice === 'tablet' ? (
                        <RangeControl
                          value={sticky.top.tablet}
                          min={0}
                          max={sticky.topUnit.tablet === 'px' ? 1000 : 100}
                          onChange={(value) =>
                            setAttributes({
                              sticky: {
                                ...sticky,
                                top: { ...sticky.top, tablet: value },
                              },
                            })
                          }
                        />
                      ) : (
                        <RangeControl
                          value={sticky.top.mobile}
                          min={0}
                          max={sticky.topUnit.mobile === 'px' ? 1000 : 100}
                          onChange={(value) =>
                            setAttributes({
                              sticky: {
                                ...sticky,
                                top: { ...sticky.top, mobile: value },
                              },
                            })
                          }
                        />
                      )}
                    </div>
                  )}
                  {sticky.verticalAlign === 3 && (
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
                          <span>Bottom</span>
                          <BDevice
                            device={sticky.bottomDevice}
                            onChange={(val) =>
                              setAttributes({
                                sticky: { ...sticky, bottomDevice: val },
                              })
                            }
                          />
                        </div>
                        {sticky.bottomDevice === 'desktop' ? (
                          <PanelUnit
                            value={sticky.bottomUnit.desktop}
                            units={['px', '%']}
                            renderFunction={(value) =>
                              setAttributes({
                                sticky: {
                                  ...sticky,
                                  bottomUnit: {
                                    ...sticky.bottomUnit,
                                    desktop: value,
                                  },
                                },
                              })
                            }
                          />
                        ) : sticky.bottomDevice === 'tablet' ? (
                          <PanelUnit
                            value={sticky.bottomUnit.tablet}
                            units={['px', '%']}
                            renderFunction={(value) =>
                              setAttributes({
                                sticky: {
                                  ...sticky,
                                  bottomUnit: {
                                    ...sticky.bottomUnit,
                                    tablet: value,
                                  },
                                },
                              })
                            }
                          />
                        ) : (
                          <PanelUnit
                            value={sticky.bottomUnit.mobile}
                            units={['px', '%']}
                            renderFunction={(value) =>
                              setAttributes({
                                sticky: {
                                  ...sticky,
                                  bottomUnit: {
                                    ...sticky.bottomUnit,
                                    desktop: value,
                                  },
                                },
                              })
                            }
                          />
                        )}
                      </div>
                      {sticky.bottomDevice === 'desktop' ? (
                        <RangeControl
                          value={sticky.bottom.desktop}
                          min={0}
                          max={sticky.bottomUnit.desktop === 'px' ? 1000 : 100}
                          onChange={(value) =>
                            setAttributes({
                              sticky: {
                                ...sticky,
                                bottom: { ...sticky.bottom, desktop: value },
                              },
                            })
                          }
                        />
                      ) : sticky.bottomDevice === 'tablet' ? (
                        <RangeControl
                          value={sticky.bottom.tablet}
                          min={0}
                          max={sticky.bottomUnit.tablet === 'px' ? 1000 : 100}
                          onChange={(value) =>
                            setAttributes({
                              sticky: {
                                ...sticky,
                                bottom: { ...sticky.bottom, tablet: value },
                              },
                            })
                          }
                        />
                      ) : (
                        <RangeControl
                          value={sticky.bottom.mobile}
                          min={0}
                          max={sticky.bottomUnit.mobile === 'px' ? 1000 : 100}
                          onChange={(value) =>
                            setAttributes({
                              sticky: {
                                ...sticky,
                                bottom: { ...sticky.bottom, desktop: value },
                              },
                            })
                          }
                        />
                      )}
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
                        style={{
                          display: 'flex',
                          gap: '15px',
                          alignItems: 'center',
                        }}
                      >
                        <span>Z-Index</span>
                        <BDevice
                          device={sticky.zIndexDevice}
                          onChange={(val) =>
                            setAttributes({
                              sticky: { ...sticky, zIndexDevice: val },
                            })
                          }
                        />
                      </div>
                    </div>
                    {sticky.zIndexDevice === 'desktop' ? (
                      <RangeControl
                        value={sticky.zIndex.desktop}
                        min={0}
                        max={10000}
                        onChange={(value) =>
                          setAttributes({
                            sticky: {
                              ...sticky,
                              zIndex: { ...sticky.zIndex, desktop: value },
                            },
                          })
                        }
                      />
                    ) : sticky.zIndexDevice === 'tablet' ? (
                      <RangeControl
                        value={sticky.zIndex.tablet}
                        min={0}
                        max={10000}
                        onChange={(value) =>
                          setAttributes({
                            sticky: {
                              ...sticky,
                              zIndex: { ...sticky.zIndex, tablet: value },
                            },
                          })
                        }
                      />
                    ) : (
                      <RangeControl
                        value={sticky.zIndex.tablet}
                        min={0}
                        max={10000}
                        onChange={(value) =>
                          setAttributes({
                            sticky: {
                              ...sticky,
                              zIndex: { ...sticky.zIndex, mobile: value },
                            },
                          })
                        }
                      />
                    )}
                  </div>
                </>
              )}
            </PanelBody>
          </>
        )}

        {'style' === tab && (
          <>
            <StyleSettings
              attributes={attributes}
              setAttributes={setAttributes}
            />
          </>
        )}
      </InspectorControls>
    </div>
  );
};

export default Settings;
