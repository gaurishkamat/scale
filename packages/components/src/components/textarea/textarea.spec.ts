import { newSpecPage } from '@stencil/core/testing';
import { Textarea } from './textarea';
describe('Textarea', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Textarea],
      html: `<scale-textarea></scale-textarea>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
