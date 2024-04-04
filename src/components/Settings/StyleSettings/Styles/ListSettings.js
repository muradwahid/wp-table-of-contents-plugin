import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment, useState } from 'react';
import { updateData } from '../../../../utils/functions';
import Device from '../../../Panel/Device/Device';
import IncludeExClude from '../../../Panel/IncludeExClude/IncludeExClude';
import PanelColorControl from '../../../Panel/PanelColorControl/PanelColorControl';
import RangeUnitControl from '../../../Panel/RangeUnitControl/RangeUnitControl';
const ListSettings = ({ attributes, setAttributes }) => {
  const { slideTitle, slideList, boxList } = attributes;
  const [device, setDevice] = useState("desktop")
  return (
    <Fragment>
      <PanelBody title={__("List", "table-of-content-block")} initialOpen={false}>
        <strong style={{ marginBottom: '15px', color: 'gray' }}>Heading</strong>
        <PanelColorControl
          label={__("Title Color", "table-of-content-block")}
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

        <div style={{ marginTop: '10px' }} className='panelPosition'>
          <Device className="devicePosition" value={device} onChange={val => setDevice(val)} style={{ left: "110px" }} />
          <RangeUnitControl
            label={__("Space Top", "table-of-content-block")}
            value={slideTitle.space[device]}
            min={0}
            max={slideTitle.space[device].includes("%") ? 100 : 200}
            onChange={(value) =>
              setAttributes({
                slideTitle: updateData(slideTitle, value, "space", device)
              })
            }
          />
        </div>

        <div style={{ marginTop: '10px' }} className='panelPosition'>
          <Device className="devicePosition" value={device} onChange={val => setDevice(val)} style={{ left: "110px" }} />
          <RangeUnitControl
            label={__("Space Bottom", "table-of-content-block")}
            value={slideTitle.spaceBottom[device]}
            min={0}
            max={slideTitle.spaceBottom[device].includes("%") ? 100 : 200}
            onChange={(value) =>
              setAttributes({
                slideTitle: updateData(slideTitle, value, "spaceBottom", device)
              })
            }
          />
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

          <div style={{ marginTop: '10px' }} className='panelPosition'>
            <Device className="devicePosition" value={device} onChange={val => setDevice(val)} style={{ left: "110px" }} />
            <RangeUnitControl
              label={__("List Space Bottom", "table-of-content-block")}
              value={slideList.space[device]}
              min={0}
              max={slideList.space[device].includes("%") ? 100 : 200}
              onChange={(value) =>
                setAttributes({
                  slideList: updateData(slideList, value, "space", device)
                })
              }
            />
          </div>

          <div style={{ marginTop: '10px' }} className='panelPosition'>
            <Device className="devicePosition" value={device} onChange={val => setDevice(val)} style={{ left: "110px" }} />
            <RangeUnitControl
              label={__("List Font Size", "table-of-content-block")}
              value={slideList.fontSize[device]}
              min={0}
              max={slideList.fontSize[device].includes("%") ? 100 : 200}
              onChange={(value) =>
                setAttributes({
                  slideList: updateData(slideList, value, "fontSize", device)
                })
              }
            />
          </div>

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
              label={__("Text Color", "table-of-content-block")}
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
            <PanelColorControl
              label={__("Bar Color", "table-of-content-block")}
              value={boxList.nbarColor}
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
                setAttributes({ boxList: { ...boxList, nbarColor: value } })
              }
            />
          </Fragment>
        ) : (
          <Fragment>
            <PanelColorControl
              label={__("Text Color", "table-of-content-block")}
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
            <PanelColorControl
              label={__("Bar Color", "table-of-content-block")}
              value={boxList.hBarColor}
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
                setAttributes({ boxList: { ...boxList, hBarColor: value } })
              }
            />
          </Fragment>
        )}
      </PanelBody>
    </Fragment>
  );
};

export default ListSettings;
