import { h } from '@stencil/core';
import { Cell } from './cell-interface';

// Expected content: HTMLElement

export const HTMLCell: Cell = {
  defaults: {},
  getLongestContent({ rows, columnIndex }) {
    // Skip check as content width is always the same
    return rows[0][columnIndex];
  },
  render: ({ content, component }) => {
    /* TODO: use scale button */
    return (
      <scale-button
        variant="secondary"
        size="small"
        icon-only
        onClick={() => {
          content.isExpanded = !content.isExpanded;
          component.forceRender++;
        }}
      >
        {content.isExpanded ? (
          <scale-icon-navigation-collapse-up
            size={14}
          ></scale-icon-navigation-collapse-up>
        ) : (
          <scale-icon-navigation-collapse-down
            size={14}
          ></scale-icon-navigation-collapse-down>
        )}
      </scale-button>
    );
  },
};
