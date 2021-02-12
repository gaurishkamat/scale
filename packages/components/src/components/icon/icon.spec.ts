import { newSpecPage } from '@stencil/core/testing';
import { Icon } from './icon';

describe('Icon', () => {
  let element;
  beforeEach(async () => {
    element = new Icon();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Icon],
      html: `<scale-icon path="m 10 10">Label</scale-icon>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle css classes', () => {
    element.name = 'arrow-left';
    expect(element.getCssClassMap()).toContain('arrow-left');
  });
});
