import { newSpecPage } from '@stencil/core/testing';
import { Input } from './input';
describe('Input', () => {
  let element;
  beforeEach(async () => {
    element = new Input();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<scale-input></scale-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle css classes', () => {
    element.type = 'number';
    expect(element.getCssClassMap()).toContain('input--type-number');
  });
});
