import { registerBlockType } from '@wordpress/blocks';
import metadata from '../inc/block.json';
import Edit from './Edit';
import './editor.scss';

registerBlockType(metadata, {
  icon: {
    src: 'list-view',
    foreground: '#ed34dd',
  },

  // Build in Functions
  edit: Edit,

  save: () => null,
});
