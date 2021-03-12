import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { RatingStars } from './rating-stars';

async function simulateMouseEvent(
  page: SpecPage,
  strEvent: string,
  elementId: string,
) {
  const event = new MouseEvent(strEvent, {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  const element = page.root.shadowRoot.getElementById(elementId);
  !element.dispatchEvent(event);
}

async function simulateKeyboardEvent(
  page: SpecPage,
  strEvent: string,
  elementId: string,
  key: string
) {
  const event = new KeyboardEvent(strEvent, {
    view: window,
    bubbles: true,
    cancelable: true,
    key: key,
  });
  const element = page.root.shadowRoot.getElementById(elementId);
  !element.dispatchEvent(event);
}

describe('component', () => {
  let page: SpecPage;

  it('builds', () => {
    expect(new RatingStars()).toBeTruthy();
  });
  describe('props', () => {
    beforeEach(async () => {
      page = await newSpecPage({
        components: [RatingStars],
        html: `<scale-rating-stars></scale-rating-stars>`,
      });
    });

    it('has all props', async () => {
      page.root.numOfStars = 7;
      page.root.rating = 3;
      page.root.interactive = true;
      page.root.small = true;
      page.root.color = '#00ff00';
      page.root.ariaLabel = 'rating-stars';
      page.root.precision = 1;
      await page.waitForChanges();
      expect(page.rootInstance.numOfStars).toBe(7);
      expect(page.rootInstance.rating).toBe(3);
      expect(page.rootInstance.interactive).toBe(true);
      expect(page.rootInstance.small).toBe(true);
      expect(page.rootInstance.ariaLabel).toBe('rating-stars');
      expect(page.rootInstance.precision).toBe(1);
      expect(page.rootInstance.hoverValue).toBe(0);
    });

    it('isHovering is set to false on Mouseleave', async () => {
      simulateMouseEvent(page, 'mouseleave', 'rating');
      expect(page.rootInstance.isHovering).toBe(false);
    });

    it('isHovering is set to true on Mouseenter', async () => {
      simulateMouseEvent(page, 'mouseenter', 'rating');
      expect(page.rootInstance.isHovering).toBe(true);
    });

    it('change rating on keydown (ArrowLeft/ArrowRight) ', async () => {
      const precision: number = page.rootInstance.precision;
      expect(await page.rootInstance.rating).toBe(0);
      simulateKeyboardEvent(page, 'keydown', 'rating', 'ArrowRight');
      simulateKeyboardEvent(page, 'keydown', 'rating', 'ArrowRight');
      simulateKeyboardEvent(page, 'keydown', 'rating', 'ArrowLeft');
      const result = 0 + precision + precision - precision;
      expect(await page.rootInstance.rating).toBe(result);
    });
  });

  describe('functions', () => {
    it('roundToPrecision(5, 1) returns 5', () => {
      const component = new RatingStars();
      expect(component.roundToPrecision(5, 1) as any).toBe(5);
    });
    it('handleMouseEnter sets hovering to true', () => {
      const component = new RatingStars();
      component.handleMouseEnter();
      expect(component.isHovering).toBe(true);
    });
    it('handleMouseLeave sets hovering to false', () => {
      const component = new RatingStars();
      component.isHovering = true;
      component.handleMouseLeave();
      expect(component.isHovering).toBe(false);
    });
  });

  describe('snapshots', () => {
    it('rating 0 (initial) should match snapshot', async () => {
      page = await newSpecPage({
        components: [RatingStars],
        html: `<scale-rating-stars></scale-rating-stars>`,
      });
      expect(page.root).toMatchSnapshot();
    });

    it('rating 3 should match snapshot', async () => {
      page = await newSpecPage({
        components: [RatingStars],
        html: `<scale-rating-stars rating="3"></scale-rating-stars>`,
      });
      expect(page.root).toMatchSnapshot();
    });
  });
});

