import { newSpecPage } from '@stencil/core/testing';
import { Logo } from './logo';

describe('component prop snapshots', () => {
  let page: any;
  let component: any;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Logo],
      html: `<div></div>`,
    });
    component = page.doc.createElement('scale-logo');
    page.root.appendChild(component);
  });

  const variant: 'magenta' | 'white' = 'magenta';
  const language:
    | 'de'
    | 'en'
    | 'cz'
    | 'hr'
    | 'hu'
    | 'me'
    | 'mk'
    | 'ro'
    | 'sk'
    | 'laimOff' = 'en';
  const transparent: boolean = false;
  const size: number = 36;

  describe('all props', () => {
    it('are not set', async () => {
      await page.waitForChanges();
      expect(page.rootInstance.variant).toBe(variant);
      expect(page.rootInstance.language).toBe(language);
      expect(page.rootInstance.transparent).toBe(transparent);
      expect(page.rootInstance.size).toBe(size);

      expect(page.root).toMatchSnapshot();
    });
    it('are set', async () => {
      const setVariant = 'white';
      const setLanguage = 'hr';
      const setTransparent = true;
      const setSize = 100;
      const setHref = 'https://www.telekom.de/start';

      component.variant = setVariant;
      component.language = setLanguage;
      component.transparent = setTransparent;
      component.size = setSize;
      component.href = setHref;

      await page.waitForChanges();
      expect(page.rootInstance.variant).toBe(setVariant);
      expect(page.rootInstance.language).toBe(setLanguage);
      expect(page.rootInstance.transparent).toBe(setTransparent);
      expect(page.rootInstance.size).toBe(setSize);
      expect(page.rootInstance.href).toBe(setHref);

      expect(page.root).toMatchSnapshot();
    });
  });
});
