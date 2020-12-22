import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';
import { styles } from './button.styles';
import jss from 'jss';

describe('Button', () => {
  let element;
  let stylesheet;
  beforeEach(async () => {
    element = new Button();
    stylesheet = element.stylesheet = jss.createStyleSheet(styles as any);
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<scale-button>Label</scale-button>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle css classes', () => {
    element.size = 'small';
    stylesheet.addRule('button--size-small', {});
    expect(element.getCssClassMap()).toContain(
      stylesheet.classes['button--size-small']
    );

    element.variant = 'primary';
    stylesheet.addRule('button--variant-primary', {});
    expect(element.getCssClassMap()).toContain(
      stylesheet.classes['button--variant-primary']
    );

    element.disabled = true;
    expect(element.getCssClassMap()).toContain(
      stylesheet.classes['button--disabled']
    );
  });
});
