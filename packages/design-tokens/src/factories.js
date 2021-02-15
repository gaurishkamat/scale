import * as d3 from 'd3-color';

/**
 * @todo a proper type for a "color object"
 * @param {string} specifier - CSS Color Module Level 3 specifier string
 * @returns {Object} "{ h, s, l, opacity }"
 */
export function Color(specifier) {
  if (d3.color(specifier) === null) {
    throw new Error(
      `Color '${specifier}' is not a valid CSS specifier string (Color Module Level 3)`
    );
  }
  return d3.hsl(specifier);
}

/**
 * @todo a proper type for a "shadow object"
 * @param {Object} value - "{ x, y blur, spread, color }"
 * @returns {Object} "{ x, y blur, spread, color }"
 */
export function Shadow(value) {
  return {
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: Color('rgba(0, 0, 0, 0.1)'),
    ...value,
  };
}

/**
 * Helper function to convert an alpha percentage of black (80) into a HEX value (#333333)
 * @param {number} percentage - 0-100
 * @returns {string}
 */
export function alphaToHex(percentage) {
  const p = 100 - Math.max(0, Math.min(100, percentage));
  const intValue = Math.round((p / 100) * 255);
  const hexValue = intValue.toString(16).padStart(2, '0').toUpperCase();
  return `#${hexValue}${hexValue}${hexValue}`;
}
