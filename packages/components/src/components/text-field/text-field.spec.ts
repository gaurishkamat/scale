import { newSpecPage } from '@stencil/core/testing';
import { TextField } from './text-field';
describe('TextField', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [TextField],
      html: `<scale-text-field></scale-text-field>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
