import { newSpecPage } from '@stencil/core/testing';
import { ChartStackCard } from './chart-stack-card';

describe('ChartStack', () => {
  let element;
  beforeEach(async () => {
    element = new ChartStackCard();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [ChartStackCard],
      html: `
        <scale-chart-stack-card
          heading="Operating System"
          data='[{"type":"Android","value":"55","percentage":"55"},{"type":"IOS","value":"35","percentage":"35"},{"type":"Other","value":"10","percentage":"10"}]'
        ></scale-chart-stack-card>
       `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle error', () => {
    expect(element.readData('no data')).toEqual([]);
  });

  it('should handle JSON error', () => {
    expect(element.readData(['arraydata', 'arraydata'])).toEqual([
      'arraydata',
      'arraydata',
    ]);
  });
});
