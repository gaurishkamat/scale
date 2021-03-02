import { newSpecPage } from '@stencil/core/testing';
import { Checkbox } from './checkbox';
describe('Checkbox', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<scale-checkbox></scale-checkbox>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
