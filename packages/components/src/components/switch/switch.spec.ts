import { newSpecPage } from '@stencil/core/testing';
import { Switch } from './switch';
import { styles } from './switch.styles';
import jss from 'jss';

describe('Switch', () => {
  let element;
  let stylesheet;
  beforeEach(async () => {
    element = new Switch();
    stylesheet = element.stylesheet = jss.createStyleSheet(styles as any);
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<scale-switch></scale-switch>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle css classes', () => {
    element.customClass = 'custom';
    expect(element.getCssClassMap()).toContain('custom');
  });
});
