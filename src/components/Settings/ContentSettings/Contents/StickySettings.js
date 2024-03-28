import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { useState } from 'react';
import { updateData } from '../../../../utils/functions';
import { HiArrowNarrowLeft, HiArrowNarrowRight, HiOutlineArrowDown, HiOutlineArrowUp, LeftRightArrow } from '../../../../utils/icons';
import Device from '../../../Panel/Device/Device';
import PanelAlign from '../../../Panel/PanelAlign/PanelAlign';
import PanelSelectControl from '../../../Panel/PanelSelectControl/PanelSelectControl';
import RangeUnitControl from '../../../Panel/RangeUnitControl/RangeUnitControl';

const StickySettings = ({ attributes, setAttributes }) => {
  const { sticky } = attributes;
  const [device, setDevice] = useState("desktop");
  return (
    <PanelBody title={__("Sticky","b-blocks")} initialOpen={false}>
      <ToggleControl
        label={__("Sticky","b-blocks")}
        checked={sticky.toggle}
        onChange={(value) =>
          setAttributes({ sticky: updateData(sticky, value, "toggle") })
        }
      />
      {sticky.toggle && (
        <>
          <p>Sticky on</p>
          <PanelSelectControl value={sticky.device} options={["Desktop", "Tablet", "Mobile"]} onChange={val => setAttributes({ sticky: updateData(sticky, val, "device") })} />

          <div style={{ marginTop: '10px' }}>
            <PanelAlign
              label={__('Horizontal Align',"b-blocks")}
              icons={[
                { label: 'Left', value: <HiArrowNarrowLeft /> },
                { label: 'Right', value: <HiArrowNarrowRight /> },
              ]}
              value={sticky.horizonAlign}
              onChange={(value) =>
                setAttributes({
                  sticky: updateData(sticky, value, "horizonAlign"),
                })
              }
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <PanelAlign
              label={__('Vertical Align',"b-blocks")}
              icons={[
                { label: 'Top', value: <HiOutlineArrowUp /> },
                {
                  label: 'Center',
                  value: <LeftRightArrow />,
                },
                { label: 'Bottom', value: <HiOutlineArrowDown /> },
              ]}
              value={sticky.verticalAlign}
              onChange={(value) =>
                setAttributes({
                  sticky: updateData(sticky, value, "verticalAlign"),
                })
              }
            />
          </div>
          <div style={{ marginTop: '10px' }} className='panelPosition'>
            <Device className="devicePosition" value={device} onChange={val => setDevice(val)} />
            <RangeUnitControl
              label={__(`${sticky.horizonAlign === "left" ? "Left" : "Right"}`, "b-blocks")}
              value={sticky[sticky.horizonAlign][device]}
              min={0}
              max={sticky[sticky.horizonAlign][device].includes("px") ? 1000 : 100}
              onChange={(value) =>
                setAttributes({
                  sticky: updateData(sticky, value, sticky.horizonAlign, device)
                })
              } />
          </div>

          {
            sticky.verticalAlign !== "center" && <div style={{ marginTop: '10px' }} className='panelPosition'>
              <Device className="devicePosition" style={{ left: "50px" }} value={device} onChange={val => setDevice(val)} />
              <RangeUnitControl
                label={__(`${sticky.verticalAlign === "top" ? "Top" : "Bottom"}`, "b-blocks")}
                value={sticky[sticky.verticalAlign][device]}
                min={0}
                max={sticky[sticky.verticalAlign][device].includes("px") ? 1000 : 100}
                onChange={(value) =>
                  setAttributes({
                    sticky: updateData(sticky, value, sticky.verticalAlign, device)
                  })
                } />
            </div>
          }

          <div style={{ marginTop: '10px' }} className='panelPosition'>
            <Device className="devicePosition" style={{ left: "55px" }} value={device} onChange={val => setDevice(val)} />
            <RangeControl
              label={__("Z-Index", "b-blocks")}
              value={sticky.zIndex[device]}
              min={0}
              max={10000}
              onChange={(value) =>
                setAttributes({
                  sticky: updateData(sticky, value, "zIndex", device)
                })
              }
            />
          </div>
        </>
      )}
    </PanelBody>
  );
};

export default StickySettings;