import { newSpecPage } from '@stencil/core/testing';
import { List } from './list';

describe('List', () => {
  let element;
  beforeEach(async () => {
    element = new List();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [List],
      html: `<scale-list>default</scale-list>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle css classes', () => {
    element.ordered = true;
    expect(element.getCssClassMap()).toContain('list--type-ordered');
  });
});
