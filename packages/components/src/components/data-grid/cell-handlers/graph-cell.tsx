import { h } from '@stencil/core';
import { Cell } from './cell-interface';

// Expected content: number, eg 10230.32

// Options
// style?: string 'bar' | 'progress'
// min?: number 0
// max?: number 100

export const GraphCell: Cell = {
  defaults: {
    sortBy: 'number',
  },
  render: ({ field, content }) => {
    const { style = 'progress', min = 0, max = 100 } = field;

    // Convert content to 0>100 range for progress bar
    const progress = ((content - min) / (max - min)) * 100;

    switch (style) {
      case 'bar':
        return (
          <div class={`tbody__bar-cell`}>
            <scale-progress-bar
              percentage={progress}
              // showStatus={true}
              style={{ maxWidth: '200px' }}
              styles={
                /* css */ `.progress-bar__outer {
                min-width: 50px;
                max-width: 200px;
              }
              .progress-bar__inner {
                background: var(--scl-color-grey-80) !important;
              }
              `
              }
            ></scale-progress-bar>
            <p class={`scl-body`}>{content}</p>
          </div>
        );
      default:
        // progress
        return (
          <scale-progress-bar
            percentage={progress}
            showStatus={true}
            styles={
              /* css */ `.progress-bar__outer {
              min-width: 50px;
              max-width: 200px;
            }
            .progress-bar__inner {
                background: var(--scl-color-blue-60) !important;
              }
            `
            }
          ></scale-progress-bar>
        );
    }
  },
};
