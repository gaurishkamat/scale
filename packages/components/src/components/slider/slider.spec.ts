import { newSpecPage } from '@stencil/core/testing';
import { Slider } from './slider';

describe('Slider', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Slider],
      html: `<scale-slider>Label</scale-slider>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
