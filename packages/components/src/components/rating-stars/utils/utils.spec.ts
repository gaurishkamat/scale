import { clamp } from './utils';

describe('functions', () => {
    it('clamp() returns max if value > max', () => {
      expect(clamp(11, 5, 10)).toBe(10);
    });
    it('clamp() returns min if value < min', () => {
      expect(clamp(4, 5, 10)).toBe(5);
    });
});