import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('Button', () => {
  let element;

  beforeEach(async () => {
    beforeEach(async () => {
      element = new Button();
    });
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
    expect(element.getCssClassMap()).toContain('button--size-small');

    element.variant = 'primary';
    expect(element.getCssClassMap()).toContain('button--variant-primary');

    element.disabled = true;
    expect(element.getCssClassMap()).toContain('button--disabled');
  });
});
