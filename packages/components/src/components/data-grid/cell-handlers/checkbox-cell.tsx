import { h } from '@stencil/core';
import { Cell } from './cell-interface';

// Expected content: boolean, eg `true`

// Options
// style?: string 'switch' | 'checkbox'
// editable?: boolean = false

export const CheckboxCell: Cell = {
  defaults: {
    sortBy: 'number',
  },
  getLongestContent({ rows, columnIndex }) {
    // Skip check as content width is always the same
    return rows[0][columnIndex];
  },
  render: ({ field, content, component, rowIndex, columnIndex }) => {
    const { style = 'checkbox', editable = false } = field;

    const props = {
      checked: content,
      disabled: !editable,
    } as any;

    if (editable) {
      props.onScaleChange = ({ detail }) => {
        const { value } = detail;
        // Update rows data
        component.rows[rowIndex][columnIndex] = value;
        // Trigger event
        component.triggerEditEvent(value, rowIndex, columnIndex);
      };
    }

    switch (style) {
      case 'switch':
        return <scale-switch {...props}></scale-switch>;
      default:
        // 'checkbox'
        return <scale-checkbox {...props}></scale-checkbox>;
    }
  },
};
