import { PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React from 'react';
import { Label } from '../../../../../../Components';
import { bullets, htmlTags, markups, themes } from '../../../../utils/options';
import AnchorsByTag from '../../../Panel/AnchorsByTag/AnchorsByTag';
import IconPicker from '../../../Panel/IconPicker/IconPicker';

const TableContentSettings = ({ attributes, setAttributes }) => {
  const { title, theme, markup } = attributes;
  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Table of Contents", "table-of-content-block")}
      initialOpen={true}
    >

      <TextControl
        label={__('Title', 'table-of-content-block')}
        value={title.text}
        onChange={(value) =>
          setAttributes({ title: { ...title, text: value } })
        }
      />

      <PanelRow className="mt20">
        <Label className="">
          {__('HTML Tag', 'table-of-content-block')}
        </Label>
        <SelectControl
          value={title.tag}
          onChange={(value) =>
            setAttributes({ title: { ...title, tag: value } })
          }
          options={htmlTags}
        />
      </PanelRow>

      <Label>{__('Anchors By Tags', 'table-of-content-block')}</Label>
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
  );
};

export default TableContentSettings;