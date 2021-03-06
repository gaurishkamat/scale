import { h } from '@stencil/core';
import { Cell } from './cell-interface';

// Expected: comma delimited string (eg 'one, two, three')

export const TagsCell: Cell = {
  defaults: {
    sortBy: 'text',
  },
  render: ({ content }) => {
    const tags = content.split(',').map(s => s.trim());
    return (
      <ul class={`tbody__tag-list`}>
        {tags.map(tag => (
          <li>
            <scale-tag size="small">{tag}</scale-tag>
          </li>
        ))}
      </ul>
    );
  },
};
