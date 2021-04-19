import { newSpecPage } from '@stencil/core/testing';
import { RadioButton } from './radio-button';

describe('RadioButton', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [RadioButton],
      html: `<scale-radio-button></scale-radio-button>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle change of checked', async () => {
    const page = await newSpecPage({
      components: [RadioButton],
      html: `<scale-radio-button inputId="testing" checked="false"></scale-radio-button>`,
    });
    page.rootInstance.checked = true;
    expect(page.root).toMatchSnapshot();
  });
});
