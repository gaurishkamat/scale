import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Checkbox } from './checkbox';
describe('Checkbox', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Checkbox],
      html: `<scale-checkbox></scale-checkbox>`,
    });
  });

  it('should match snapshot', async () => {
    expect(page.root).toMatchSnapshot();
  });

  it('should reflect attributes', async () => {
    page = await newSpecPage({
      components: [Checkbox],
      html: `
        <scale-checkbox 
          name="testname"
          label="testlabel"
          checked
          disabled
          status="error"
          value="testvalue">
        </scale-checkbox>`,
    });
    await page.waitForChanges();
    expect(page.rootInstance.name).toBe('testname');
    expect(page.rootInstance.label).toBe('testlabel');
    expect(page.rootInstance.disabled).toBe(true);
    expect(page.rootInstance.checked).toBe(true);
    expect(page.rootInstance.status).toBe('error');
    expect(page.rootInstance.value).toBe('testvalue');
  });

  it('should handle css classes', () => {
    const element = new Checkbox();
    element.checked = true;
    expect(element.getCssClassMap()).toContain('checkbox--checked');
    element.disabled = true;
    expect(element.getCssClassMap()).toContain('checkbox--disabled');
    element.status = 'error';
    expect(element.getCssClassMap()).toContain('checkbox--status-error');
  });
});
