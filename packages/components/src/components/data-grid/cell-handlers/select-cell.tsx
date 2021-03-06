import { h } from '@stencil/core';
import { Cell } from './cell-interface';

// Expected: string

// Options
// options: string array
// editable?: boolean = false

export const SelectCell: Cell = {
  defaults: {
    sortBy: 'text',
  },
  render: ({
    field,
    content,
    component,
    rowIndex,
    columnIndex,
    isAutoWidthCheck,
  }) => {
    const { options, editable = false } = field;

    // Select component doesn't expand with content, so need to return a fake element that simulates width
    if (isAutoWidthCheck) {
      return (
        <p class={`scl-body`} style={{ paddingRight: '56px' }}>
          {content}
        </p>
      );
    }

    const props = {
      disabled: !editable,
      value: content,
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

    return (
      <scale-dropdown size="small" {...props}>
        {options.map(option => {
          return (
            <option value={option} selected={option === content}>
              {option}
            </option>
          );
        })}
      </scale-dropdown>
    );
  },
};
