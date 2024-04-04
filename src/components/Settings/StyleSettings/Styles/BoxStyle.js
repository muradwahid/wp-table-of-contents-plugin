import { __experimentalBoxControl as BoxControl, Flex, PanelBody, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { useState } from 'react';
import { Background, BorderControl, Label, MultiShadowControl } from '../../../../../../Components';
import { updateData } from '../../../../utils/functions';
import Device from '../../../Panel/Device/Device';

const units = [
  { value: 'px', label: 'px', default: 0 },
  { value: '%', label: '%', default: 0 },
  { value: 'em', label: 'em', default: 0 },
];

const BoxStyle = ({ attributes, setAttributes }) => {
  const { table, theme } = attributes;
  const [device, setDevice] = useState("desktop")
  return (
    <PanelBody title={__("Box", "table-of-content-block")} initialOpen={true}>
      <Flex>
        <Flex justify='flex-start'>
          <Label className="mt0">{__("Width", "table-of-content-block")}</Label>
          <Device value={device} onChange={val => setDevice(val)} />
        </Flex>
        <UnitControl value={table.width[device]} onChange={val => setAttributes({ table: updateData(table, val, "width", device) })} />
      </Flex>
      <Background
        label={__("Background Color", "table-of-content-block")}
        value={table.bgColor}
        defaults="#fff"
        onChange={(value) =>
          setAttributes({ table: { ...table, bgColor: value } })
        }
      />
      <BorderControl label={__("Border", "table-of-content-block")} value={table.border} onChange={value => setAttributes({ table: updateData(table, value, "border") })} />

      <MultiShadowControl
        label={__("Box Shadow", "table-of-content-block")}
        value={table.shadow}
        onChange={(value) =>
          setAttributes({ table: { ...table, shadow: value } })
        }
        defaults={[
          {
            hOffset: '0px',
            vOffset: '0px',
            blur: '5px',
            spread: '1px',
            color: '#b3b3b3',
          },
        ]}
      />

      {
        theme !== "default" && <div className='panelPosition'>
          <Device className="devicePosition" style={{ left: "60px" }} value={device} onChange={val => setDevice(val)} />
          <BoxControl
            label={__("Padding", "table-of-content-block")}
            values={table.padding[device]}
            resetValues={{
              top: '0px',
              left: '0px',
              right: '0px',
              bottom: '0px',
            }}
            units={units}
            onChange={(value) =>
              setAttributes({
                table: updateData(table, value, "padding", device)
              })
            }
          />
        </div>
      }
    </PanelBody>
  );
};

export default BoxStyle;