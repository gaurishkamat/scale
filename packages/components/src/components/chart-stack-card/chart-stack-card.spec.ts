import { newSpecPage } from '@stencil/core/testing';
import { ChartStackCard } from './chart-stack-card';
import { styles } from './chart-stack-card.styles';
import jss from 'jss';

describe('ChartStack', () => {
  let element;
  // @ts-ignore
  let stylesheet;
  beforeEach(async () => {
    element = new ChartStackCard();
    stylesheet = element.stylesheet = jss.createStyleSheet(styles as any);
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

  it('should handle css classes', () => {
    element.customClass = 'custom';
    expect(element.getCssClassMap()).toContain('custom');
  });
});
