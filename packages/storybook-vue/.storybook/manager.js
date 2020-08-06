import { addons } from '@storybook/addons';
import scaleTheme from './scaleTheme.js';

addons.setConfig({
  theme: scaleTheme,
});

const extraStyles = document.createElement('style');
document.head.appendChild(extraStyles);
extraStyles.innerHTML = `
  body {
    border-top: 4px solid #e20074;
  }

  /* Limit logo's width */
  .sidebar-header {
    max-width: 9.5rem;
  }
`;
