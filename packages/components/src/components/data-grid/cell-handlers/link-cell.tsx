import { h } from '@stencil/core';
import { Cell } from './cell-interface';

// Expected content: a url string (eg: 'https://sample.com')

export const LinkCell: Cell = {
  defaults: {
    sortBy: 'text',
  },
  render: ({ content }) => {
    // Remove protocol (http/https)
    const urlNoProtocol = content.replace(/^https?\:\/\//i, '');
    return (
      <scale-link href={content} target="_blank">
        {urlNoProtocol}
      </scale-link>
    );
  },
};
