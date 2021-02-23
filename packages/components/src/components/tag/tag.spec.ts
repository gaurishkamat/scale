import { newSpecPage } from '@stencil/core/testing';
import { Tag } from './tag';

describe('Tag', () => {
  let element;
  beforeEach(async () => {
    element = new Tag();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Tag],
      html: `<scale-tag>Label</scale-tag>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should have a link', async () => {
    const page = await newSpecPage({
      components: [Tag],
      html: `<scale-tag href="#">Label</scale-tag>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle css classes', () => {
    element.size = 'small';
    expect(element.getCssClassMap()).toContain('tag--size-small');

    element.variant = 'primary';
    expect(element.getCssClassMap()).toContain('tag--variant-primary');

    element.href = 'http://example.com';
    expect(element.getCssClassMap()).toContain('tag--link');
  });
});
