import { newSpecPage } from '@stencil/core/testing';
import { Link } from './link';

describe('Link', () => {
  let element;
  beforeEach(async () => {
    element = new Link();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<scale-link>default</scale-link>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should contain target="_blank" when openNewTab is set true', async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<scale-link href="http://example.com" open-new-tab=true>Label</scale-link>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should have link href value when href value is set', async () => {
    const page = await newSpecPage({
      components: [Link],
      html: `<scale-link href="http://example.com">Label</scale-link>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle css classes', () => {
    element.block = true;
    expect(element.getCssClassMap()).toContain('link--block');

    element.disabled = true;
    expect(element.getCssClassMap()).toContain('link--disabled');
  });
});
