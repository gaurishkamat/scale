import { newSpecPage } from '@stencil/core/testing';
import { Divider } from './divider';

describe('Divider', () => {
  let element;
  beforeEach(async () => {
    element = new Divider();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: `<scale-divider></scale-divider>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should match snapshot when horizontal false', async () => {
    const page = await newSpecPage({
      components: [Divider],
      html: `<scale-divider vertical=true></scale-divider>`,
    });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root).toMatchSnapshot();
  });

  it('should...', async () => {
    element.size = 'small';
    expect(element.getCssClassMap()).toContain('divider--size-small');

    element.vertical = true;
    expect(element.getCssClassMap()).toContain('divider--vertical');
  })
});
