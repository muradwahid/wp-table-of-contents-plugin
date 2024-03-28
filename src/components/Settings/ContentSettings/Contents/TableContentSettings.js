import React from 'react';
import { bullets, htmlTags, markups, themes } from '../../../../utils/options';
import { PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Label } from '../../../../../../Components';
import AnchorsByTag from '../../../Panel/AnchorsByTag/AnchorsByTag';
import IconPicker from '../../../Panel/IconPicker/IconPicker';

const TableContentSettings = ({ attributes, setAttributes }) => {
  const { title, theme, markup } = attributes;
  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Table of Contents","b-blocks")}
      initialOpen={true}
    >
      
      <TextControl
        label={__('Title', 'b-blocks')}
        value={title.text}
        onChange={(value) =>
          setAttributes({ title: { ...title, text: value } })
        }
      />

      <PanelRow className="mt20">
        <Label className="">
          {__('HTML Tag', 'b-blocks')}
        </Label>
        <SelectControl
          value={title.tag}
          onChange={(value) =>
            setAttributes({ title: { ...title, tag: value } })
          }
          options={htmlTags}
        />
      </PanelRow>

      <Label>{__('Anchors By Tags', 'b-blocks')}</Label>
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